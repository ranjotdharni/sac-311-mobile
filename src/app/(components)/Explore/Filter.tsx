import { View, StyleSheet, TouchableOpacity, Dimensions, Pressable, TextInput, Text, Animated, Easing, Platform } from "react-native";
import CustomText from "../CustomText";
import { DEFAULT_REGION, dateAtDaysAgo, dateToFormat, generateEndpointUrl, global, inclusiveRandom, requestTypes, symbolReference } from "../../../customs";
import { Region } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from "@expo/vector-icons";

export const MIN_COUNT: number = 20
export const MAX_COUNT: number = 50
export const MIN_DISTANCE: number = 750
export const MAX_DISTANCE: number = 2000

export let categoryLevel1String: 'Animal Control' | 'Building and Planning' | 'Code Enforcement' | 'Drains' | 'Facilities' | 'Non-City' | 'Homeless Camp' | 'Parking' | 'Parks' | 'Sewer' | 'Solid Waste' | 'Streets' | 'Urban Forestry' | 'Utility Billing' | 'Water' | 'Email Review' | 'Shared Rideables' | 'Escalation' | 'Other' | undefined
export let categoryLevel2String: 'Contact Front Street Shelter' | 'Dead Animal' | 'General: Animal Control' | 'Pet Complaint or Concerns' | 'Stray or Loose Animal' | 'General: Building and Planning' | 'Access to Capital' | 'Business Assistance/Professional Services' | 'Economic Data' | 'Environmental Brownfields Assistance' | 'Financial Empowerment' | 'General: Business Resources' | 'Navigating City of Sacramento Permits and Regulatory Environment' | 'Workforce Development & Training' | 'Auto Repair' | 'Basketball Hoop in Public Right of Way' | 'Business Compliance Entertainment' | 'Business Compliance Shopping Cart' | 'Business Compliance Short Term Rental' | 'Business Compliance Taxi Cab' | 'Business Compliance Weeds' | 'General: Code Enforcement' | 'Graffiti' | 'Housing Complaint' | 'Junk & Debris' | 'Landscaping' | 'Mechanical Noise Complaint' | 'Occupied Trailer On Private Property' | 'Pest' | 'Fences' | 'Signs, Banners, or Fliers' | 'Stagnant Water' | 'Vehicle on Private Property' | 'Vehicle Abandoned on Street' | 'Work Without a Permit' | 'Yard or Garage Sale Complaint' | 'Zoning: Detatched Accessory Structure' | 'Zoning: Fencing' | 'Zoning: Home Occupation' | 'Zoning: Improper Land Use or Overpavement' | 'General: Drains' | 'Homeless Concern' | 'Homeless Camp-Trash' | 'Homeless Encampment 500ft from School' | 'Homeless Camp at Park or Bike Trail' | 'Broken Meter or Payment Machine' | 'Customer Service: Parking' | 'Enforcement Request' | 'General: Parking' | 'Broken or Damaged Park Fence or Gate' | 'General: Parks' | 'Grounds Cleaning' | 'Irrigation' | 'Mowing or Trimming Request' | 'Other Park Concern' | 'Park Playground' | 'Request a Park Ranger' | 'Restrooms' | 'General: Sewer' | 'Bird' | 'Helbiz' | 'Lime' | 'Razor' | 'Superpedestrian' | 'General: Solid Waste' | 'Illegal Dumping' | 'Missed Weekly Collection' | 'Noise Complaint - RSW' | 'Recycle Guide or Dump Coupon Request' | 'Schedule an Appointment Based Pick-Up' | 'Bike Rack Issues' | 'Bikeway Issues' | 'Curb or Gutter' | 'General: Streets' | 'Pothole' | 'Street Lighting' | 'Sidewalk' | 'Signs and Markings' | 'Street Maintenance' | 'Streetscapes' | 'Traffic Investigation' | 'Traffic Signals' | 'General: Urban Forestry' | 'Tree Service Request' | 'General: Utility Billing' | 'General: Water' | 'Water Conservation' | 'Water Use Complaint' | undefined
export let statusString: 'NEW' | 'IN PROGRESS' | 'CLOSED'

const categoryFilterBarWidth: number = Dimensions.get('screen').width * 0.3

let HydratorProps: ((props: DateFilterProps) => JSX.Element) | ((props: CategoryFilterProps) => JSX.Element) | ((props: StatusFilterProps) => JSX.Element)

const filterFields: string[] = [
    'Date',
    'Category',
    'Status'
]

const filterElements = [
    DateFilter as (props: DateFilterProps) => JSX.Element,
    CategoryFilter as (props: CategoryFilterProps) => JSX.Element,
    StatusFilter as (props: StatusFilterProps) => JSX.Element,
]

//set any default values here
export const INITIAL_PARAMETERS: [CreateQueryParameters, number, Region, number] = [
    {
        dateFilter: {
            //set defaults as desired
            dateCreated: [dateAtDaysAgo(3), null]
        },
        categoryFilter: {
            //set defaults as desired
        },
        statusFilter: {
            //set defaults as desired
        }
    },
    30, //set default marker count
    DEFAULT_REGION, // controlled by global default region object, see customs.tsx
    750 //set default radial distance
]

// default markers are requests w/ valid addresses and created within in the last 7 days
export const INITIAL_QUERY = generateFilteredEndpointUrl(INITIAL_PARAMETERS[0], INITIAL_PARAMETERS[1], INITIAL_PARAMETERS[2], INITIAL_PARAMETERS[3])

interface FilterProps {
    region: Region,
    passUpQuery: (props: {whereClause: CreateQueryParameters, count: number, distance: number}) => void
}

interface ModalSelectorProps {
    selected: number,
    distance: number,
    count: number,
    passUpSelection: ({selected, distance, count} : { selected: number, distance: number, count: number }) => void
}

interface DateFilterProps {
    dateCreated?: [Date | null, Date | null]
    dateModified?:   [Date | null, Date | null],
    dateClosed?:     [Date | null, Date | null],
    androidPicker: [boolean, boolean][],
    passUpCreated: (d?: [Date | null, Date | null]) => void,
    passUpModified: (d?: [Date | null, Date | null]) => void,
    passUpClosed: (d?: [Date | null, Date | null]) => void,
    passUpAndroidPicker: (index: number, selector: number) => void
}

interface CategoryFilterProps {
    categoryLevel1?: string,
    categoryLevel2?: string,
    categoryIndex: number,
    passUp1: (c?: typeof categoryLevel1String) => void,
    passUp2: (c?: typeof categoryLevel2String) => void,
    setCategoryIndex: (i: number) => void,
    animReference: Animated.Value
}

interface StatusFilterProps {
    status?: string[],
    passUpStatus: (s?: ('NEW' | 'IN PROGRESS' | 'CLOSED')[]) => void
}

export interface CreateQueryParameters {
    dateFilter: {
        dateCreated?:    [Date | null, Date | null],
        dateModified?:   [Date | null, Date | null],
        dateClosed?:     [Date | null, Date | null]
    },
    categoryFilter: {
        categoryLevel1?: 'Animal Control' | 'Building and Planning' | 'Code Enforcement' | 'Drains' | 'Facilities' | 'Non-City' | 'Homeless Camp' | 'Parking' | 'Parks' | 'Sewer' | 'Solid Waste' | 'Streets' | 'Urban Forestry' | 'Utility Billing' | 'Water' | 'Email Review' | 'Shared Rideables' | 'Escalation' | 'Other'
        categoryLevel2?: 'Contact Front Street Shelter' | 'Dead Animal' | 'General: Animal Control' | 'Pet Complaint or Concerns' | 'Stray or Loose Animal' | 'General: Building and Planning' | 'Access to Capital' | 'Business Assistance/Professional Services' | 'Economic Data' | 'Environmental Brownfields Assistance' | 'Financial Empowerment' | 'General: Business Resources' | 'Navigating City of Sacramento Permits and Regulatory Environment' | 'Workforce Development & Training' | 'Auto Repair' | 'Basketball Hoop in Public Right of Way' | 'Business Compliance Entertainment' | 'Business Compliance Shopping Cart' | 'Business Compliance Short Term Rental' | 'Business Compliance Taxi Cab' | 'Business Compliance Weeds' | 'General: Code Enforcement' | 'Graffiti' | 'Housing Complaint' | 'Junk & Debris' | 'Landscaping' | 'Mechanical Noise Complaint' | 'Occupied Trailer On Private Property' | 'Pest' | 'Fences' | 'Signs, Banners, or Fliers' | 'Stagnant Water' | 'Vehicle on Private Property' | 'Vehicle Abandoned on Street' | 'Work Without a Permit' | 'Yard or Garage Sale Complaint' | 'Zoning: Detatched Accessory Structure' | 'Zoning: Fencing' | 'Zoning: Home Occupation' | 'Zoning: Improper Land Use or Overpavement' | 'General: Drains' | 'Homeless Concern' | 'Homeless Camp-Trash' | 'Homeless Encampment 500ft from School' | 'Homeless Camp at Park or Bike Trail' | 'Broken Meter or Payment Machine' | 'Customer Service: Parking' | 'Enforcement Request' | 'General: Parking' | 'Broken or Damaged Park Fence or Gate' | 'General: Parks' | 'Grounds Cleaning' | 'Irrigation' | 'Mowing or Trimming Request' | 'Other Park Concern' | 'Park Playground' | 'Request a Park Ranger' | 'Restrooms' | 'General: Sewer' | 'Bird' | 'Helbiz' | 'Lime' | 'Razor' | 'Superpedestrian' | 'General: Solid Waste' | 'Illegal Dumping' | 'Missed Weekly Collection' | 'Noise Complaint - RSW' | 'Recycle Guide or Dump Coupon Request' | 'Schedule an Appointment Based Pick-Up' | 'Bike Rack Issues' | 'Bikeway Issues' | 'Curb or Gutter' | 'General: Streets' | 'Pothole' | 'Street Lighting' | 'Sidewalk' | 'Signs and Markings' | 'Street Maintenance' | 'Streetscapes' | 'Traffic Investigation' | 'Traffic Signals' | 'General: Urban Forestry' | 'Tree Service Request' | 'General: Utility Billing' | 'General: Water' | 'Water Conservation' | 'Water Use Complaint'
    }
    statusFilter: {
        status?: ('NEW' | 'IN PROGRESS' | 'CLOSED')[]
    }
}

function createWhereClause(params: CreateQueryParameters): string {
    let final: string = `NOT(Address='')`
    let buffer: string = ''
    
    // Date Created
    if (params.dateFilter.dateCreated !== undefined) {
        let temp: [Date | null, Date | null] = params.dateFilter.dateCreated
        buffer = `${(temp[0] !== null ? `DateCreated > DATE '${dateToFormat('YYYY-MM-DD', temp[0])}'` : ``)}${(temp[0] !== null && temp[1] !== null ? ' AND ' : '')}${(temp[1] !== null ? `DateCreated < DATE '${dateToFormat('YYYY-MM-DD', temp[1])}'` : ``)}`
        buffer = `${(buffer !== '' ? ' AND ' : '')}${buffer}`
        final = `${final}${buffer}`
    }

    //Date Modified
    if (params.dateFilter.dateModified !== undefined) {
        let temp: [Date | null, Date | null] = params.dateFilter.dateModified
        buffer = `${(temp[0] !== null ? `DateUpdated > DATE '${dateToFormat('YYYY-MM-DD', temp[0])}'` : ``)}${(temp[0] !== null && temp[1] !== null ? ' AND ' : '')}${(temp[1] !== null ? `DateUpdated < DATE '${dateToFormat('YYYY-MM-DD', temp[1])}'` : ``)}`
        buffer = `${(buffer !== '' ? ' AND ' : '')}${buffer}`
        final = `${final}${buffer}`
    }

    //Date Closed
    if (params.dateFilter.dateClosed !== undefined) {
        let temp: [Date | null, Date | null] = params.dateFilter.dateClosed
        buffer = `${(temp[0] !== null ? `DateClosed > DATE '${dateToFormat('YYYY-MM-DD', temp[0])}'` : ``)}${(temp[0] !== null && temp[1] !== null ? ' AND ' : '')}${(temp[1] !== null ? `DateClosed < DATE '${dateToFormat('YYYY-MM-DD', temp[1])}'` : ``)}`
        buffer = `${(buffer !== '' ? ' AND ' : '')}${buffer}`
        final = `${final}${buffer}`
    }

    //CategoryLevel1
    if (params.categoryFilter.categoryLevel1 !== undefined && params.categoryFilter.categoryLevel1) {
        let temp = params.categoryFilter.categoryLevel1
        buffer = `CategoryLevel1 = '${temp}'`
        buffer = `${(buffer !== '' ? ' AND ' : '')}${buffer}`
        final = `${final}${buffer}`
    }

    //CategoryLevel2
    if (params.categoryFilter.categoryLevel2 !== undefined && params.categoryFilter.categoryLevel2) {
        let temp = params.categoryFilter.categoryLevel2
        buffer = `CategoryLevel2 = '${temp}'`
        buffer = `${(buffer !== '' ? ' AND ' : '')}${buffer}`
        final = `${final}${buffer}`
    }

    //Status
    if (params.statusFilter.status !== undefined) {
        let tmp: string = ''
        for (let i = 0; i < params.statusFilter.status.length; i++) {
            let temp = params.statusFilter.status[i]
            buffer = `PublicStatus = '${temp}'`
            buffer = `${(tmp !== '' ? ' OR ' : '')}${buffer}`
            tmp = `${tmp}${buffer}` 
        }

        final = `${final}${(tmp !== '' ? ` AND (${tmp})` : '')}`
    }

    return final
}

function createOutputCount(c: number): number {
    return inclusiveRandom(MIN_COUNT, c)
}

function createOutputParameters(r: Region, d: number): [string, string][] {
    return [
        ['orderByFields', 'DateCreated'],
        ['geometryType', 'esriGeometryPoint'],
        ['geometry', `${r.longitude},${r.latitude}`],
        ['distance', d + ""], //convert number to string
        ['returnDistinctValues', 'true']
    ]
}

export function generateFilteredEndpointUrl(p: CreateQueryParameters, c: number, r: Region, d: number): string {
    return generateEndpointUrl(createWhereClause(p), createOutputCount(c), createOutputParameters(r, d))
}

function ModalSelector(props: ModalSelectorProps) {
    const [buffer, setBuffer] = useState<{ selected: number, distance: number, count: number }>({ selected: props.selected, distance: props.distance, count: props.count })

    function selectedModifier(setValueTo: number): () => void {
        const exec = () => {
            setBuffer({...buffer, selected: setValueTo})
        }

        return exec
    }

    function distanceModifier(setValueTo: string) {
        if (isNaN(+setValueTo))
            return
        setBuffer({...buffer, distance: +setValueTo})
    }

    function conditionalDistanceModifier() {
        if (buffer.distance < MIN_DISTANCE || buffer.distance > MAX_DISTANCE) {
            setBuffer({...buffer, distance: props.distance})
        }
    }

    function countModifier(setValueTo: string) {
        if (isNaN(+setValueTo))
            return
        setBuffer({...buffer, count: +setValueTo})
    }

    function conditionalCountModifier() {
        if (buffer.count < MIN_COUNT || buffer.count > MAX_COUNT) {
            setBuffer({...buffer, count: props.count})
        }
    }

    return (
        <TouchableOpacity onPress={() => { props.passUpSelection(props) }} style={[modalStyles.componentWrapper]}>
            <Pressable>
                <View style={modalStyles.componentInnerContainer}>
                    <View style={modalStyles.componentHeader}>
                        <TouchableOpacity style={modalStyles.applyButtonTextWrapper} onPress={() => { props.passUpSelection(buffer) }}>
                            <CustomText text="Apply" style={modalStyles.applyButtonText} nol={0} />
                        </TouchableOpacity>
                    </View>

                    <View style={modalStyles.componentBody}>
                        <View style={{width: '90%', borderBottomWidth: 1, borderBottomColor: global.baseGrey200, paddingLeft: '1%'}}><CustomText text="Filter by Field" style={modalStyles.bodyItemHeader} nol={0} /></View>
                        {
                            filterFields.map((field, idx) => {
                                return (
                                    <View key={`ItemKeyFieldValue${field}`} style={modalStyles.bodyItem}>
                                        <CustomText text={field} style={[{ color: (buffer.selected === idx ? global.baseGold100 : global.baseBackground100) }, modalStyles.bodyItemText]} nol={0} />
                                        <TouchableOpacity onPress={selectedModifier(idx)} style={[(buffer.selected === idx ? { backgroundColor: global.baseGold100, borderColor: global.baseGold100 } : { backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: global.baseBackground100 }), modalStyles.bodyItemBubble]}></TouchableOpacity>
                                    </View>
                                )
                            }) 
                        }
                    </View>

                    <View style={modalStyles.componentFooter}>
                        <View style={{width: '90%', borderBottomWidth: 1, borderBottomColor: global.baseGrey200, paddingLeft: '1%'}}><CustomText text="Modify Constants" style={modalStyles.footerItemHeader} nol={0} /></View>
                        
                        <View style={modalStyles.footerItem}>
                            <CustomText text="Distance (m)" style={modalStyles.footerItemText} nol={0} />
                            <TextInput value={buffer.distance + ""} onChangeText={distanceModifier} onBlur={conditionalDistanceModifier} style={modalStyles.footerItemInput} keyboardType='default' />
                        </View>

                        <View style={modalStyles.footerItem}>
                            <CustomText text={`Max Items (${MIN_COUNT}-${MAX_COUNT})`} style={modalStyles.footerItemText} nol={0} />
                            <TextInput value={buffer.count + ""} onChangeText={countModifier} onBlur={conditionalCountModifier} style={modalStyles.footerItemInput} keyboardType='default' />
                        </View>
                    </View>
                </View>
            </Pressable>
        </TouchableOpacity>
    )
}

function DateFilter(props: DateFilterProps): JSX.Element {

    const editDateCreated = (idx: number) => {
        return (d: Date) => {
            let args: [Date | null, Date | null] = (props.dateCreated ? [...props.dateCreated] : [null, null])
            args[idx] = d
            props.passUpCreated(args)
        }
    }

    const editDateModified = (idx: number) => {
        return (d: Date) => {
            let args: [Date | null, Date | null] = (props.dateModified ? [...props.dateModified] : [null, null])
            args[idx] = d
            props.passUpModified(args)
        }
    }

    const editDateClosed = (idx: number) => {
        return (d: Date) => {
            let args: [Date | null, Date | null] = (props.dateClosed ? [...props.dateClosed] : [null, null])
            args[idx] = d
            props.passUpClosed(args)
        }
    }

    function AddDate(props: { passUpDate: (d: Date) => void }) {
        
        const addFunction = () => {
            props.passUpDate(new Date)
        }

        return (
            <TouchableOpacity onPress={addFunction} style={dateFilterStyles.addWrapper}>
                <MaterialIcons name="add" style={dateFilterStyles.addIcon} />
                <CustomText text="Add" style={dateFilterStyles.addText} nol={0} />
            </TouchableOpacity>
        )
    }

    function DateRange(DateRangeProps: { title: string, androidPicker: number, setAndroidPicker: (index: number, selector: number) => void, passUpDateFunction: (idx: number) => ((d: Date) => void), dateArray?: [Date | null, Date | null]}) {
        function submitStart(arg0: DateTimePickerEvent, arg1?: Date) {
            const orchestrate = DateRangeProps.passUpDateFunction(0)
            orchestrate(arg1!)
        }

        function submitStop(arg0: DateTimePickerEvent, arg1?: Date) {
            const orchestrate = DateRangeProps.passUpDateFunction(1)
            orchestrate(arg1!)
        }

        function inferComponent(select: number): JSX.Element {
            if (Platform.OS === 'android'){
                return (
                    props.androidPicker[DateRangeProps.androidPicker][select] ?
                    <DateTimePicker value={DateRangeProps.dateArray![select] as Date} onChange={select === 0 ? submitStart : submitStop} mode="date" /> :
                    <TouchableOpacity onPress={() => { DateRangeProps.setAndroidPicker(DateRangeProps.androidPicker, select) }} style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <CustomText text={dateToFormat('MMM DD, YYYY', DateRangeProps.dateArray![select]!)} style={{color: global.baseGold100, fontSize: 9, textAlign: 'center'}} nol={0} />
                    </TouchableOpacity>
                )
            }

            return <DateTimePicker value={DateRangeProps.dateArray![select] as Date} onChange={select === 0 ? submitStart : submitStop} mode="date" />
        }

        return (
            <View style={dateFilterStyles.componentItem}>
                <CustomText text={DateRangeProps.title} style={dateFilterStyles.componentText} nol={0} />
                <View style={dateFilterStyles.componentStart}>
                    {
                        (
                            DateRangeProps.dateArray === undefined || DateRangeProps.dateArray[0] === null ?
                            <AddDate passUpDate={DateRangeProps.passUpDateFunction(0)} /> :
                            inferComponent(0)
                        )
                    }
                </View>
                <CustomText text="To" style={dateFilterStyles.componentSplit} nol={0} />
                <View style={dateFilterStyles.componentStop}>
                    {
                        (
                            DateRangeProps.dateArray === undefined || DateRangeProps.dateArray[1] === null ?
                            <AddDate passUpDate={DateRangeProps.passUpDateFunction(1)} /> :
                            inferComponent(1)
                        )
                    }
                </View>
                
            </View>
        )
    }

    return (
        <View style={filterStyles.componentWrapper}>
            <DateRange androidPicker={0} setAndroidPicker={props.passUpAndroidPicker} title="Date Created" passUpDateFunction={editDateCreated} dateArray={props.dateCreated} />
            <DateRange androidPicker={1} setAndroidPicker={props.passUpAndroidPicker} title="Date Modified" passUpDateFunction={editDateModified} dateArray={props.dateModified} />
            <DateRange androidPicker={2} setAndroidPicker={props.passUpAndroidPicker} title="Date Closed" passUpDateFunction={editDateClosed} dateArray={props.dateClosed} />
        </View>
    )
}

const CategorySelector = (props: { category?: string, changeFunction: (val: string, idx: number) => void, categoryArray: string[] }) => {
    return (
        <View style={categoryFilterStyles.componentPickerWrapper}>
            <Picker style={categoryFilterStyles.componentPicker} selectedValue={props.category} onValueChange={props.changeFunction}>
                <Picker.Item style={categoryFilterStyles.componentPickerItem} key='CategoryPickerItemValueNone' label='None' value={undefined} />
                {
                    props.categoryArray.map((item) => (
                        <Picker.Item key={`CategoryPickerItemValue${item}`} label={item} value={item} />
                    ))
                }
            </Picker>
        </View>
    )
}

function CategoryFilter(props: CategoryFilterProps) {
    const onL1Change = (val: string, idx: number) => {
        props.passUp1(val as typeof categoryLevel1String)
    }

    const onL2Change = (val?: string, idx?: number) => {
        props.passUp2(val as typeof categoryLevel2String)
    }

    const setToType = () => {
        props.setCategoryIndex(0)
    }

    const setToSubtype = () => {
        props.setCategoryIndex(1)
    }

    const getSubcategoryArray = (l1?: string): string[] => {
        let buffer: string[] = []

        if (l1 === undefined) {
            for (let i = 0; i < requestTypes.length; i++) {
                if (symbolReference.some((item) => item.category === requestTypes[i].type)) {
                    for (let j = 0; j < requestTypes[i].subTypes.length; j++) {
                        buffer.push(requestTypes[i].subTypes[j].subType)
                    }
                }
            }

            return buffer
        }

        for (let i = 0; i < requestTypes.length; i++) {
            if (requestTypes[i].type === l1) {
                for (let j = 0; j < requestTypes[i].subTypes.length; j++) {
                    buffer.push(requestTypes[i].subTypes[j].subType)
                }

                return buffer
            }
        }

        for (let i = 0; i < requestTypes.length; i++) {
            if (symbolReference.some((item) => item.category === requestTypes[i].type)) {
                for (let j = 0; j < requestTypes[i].subTypes.length; j++) {
                    buffer.push(requestTypes[i].subTypes[j].subType)
                }
            }
        }

        return buffer
    }

    return (
        <View style={categoryFilterStyles.componentWrapper}>
            <View style={categoryFilterStyles.componentTypeToggle}>
                <TouchableOpacity onPress={ setToType } style={categoryFilterStyles.componentTypeItem}>
                    <CustomText text="Type" style={[categoryFilterStyles.typeText, (props.categoryIndex === 0 ? categoryFilterStyles.activeType : categoryFilterStyles.inactiveType)]} nol={0} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ setToSubtype } style={categoryFilterStyles.componentTypeItem}>
                    <CustomText text="Sub-Type" style={[categoryFilterStyles.typeText, (props.categoryIndex === 1 ? categoryFilterStyles.activeType : categoryFilterStyles.inactiveType)]} nol={0} />
                </TouchableOpacity>
                <Animated.View style={[categoryFilterStyles.componentTypeBar, { transform: [ { translateX: props.animReference } ] }]}></Animated.View>
            </View>
            {
                (
                    props.categoryIndex === 0 ?
                    <CategorySelector category={props.categoryLevel1} changeFunction={onL1Change} categoryArray={symbolReference.map((item) => { return item.category })} /> :
                    <CategorySelector category={props.categoryLevel2} changeFunction={onL2Change} categoryArray={getSubcategoryArray(props.categoryLevel1)} />
                )
            }
        </View>
    )
}

function StatusFilter(props: StatusFilterProps): JSX.Element {

    const statusReference: { name: 'NEW' | 'IN PROGRESS' | 'CLOSED', color: string }[] = [
        {
            name: 'NEW',
            color: global.baseGold100
        },
        {
            name: 'IN PROGRESS',
            color: global.baseGold100
        },
        {
            name: 'CLOSED',
            color: global.baseGold100
        }
    ]

    const statusModifier = (name: 'NEW' | 'IN PROGRESS' | 'CLOSED'): (() => void) => {
        function complex() {
            let args = props.status

            if (args === undefined) {
                props.passUpStatus([name])
                return
            }

            if (args!.indexOf(name) === -1) {
                let temp: typeof props.status = [...args]
                temp.push(name)
                props.passUpStatus(temp as ('NEW' | 'IN PROGRESS' | 'CLOSED')[])
                return
            }
            
            args!.splice( args!.indexOf(name), 1)

            if (args!.length === 0) {
                props.passUpStatus()
                return
            }

            props.passUpStatus(args as ('NEW' | 'IN PROGRESS' | 'CLOSED')[])
        }

        return complex
    }

    function StatusAdder(props: { name: string, color: string, added: boolean, switchFunction: () => void }) {
        return (
            <View style={statusFilterStyles.adderWrapper}>
                <View style={statusFilterStyles.adderLeft}>
                    <CustomText text={props.name} style={[statusFilterStyles.adderTitle, { color: props.color }]} nol={0} />
                </View>
                <View style={statusFilterStyles.adderRight}>
                    <TouchableOpacity onPress={props.switchFunction} style={[statusFilterStyles.adderButton, (props.added ? { backgroundColor: 'red' } : { backgroundColor: 'green' })]}>
                        <CustomText text={(props.added ? 'Remove' : 'Add')} style={statusFilterStyles.adderButtonText} nol={0} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={statusFilterStyles.componentWrapper}>
            <View style={statusFilterStyles.titleWrapper}>
                <CustomText text="Specify Status(es)" style={statusFilterStyles.title} nol={0} />
            </View>
            {
                statusReference.map((item) => {
                    return (
                        <StatusAdder key={`StatusAdderItemValue${item.name}`} name={item.name} color={item.color} added={props.status !== undefined && props.status.indexOf(item.name) !== -1} switchFunction={statusModifier(item.name)} />
                    )
                })
            }
        </View>
    )
}

export default function Filter(props: FilterProps) {
    const [modal, showModal] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<{ selected: number, distance: number, count: number }>({ selected: 0, distance: INITIAL_PARAMETERS[3], count: INITIAL_PARAMETERS[1] })
    const [whereClause, setWhereClause] = useState<CreateQueryParameters>(INITIAL_PARAMETERS[0])
    const [categoryIdx, setCategoryIdx] = useState<number>(0)
    const [showDatePicker, setDatePicker] = useState<[boolean, boolean][]>([[false, false], [false, false], [false, false]])
    const [buffer, setBuffer] = useState<typeof INITIAL_PARAMETERS>(INITIAL_PARAMETERS)

    let slideAnim = useRef(new Animated.Value(categoryIdx * categoryFilterBarWidth)).current

    useEffect(() => {
        Animated.spring(slideAnim, {
            toValue: categoryIdx * categoryFilterBarWidth,
            useNativeDriver: true
        }).start()
    }, [categoryIdx])

    const modifyPickerSet = (index: number, selector: number) => {
        let obj: [boolean, boolean][] = [...showDatePicker]
        let temp: [boolean, boolean] = obj[index]
        temp[selector] = !temp[selector]
        obj[index] = temp
        setDatePicker(obj)
    }

    const closePickers = () => {
        setDatePicker([[false, false], [false, false], [false, false]])
    }

    const setDateCreated = (d?: [Date | null, Date | null]) => {
        let obj = {...whereClause.dateFilter, dateCreated: d}
        setWhereClause({...whereClause, dateFilter: obj})
        closePickers()
    }

    const setDateModified = (d?: [Date | null, Date | null]) => {
        let obj = {...whereClause.dateFilter, dateModified: d}
        setWhereClause({...whereClause, dateFilter: obj})
        closePickers()
    }

    const setDateClosed = (d?: [Date | null, Date | null]) => {
        let obj = {...whereClause.dateFilter, dateClosed: d}
        setWhereClause({...whereClause, dateFilter: obj})
        closePickers()
    }

    const setCategoryLevel1 = (c?: typeof categoryLevel1String) => {
        let obj = {...whereClause.categoryFilter}
        delete obj.categoryLevel2
        obj = {...obj, categoryLevel1: c}
        setWhereClause({...whereClause, categoryFilter: obj})
    }

    const setCategoryLevel2 = (c?: typeof categoryLevel2String) => {
        let obj = {...whereClause.categoryFilter, categoryLevel2: c}
        setWhereClause({...whereClause, categoryFilter: obj})
    }

    const setStatus = (s?: (typeof statusString)[]) => {
        let obj = {...whereClause.statusFilter, status: s}
        setWhereClause({...whereClause, statusFilter: obj})
    }

    const DateHydrator = (primitive: typeof HydratorProps): JSX.Element => {
        let args: DateFilterProps = {
            dateCreated: whereClause.dateFilter.dateCreated,
            dateModified: whereClause.dateFilter.dateModified,
            dateClosed: whereClause.dateFilter.dateClosed,
            androidPicker: showDatePicker,
            passUpCreated: setDateCreated,
            passUpModified: setDateModified,
            passUpClosed: setDateClosed,
            passUpAndroidPicker: modifyPickerSet
        }

        const complex: (props: DateFilterProps) => JSX.Element = primitive as (props: DateFilterProps) => JSX.Element

        return complex(args) 
    }

    const CategoryHydrator = (primitive: typeof HydratorProps): JSX.Element => {
        let args: CategoryFilterProps = {
            categoryLevel1: whereClause.categoryFilter.categoryLevel1,
            categoryLevel2: whereClause.categoryFilter.categoryLevel2,
            categoryIndex: categoryIdx,
            passUp1: setCategoryLevel1,
            passUp2: setCategoryLevel2,
            setCategoryIndex: setCategoryIdx,
            animReference: slideAnim
        }

        const complex: (props: CategoryFilterProps) => JSX.Element = primitive as (props: CategoryFilterProps) => JSX.Element

        return complex(args)
    }

    const StatusHydrator = (primitive: typeof HydratorProps): JSX.Element => {
        let args: StatusFilterProps = {
            status: whereClause.statusFilter.status,
            passUpStatus: setStatus
        }

        const complex: (props: StatusFilterProps) => JSX.Element = primitive as (props: StatusFilterProps) => JSX.Element

        return complex(args)
    }

    const hydrators = [
        DateHydrator,
        CategoryHydrator,
        StatusHydrator
    ]
    
    function toggleModal() {
        showModal(!modal)
    }

    function changeFilterField(f: { selected: number, distance: number, count: number }) {
        setFilterBy(f)
        showModal(false)
    }

    function checkDiff(): boolean {
        if (buffer[0] !== whereClause) {
            return true
        }

        if (buffer[1] !== filterBy.count) {
            return true
        }

        if (buffer[3] !== filterBy.distance) {
            return true
        }

        return false
    }

    function apply() {
        if (checkDiff()) {
            setBuffer([whereClause, filterBy.count, props.region, filterBy.distance])
            props.passUpQuery({whereClause: whereClause, count: filterBy.count, distance: filterBy.distance})
        }
    }

    function reset() {
        setWhereClause(buffer[0])
        setFilterBy({...filterBy, count: buffer[1], distance: buffer[3]})
    }

    function Applicator() {
        return (
            <View style={{position: 'absolute', width: '100%', height: '15%', top: '87.5%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '10%',}}>
                <TouchableOpacity onPress={() => { reset() }} style={{marginRight: '10%'}}>
                    <CustomText text="Reset" style={{fontSize: 18, color: 'red'}} nol={0} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { apply() }}>
                    <CustomText text="Apply" style={{fontSize: 18, color: ( checkDiff() ? global.baseGold100 : global.baseGrey200)}} nol={0} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <View style={styles.componentWrapper}>
                <View style={styles.componentSwitch}>
                    <View style={styles.mainHeaderWrapper}>
                        <CustomText text="Filter" style={styles.mainHeader} nol={0} />
                    </View>

                    <CustomText text="Filter By" style={styles.componentTitle} nol={0} />
                    <TouchableOpacity style={styles.componentFieldWrapper} onPress={toggleModal}>
                        <CustomText text={filterFields[filterBy.selected]} style={styles.componentField} nol={0} />
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        hydrators[filterBy.selected](filterElements[filterBy.selected] as typeof HydratorProps)
                    }
                </View>
            </View>
            <Applicator />
            {(modal ? <ModalSelector selected={filterBy.selected} distance={filterBy.distance} count={filterBy.count} passUpSelection={changeFilterField} /> : <></>)}
        </>
    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: '90%',
        height: '90%',
        marginLeft: '5%'
    },

    mainHeaderWrapper: {
        width: '40%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    mainHeader: {
        fontSize: 28,
        color: global.baseBlue100,
    },

    componentSwitch: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

    componentTitle: {
        flex: 1,
        marginTop: '1%',
        paddingRight: '2.5%',
        fontSize: 12,
        color: global.baseGrey200,
        textAlign: 'right'
    },

    componentFieldWrapper: {
        borderRadius: 5,
        borderColor: global.baseGrey200,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: global.baseBlue100
    },

    componentField: {
        fontSize: 16,
        color: global.baseGold100
    }
})

const modalStyles = StyleSheet.create({
    componentWrapper: {
        position: 'absolute',
        top: '-50%',
        left: '-5.5%',
        width: Dimensions.get('screen').width * 2,
        height: Dimensions.get('screen').height * 2,

        backgroundColor: 'rgba(13, 13, 13, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    componentInnerContainer: {
        width: Dimensions.get('screen').width * 0.75,
        height: Dimensions.get('screen').height * 0.4,
        position: 'relative',
        left: Dimensions.get('screen').width * 0.125,
        top: Dimensions.get('screen').height * 0.2,
        backgroundColor: global.baseBlue100,
        borderRadius: 10,
    },

    componentHeader: {
        width: '95%',
        height: '10%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    componentBody: {
        width: '100%',
        height: '45%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    componentFooter: {
        width: '100%',
        height: '45%',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    applyButtonTextWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: global.baseGold100,
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
    },

    applyButtonText: {
        fontSize: 18,
        color: global.baseGold100
    },

    bodyItem: {
        width: '100%',
        height: '12%',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingLeft: '10%',
        paddingRight: '10%',
        marginTop: '3%'
    },

    bodyItemHeader: {
        fontSize: 17,
        color: global.baseGold100,
    },

    bodyItemText: {
        fontSize: 16
    },

    bodyItemBubble: {
        height: '50%',
        aspectRatio: 1 / 1,
        borderWidth: 1,
        borderRadius: 100
    },

    footerItemHeader: {
        fontSize: 17,
        color: global.baseGold100,
    },

    footerItem: {
        width: '90%',
        height: '20%',

        marginTop: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '5%',
        borderRadius: 7,
        backgroundColor: global.baseGold100,
    },

    footerItemText: {
        color: global.baseBackground100,
        textAlign: 'left',
        flex: 1,
        paddingLeft: '2.5%',
    },

    footerItemInput: {
        width: 50,
        height: '50%',
        backgroundColor: global.baseBackground100,
        borderWidth: 1,
        borderColor: global.baseBlue100,
        borderRadius: 5,
        textAlign: 'center'
    }
})

const filterStyles = StyleSheet.create({
    componentWrapper: {
        width: '100%',
        height: '98%',

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

const dateFilterStyles = StyleSheet.create({
    componentItem: {
        width: '100%',
        height: '20%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        borderRadius: 5,
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        marginTop: '5%',
        backgroundColor: global.baseBlue100
    },

    componentText: {
        width: '30%',
        
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 12,
        color: global.baseBackground100
    },

    componentSplit: {
        width: '10%',

        textAlign: 'right',
        marginRight: '2.5%',
        color: global.baseBackground100
    },

    componentStart: {
        width: '30%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    componentStop: {
        width: '30%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    addWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '17.5%',
        paddingRight: '17.5%',
    },

    addIcon: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: global.baseGold100,
        color: global.baseGold100
    },

    addText: {
        fontSize: 18,
        color: global.baseGold100,
    }
})

const categoryFilterStyles = StyleSheet.create({
    componentWrapper: {
        width: '100%',
        height: '100%',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    componentPickerWrapper: {
        width: '90%',
    },

    componentPicker: {
        
    },

    componentPickerItem: {
        
    },

    componentTypeToggle: {
        width: categoryFilterBarWidth * 2,
        height: '20%',
        
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    
    componentTypeItem: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },

    typeText: {
        fontSize: 18
    },

    activeType: {
        color: global.baseGold100
    },

    inactiveType: {
        color: global.baseBlue100
    },

    componentTypeBar: {
        width: categoryFilterBarWidth,
        height: '100%',
        borderBottomWidth: 2,
        borderColor: global.baseGold100,
        position: 'absolute',
    }
})

const statusFilterStyles = StyleSheet.create({
    componentWrapper: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    titleWrapper: {
        width: '100%',
        
        borderBottomWidth: 1,
        borderColor: global.baseGrey200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginTop: '5%',
    },

    title: {
        color: global.baseGold100,
        fontSize: 18,
    },

    adderWrapper: {
        width: '90%',
        height: '15%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%',
        backgroundColor: global.baseBlue100,
        borderRadius: 10,
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    adderLeft: {
        width: '70%',
        height: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    adderRight: {
        width: '30%',
        height: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    adderTitle: {
        fontSize: 18,
    },

    adderButton: {
        width: '90%',
        paddingLeft: '5%',
        paddingRight: '5%',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    adderButtonText: {
        fontSize: 16,
        color: global.baseBackground100,
    }
})