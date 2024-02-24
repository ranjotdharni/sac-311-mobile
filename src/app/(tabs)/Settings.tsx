import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { shadowUniversal, global } from "../../customs";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons"
import { Switch } from "react-native-gesture-handler";

export default function Settings()
{
    const [notif, setNotif] = useState(false);
    const [dark, setDarkMode] = useState(false);
    const toggleNotifs = () => setNotif(previousState => !previousState);
    const toggleDarkMode = () => setDarkMode(previousState => !previousState);
    return(
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}>
            <Text style={styles.Settings}>Settings</Text>
            <View style={styles.IconContainer}>
                <MaterialIcons name="notifications" size={Dimensions.get('screen').width * 0.065} color={'#c9b15b'}/>
                <View style= {styles.NotificationContainer}>
                    <Text style={styles.ButtonText}>Push Notifications</Text>
                    <Switch onValueChange={toggleNotifs} value = {notif} trackColor={{true: '#9a9ce6'}} thumbColor={notif? 'default': '#2b20a8' }/>
                </View>
            </View>
            <Text style={styles.DescriptionText}>Notify me when a request I submit receives an update</Text>
            <View style={styles.IconContainer}>
                <MaterialIcons name="bedtime" size={Dimensions.get('screen').width * 0.065} color={'#c9b15b'}/>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.ButtonText}>Dark Mode</Text>
                    <Switch onValueChange={toggleDarkMode} value = {dark} trackColor={{true: '#9a9ce6'}} thumbColor={dark? 'default': '#2b20a8' }/>
                </View>
            </View>
            <Text style={styles.DescriptionText}>Enable a darker theme to reduce brightness and eye strain</Text>
            <View style={{alignItems:"center", padding:'4%', justifyContent:"space-evenly"}}>
                <Pressable style={styles.logButton}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Log Out</Text> 
                </Pressable>
                <Pressable style={styles.button}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Delete My Account</Text> 
                </Pressable>
            </View>
            <Pressable>
                <Text style={{color:"#2b20a8", fontSize:14, fontWeight:"400", justifyContent:"center", alignItems:"center", textAlign:"center", paddingTop:"8%"}}>Report a Bug</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Settings:{
        fontSize:40, 
        marginTop:"15%",
        paddingTop:"5%", 
        paddingLeft:"6%",
        marginRight:"25%", 
        marginBottom:"5%",
        paddingBottom:"3%", 
        fontWeight: "700", 
        color:'#ffffff', 
        backgroundColor:'#2b20a8',
        borderTopRightRadius:50,
        borderBottomRightRadius:50
    },

    ButtonText:{
        fontSize: 19,
        paddingLeft: '5%',
        fontWeight: '500'
    },

    DescriptionText:{
        fontSize: 13,
        paddingLeft: '5%',
        paddingBottom: '3%',
        fontWeight: '300'
    },
    NotificationContainer:{
        width:"90%",
        justifyContent:'space-between', 
        flexDirection:"row", 
        alignItems:'center',
        paddingRight:'3%',
    },
    IconContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"5%",
        justifyContent:'space-between'
    },

    button: {
        paddingTop:'5%',
        paddingBottom: '5%',
        textAlign: "center",
        justifyContent:"center",
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#de3131',
        color: '#ffffff'
      },
    
    logButton: {
        marginBottom:"5%",
        paddingTop:'5%',
        paddingBottom: '5%',
        textAlign: "center",
        justifyContent:"center",
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#95959e',
        color: '#ffffff'
    }
})