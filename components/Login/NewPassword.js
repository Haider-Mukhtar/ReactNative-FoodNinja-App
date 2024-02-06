import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
            <StatusBar
                backgroundColor="#0D0D0D"
                barStyle="light-content"
            />
            <View style={{ flex: 1 }}>
                {/* back btn */}
                <View style={{ marginLeft: 25, marginTop: 30 }}>
                    <TouchableOpacity
                        style={{ paddingVertical: 14, paddingHorizontal: 18, backgroundColor: '#4d4d4d', alignSelf: 'flex-start', borderRadius: 15, }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('./icons/BackIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* main heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                        Reset your password here
                    </Text>
                </View>
                {/* secondary heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        Select which contact details should we use to reset your password                    </Text>
                </View>
                {/* input fields */}
                <View style={{ marginHorizontal: 25, marginTop:20 }}>
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='New Password'
                        placeholderTextColor='#fff'
                        secureTextEntry
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Confirm Password'
                        placeholderTextColor='#fff'
                        secureTextEntry
                    />
                </View>
                {/* Next btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 268, borderRadius: 20, }}
                    onPress={() => navigation.navigate("PasswordResetSuccess")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewPassword

const styles = StyleSheet.create({})