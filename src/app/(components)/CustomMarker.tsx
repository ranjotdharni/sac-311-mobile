import { Marker } from "react-native-maps";
import { responseType } from "../../customs";
import { Image } from "react-native";

export default function CustomMarker({ markerData, image, passUp } : { markerData: responseType, image: string, passUp: (obj: responseType) => void }) {
    if (markerData.geometry === undefined) {    // ensure valid geometry exists
        return (
            <></>
        )
    }

    return (
        <Marker image={{uri: image}} coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => {passUp(markerData)}}>
    
        </Marker>
    )
}