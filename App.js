import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen1 from './components/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from './components/Onboarding/OnboardingScreen2';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import SignupProcess from './components/Login/SignupProcess';
import PaymentMethod from './components/Login/PaymentMethod';
import ForgotPassword from './components/Login/ForgotPassword';
import NewPassword from './components/Login/NewPassword';
import PasswordResetSuccess from './components/Login/PasswordResetSuccess';
import SignupSuccess from './components/Login/SignupSuccess';




const App = () => {

  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
    }, 2500)
  }, [])

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="SignupProcess" component={SignupProcess} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="SignupSuccess" component={SignupSuccess} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})