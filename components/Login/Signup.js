import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#0D0D0D"
                barStyle="light-content"
            />
            <View style={{ backgroundColor: '#0D0D0D', flex: 1 }}>
                {/* header */}
                <View style={{}}>
                    <Image
                        style={{ width: '100%', resizeMode: 'cover', }}
                        source={require('./pattern/Pattern.png')}
                    />
                    <View style={{ alignItems: 'center', position: 'absolute', left: 112, right: 112, marginTop: 50 }}>
                        <Image
                            source={require('./logo/FoodNinja_Logo.png')}
                        />
                        <Text style={{ color: '#53E88B', fontSize: 40, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
                            FoodNinja
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
                            Deliever Favorite Food
                        </Text>
                    </View>
                </View>
                {/* login heading */}
                <View>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 60, textAlign: 'center' }}>
                        Sign Up For Free
                    </Text>
                </View>
                {/* input fields */}
                <View style={{ marginHorizontal: 25 }}>
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingLeft: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Name'
                        placeholderTextColor='#fff'
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingLeft: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Email'
                        placeholderTextColor='#fff'
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingLeft: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Password'
                        placeholderTextColor='#fff'
                    />
                </View>
                {/* checks */}
                <View style={{ marginHorizontal: 25, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 14 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#4d4d4d', height: 22, width: 22, borderRadius: 12, }}
                        >
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', }}>
                            Keep Me Signed In
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#4d4d4d', height: 22, width: 22, borderRadius: 12, }}
                        >
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', }}>
                            Email Me About Special Pricing
                        </Text>
                    </View>
                </View>
                {/* Create Account btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 50, borderRadius: 20, }}
                    onPress={() => navigation.navigate("")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 35, }}>
                        Create Account
                    </Text>
                </TouchableOpacity>
                {/* Already have an account? */}
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ color: '#53E88B', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 20, textDecorationLine: 'underline' }}>
                        Already have an account?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})