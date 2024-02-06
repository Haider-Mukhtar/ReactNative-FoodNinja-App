import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignupSuccess = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
            <StatusBar
                backgroundColor="#0D0D0D"
                barStyle="light-content"
            />
            <View style={{ flex: 1 }}>
                {/* banner */}
                <Image
                    style={{ width: '100%' }}
                    source={require('./pattern/Pattern.png')}
                />
                {/* center heading */}
                <View style={{ alignItems: 'center', top: -60 }}>
                    <Image
                        source={require('./icons/SuccessIcon.png')}
                    />
                    <Text style={{ color: '#53E88B', fontSize: 36, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, textAlign: 'center', marginTop: 16 }}>
                        Congrats!
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center' }}>
                        Your Profile Is Ready To Use
                    </Text>
                </View>
                {/* Back btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 122, borderRadius: 20, }}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                        Try Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupSuccess

const styles = StyleSheet.create({})
