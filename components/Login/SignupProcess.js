import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignupProcess = () => {
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
                        onPress={()=>navigation.goBack()}
                    >
                        <Image
                            source={require('./icons/BackIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* main heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                        Fill in your bio to get started
                    </Text>
                </View>
                {/* secondary heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        This data will be displayed in your account profile for security
                    </Text>
                </View>
                {/* input fields */}
                <View style={{ marginHorizontal: 25, marginTop: 20, }}>
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='First Name'
                        placeholderTextColor='#fff'
                        maxLength={20}
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Last Name'
                        placeholderTextColor='#fff'
                        maxLength={20}
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Phone Number'
                        placeholderTextColor='#fff'
                        keyboardType='number-pad'
                        maxLength={11}
                    />
                </View>
                {/* Next btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 202, borderRadius: 20,  }}
                    onPress={() => navigation.navigate("PaymentMethod")}
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

export default SignupProcess

const styles = StyleSheet.create({})