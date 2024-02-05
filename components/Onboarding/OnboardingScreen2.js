import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen2 = () => {
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
            source={require('./OnboardingImages/OnboardingImage2.png')}
            style={{ resizeMode: 'contain', width: '100%' }}
          />
        </View>
        <Text
          style={{ color: '#fff', fontSize: 26, textAlign: 'center', fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, marginHorizontal: 50, marginTop: 38 }}>
          Food Ninja is Where Your Comfort Food Lives
        </Text>
        <Text
          style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: 'normal', fontStyle: 'normal', lineHeight: 20, marginHorizontal: 66, marginTop: 20 }}>
          Enjoy a fast and smooth food delivery at your doorstep
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 44, borderRadius: 20, }}
          onPress={() => navigation.navigate("Login")}
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

export default OnboardingScreen2

const styles = StyleSheet.create({})