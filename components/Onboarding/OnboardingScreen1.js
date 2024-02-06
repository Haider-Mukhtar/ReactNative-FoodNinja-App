import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#0D0D0D"
                barStyle="light-content"
            />
            <View style={[{ flex: 1, backgroundColor: '#0D0D0D', paddingTop: 62, paddingBottom: 110 }]}>
                <View style={{ height: 440 }}>
                    <Image
                        source={require('./OnboardingImages/OnboardingImage1.png')}
                        style={{ resizeMode: 'contain', width: '100%' }}
                    />
                </View>
                <Text
                    style={{ color: '#fff', fontSize: 26, textAlign: 'center', fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, marginHorizontal: 50, marginTop: 38 }}>
                    Find your  Comfort Food here
                </Text>
                <Text
                    style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: 'normal', fontStyle: 'normal', lineHeight: 20, marginHorizontal: 66, marginTop: 20 }}>
                    Here You Can find a chef or dish for every taste and color. Enjoy!
                </Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 44, borderRadius: 20, }}
                    onPress={() => navigation.navigate("OnboardingScreen2")}
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

export default OnboardingScreen1

const styles = StyleSheet.create({})