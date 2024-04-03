import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from "react-native";
import { ParamResponseType, ParameterResponseToResponseObject, global, responseType, salesforceDevelopmentSignature, salesforceSandboxUrl } from "../../../customs";
import React, { useContext, useEffect, useState } from 'react';
import Request from "../Request";
import { Loader } from "../Loader";
import { Context } from "../context/TokenContext";

const YourRequests: React.FC = () => {
    const { token } = useContext(Context)

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [data, setData] = useState<Array<responseType>>([])

    const handleLoginPress = () => {
        // placeholder for login logic
    };

    async function grabUserRequests() {
        const query = `SELECT Description, Address_Geolocation__Latitude__s, Address_Geolocation__Longitude__s, CaseNumber, Service_Type__c, Sub_Service_Type__c, Council_District__c, CreatedDate, LastModifiedDate, ClosedDate, GIS_Street_Address__c, GIS_Zip_Code__c, Id, Address__c, GIS_System_Info__c, Status, GIS_Neighborhood_Name__c FROM Case WHERE Subject = '${salesforceDevelopmentSignature}'`

        await fetch(salesforceSandboxUrl + '/query?q=' + query, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then((middle) => {
            return middle.json()
        }).then((res) => {
            setData(res.records.map((item: ParamResponseType) => {
                return ParameterResponseToResponseObject(item)
            }))
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        grabUserRequests()
    })

    function LoginView() {
        return (
            <>
                <Text style={styles.title}>Log in to view your requests</Text>
            
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                
                <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={handleLoginPress}
                    style={[styles.loginButton]}
                    activeOpacity={0.7} //changes button opacity when pressed
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={styles.container}>
            {
                (
                    data.length === 0 ?
                    <Loader /> :
                    data.map(item => {
                        return (
                            <Request key={item.attributes.ReferenceNumber} data={item} compact={false} width='100%' height={Dimensions.get('screen').height * 0.2} />
                        )
                    })
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    forgotPassword: {
        color: global.baseBlue100,
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: global.baseBlue100,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },
});

export default YourRequests;