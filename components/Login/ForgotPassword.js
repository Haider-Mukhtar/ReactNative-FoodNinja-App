import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
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
                        Forgot password?
                    </Text>
                </View>
                {/* secondary heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        Select which contact details should we use to reset your password                    </Text>
                </View>
                {/* options btns */}
                <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#4d4d4d', borderRadius: 15, }}
                    >
                        <View style={{ flexDirection: 'row', marginLeft: 23, marginVertical: 20, alignItems: 'center', }}>
                            <Image
                                style={{ marginRight: 12 }}
                                source={require('./icons/Message.png')}
                            />
                            <View style={{ marginVertical: 12 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 22, }}>
                                    Via sms:
                                </Text>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                                    ···········
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#4d4d4d', borderRadius: 15, }}
                    >
                        <View style={{ flexDirection: 'row', marginLeft: 23, marginVertical: 20, alignItems: 'center', }}>
                            <Image
                                style={{ marginRight: 12 }}
                                source={require('./icons/Email.png')}
                            />
                            <View style={{ marginVertical: 12 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 22, }}>
                                    Via email:
                                </Text>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, }}>
                                    ········@gmail.com
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Next btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 208, borderRadius: 20, }}
                    onPress={() => navigation.navigate("NewPassword")}
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

export default ForgotPassword

const styles = StyleSheet.create({})