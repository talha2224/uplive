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
import ChatScreen from './pages/Home/Chat/ChatScreen';
import MessageScreen from './pages/Home/Chat/MessageScreen';
import ProfileScreen from './pages/Home/Profile';
import EditProfileScreen from './pages/Home/Profile/EditProfileScreen';
import ConnectionScreen from './pages/Home/Profile/ConnectionScreen';
import BalanceScreen from './pages/Home/Profile/BalanceScreen';
import ExchangeScreen from './pages/Home/Profile/ExchangeScreen';
import WithdrawScreen from './pages/Home/Profile/WithdrawScreen';
import WithdrawMethodScreen from './pages/Home/Profile/WithdrawMethodScreen';
import TransactionHistoryScreen from './pages/Home/Profile/TransactionHistoryScreen';
import LevelScreen from './pages/Home/Profile/LevelScreen';


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
        <Stack.Screen name="chat" component={ChatScreen} />
        <Stack.Screen name="message" component={MessageScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="edit_profile" component={EditProfileScreen} />
        <Stack.Screen name="connections" component={ConnectionScreen} />
        <Stack.Screen name="balance" component={BalanceScreen} />
        <Stack.Screen name="exchange" component={ExchangeScreen} />
        <Stack.Screen name="withdraw" component={WithdrawScreen} />
        <Stack.Screen name="withdraw_methods" component={WithdrawMethodScreen} />
        <Stack.Screen name="transaction_history" component={TransactionHistoryScreen} />
        <Stack.Screen name="level" component={LevelScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}