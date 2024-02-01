import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  
  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
    }, 2500)
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 36, fontFamily: 'Viga.ttf', }}>FApp4</Text>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>FApp4</Text>
      <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: "AirbnbCereal_XBold" }}>FApp4</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})