import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const OnboardingScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#1B114F", alignItems: "center", paddingHorizontal: 20, paddingVertical: 60 }}>

            <Image source={require("../assets/logo.png")} />
            <Image source={require("../assets/cards.png")} style={{ marginTop: 15 }} />

            <Text style={{ fontSize: 26, color: "#fff", fontWeight: "500", marginTop: 15 }}>Live moments,</Text>
            <Text style={{ fontSize: 26, color: "#fff", fontWeight: "500", marginTop: 2 }}>real connections</Text>
            <Text style={{ color: "#A39BCD", marginTop: 10, textAlign: "center" }}>Broadcast your life, interact with fans, and create unforgettable experiences.</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('signup')} style={{ backgroundColor: "#497AF7", width: "100%", height: 50, borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#fff" }}>Get Started</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 30,gap:5 }}>
                <Text style={{ color: "#A39BCD",fontSize:16 }}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                    <Text style={{ color: "#fff",fontSize:16 }}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default OnboardingScreen