import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from './pages/DefaultScreen';
import OnboardingScreen from './pages/OnboardingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import ResetScreen from './pages/Forgot/ResetScreen';
import OtpScreen from './pages/Forgot/OtpScreen';
import PasswordScreen from './pages/Forgot/PasswordScreen';
import NameScreen from './pages/Setup/NameScreen';
import PhoneScreen from './pages/Setup/PhoneScreen';
import OtpScreen2 from './pages/Setup/OtpScreen';
import FaceScreen from './pages/Setup/FaceScreen';
import RecommendScreen from './pages/Setup/RecommendScreen';
import GenderScreen from './pages/Setup/GenderScreen';
import RoleScreen from './pages/Setup/RoleScreen';
import HomeScreen from './pages/Home/HomeScreen';
import ExploreScreen from './pages/Home/ExploreScreen';
import CreatePostScreen from './pages/Home/CreatePostScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>

        <Stack.Screen name="default" component={DefaultScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="reset" component={ResetScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="password" component={PasswordScreen} />
        <Stack.Screen name="name" component={NameScreen} />
        <Stack.Screen name="phone" component={PhoneScreen} />
        <Stack.Screen name="otp2" component={OtpScreen2} />
        <Stack.Screen name="face" component={FaceScreen} />
        <Stack.Screen name="recommend" component={RecommendScreen} />
        <Stack.Screen name="gender" component={GenderScreen} />
        <Stack.Screen name="role" component={RoleScreen} />

        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="explore" component={ExploreScreen} />
        <Stack.Screen name="createpost" component={CreatePostScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}