import { Marker } from "react-native-maps";
import { responseType } from "../../customs";
import { memo, useCallback } from "react";

function CustomMarker({ markerData, image, passUp } : { markerData: responseType, image: string, passUp: (obj: responseType) => void }) {
    if (markerData.geometry === undefined) {    // ensure valid geometry exists
        return (
            <></>
        )
    }

    //const memoizedPassUp = useCallback(() => { passUp(markerData) }, [])

    return (
        <Marker tracksViewChanges={false} icon={{uri: image}} coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => { passUp(markerData) }}>
        </Marker>
    )
}

export default memo(CustomMarker)