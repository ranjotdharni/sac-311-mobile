import React from "react";
import { useRef } from "react";
import { DimensionValue, ScrollView, View, StyleSheet, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

//  When using this prop and determining what scrollOffset prop should be!!!!!
//======================================================================================================================================================================================
//  For proper functionality, the scrollOffset must keep a relationship between itself 
//  and the width of EACH, INDIVIDUAL item in the scrollable list. Each item must have
//  an absolute width based on SCREEN SIZE!!!!!!!!!!!!!!!!! This relationship is then:
//
//
//  x = width of one, single scrollView item as a decimal percentage of the screen width (example: x = 0.5 means width is 0.5 * screenWidth, x = 0.75 means width is 0.75 * screenWidth)
//
//  then,
//
//  scrollOffset = screenWidth * [ x + ( (1 - x) / 2 ) ]

interface props { 
    nestData: any, 
    nestCallback: any, 
    endPadding: DimensionValue, 
    scrollOffset: number, 
    minScroll: number, 
    itemCount: number ,
    bubbles?: {
        radius: number,
        spacing: number,
        color: string,
        activeRadius: number,
        activeColor: string,
    } | undefined
}

export default function Carousel({ nestData, nestCallback, endPadding, scrollOffset, minScroll, itemCount, bubbles } : props) {

    const scrollRef = useRef<ScrollView>(null)
    const bubbleRefs = useRef<Array<View>>([])
    let index = 0  
    let scrollStartX = 0

    const bubbleKeys = (bubbles !== undefined ? new Array(itemCount).fill(0) : [])

    bubbleKeys.forEach((item: any, currIndex: number) => {
        bubbleKeys[currIndex] =  Math.floor(Math.random() * 100000)
    })

    function onScrollBegin(e: any) {
        scrollStartX = e.nativeEvent.contentOffset.x
    }

    function onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
        let scrollEndX = e.nativeEvent.contentOffset.x
        let distance = scrollEndX - scrollStartX
        
        let leftSwipe = distance > minScroll
        let rightSwipe = distance < -(minScroll === 0 ? 1 : minScroll)

        if (leftSwipe && index < itemCount - 1)
        {
            index = index + 1

            if (bubbles !== undefined)
            {
                bubbleRefs.current[index - 1].setNativeProps({
                    style: {
                        backgroundColor: bubbles!.color,
                        width: bubbles!.radius,
                        borderRadius: bubbles!.radius / 2
                    }
                })

                bubbleRefs.current[index].setNativeProps({
                    style: {
                        backgroundColor: bubbles!.activeColor,
                        width: bubbles!.activeRadius,
                        borderRadius: bubbles!.activeRadius / 2,
                    }
                })
            }
        }

        if (rightSwipe && index > 0)
        {
            index = index - 1

            if (bubbles !== undefined)
            {
                bubbleRefs.current[index + 1].setNativeProps({
                    style: {
                        backgroundColor: bubbles!.color,
                        width: bubbles!.radius,
                        borderRadius: bubbles!.radius / 2
                    }
                })
                
                bubbleRefs.current[index].setNativeProps({
                    style: {
                        backgroundColor: bubbles!.activeColor,
                        width: bubbles!.activeRadius,
                        borderRadius: bubbles!.activeRadius / 2,
                    }
                })
            }
        }

        scrollRef.current!.scrollTo({ x: scrollOffset * index, animated: true })
    }

    return (
        <>
            <ScrollView ref={scrollRef} horizontal onScrollBeginDrag={onScrollBegin} onScrollEndDrag={onScrollEnd} contentContainerStyle={{/*flexGrow: 1,*/ paddingRight: endPadding}}>
                { nestCallback(nestData) }
            </ScrollView>
            {(bubbles !== undefined ? <View style={[styles.bubbleWrapper, { width: Dimensions.get('screen').width * bubbles!.spacing, left: Dimensions.get('screen').width * ((1 - bubbles!.spacing) / 2), }]}>
                {
                    bubbleKeys.map((referencing: any, curve: number) => {
                        return <View ref={(el) => {bubbleRefs.current[curve] = el!}} key={referencing} style={[styles.bubble, {width: (curve === 0 ? bubbles!.activeRadius : bubbles!.radius), borderRadius: (curve === 0 ? bubbles!.activeRadius / 2 : bubbles!.radius / 2), backgroundColor: (curve === 0 ? bubbles!.activeColor : bubbles!.color)}]} />
                    })
                }
            </View> : <></>)}
        </>
    )
}

const styles = StyleSheet.create({
    bubbleWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

    bubble: {
        aspectRatio: 1 / 1,
        marginBottom: '15%', 
    },
})