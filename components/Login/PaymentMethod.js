import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = () => {
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
                        Payment Method
                    </Text>
                </View>
                {/* secondary heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        This data will be displayed in your account profile for security
                    </Text>
                </View>
                {/* payment method btns */}
                <View style={{ marginHorizontal: 20, marginTop: 20, gap:18 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#4d4d4d', alignItems: 'center', paddingVertical: 22, borderRadius: 15, }}
                    >
                        <Image
                            source={require('./paymentIcons/paypal.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#4d4d4d', alignItems: 'center', paddingVertical: 23, borderRadius: 15, }}
                    >
                        <Image
                            source={require('./paymentIcons/visa.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#4d4d4d', alignItems: 'center', paddingVertical: 16, borderRadius: 15, }}
                    >
                        <Image
                            source={require('./paymentIcons/Payoneer.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* Next btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 222, borderRadius: 20, }}
                    onPress={() => navigation.navigate("SignupSuccess")}
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

export default PaymentMethod

const styles = StyleSheet.create({})