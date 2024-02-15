import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
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
                        Login In
                    </Text>
                </View>
                {/* input fields */}
                <View style={{ marginHorizontal: 25 }}>
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Email'
                        placeholderTextColor='#fff'
                    />
                    <TextInput
                        style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 16, color: '#fff' }}
                        placeholder='Password'
                        placeholderTextColor='#fff'
                        secureTextEntry
                    />
                </View>
                {/* Or Continue With */}
                <View>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 20 }}>
                        Or Continue With
                    </Text>
                </View>
                {/* google & facebook btns */}
                <View style={{ flexDirection: 'row', gap: 20, marginHorizontal: 25, justifyContent: 'space-evenly', }}>
                    <TouchableOpacity style={{ backgroundColor: '#4d4d4d', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
                            <Image
                                source={require('./google&facebook/facebook.png')}
                            />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', marginLeft: 12 }}>
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#4d4d4d', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
                            <Image
                                source={require('./google&facebook/google.png')}
                            />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', marginLeft: 12 }}>
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Forgot Your Password? */}
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={{ color: '#53E88B', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 20, textDecorationLine: 'underline' }}>
                        Forgot Your Password?
                    </Text>
                </TouchableOpacity>
                {/* Login btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 20, borderRadius: 20, }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 70, }}>
                        Login
                    </Text>
                </TouchableOpacity>
                {/* Don't have an Account? */}
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("Signup")}
                    >
                    <Text style={{ color: '#53E88B', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 20, textDecorationLine: 'underline' }}>
                        Don't have an account?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})