import { Marker } from "react-native-maps";
import { generateSymbolUrl, responseType } from "../../customs";
import { Image } from "react-native";

export default function CustomMarker({ markerData, isActive, passUp } : { markerData: responseType, isActive: boolean, passUp: (obj: responseType) => void }) {
    return (
        <Marker coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => {passUp(markerData)}}>
            <Image 
                source={{uri: generateSymbolUrl(markerData.attributes.CategoryLevel1)}}
                style={{width: (isActive ? 60 : 20), height: (isActive ? 60 : 20)}}
            />
        </Marker>
    )
}