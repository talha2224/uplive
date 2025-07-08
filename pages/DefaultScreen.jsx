import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'


const DefaultScreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('onboarding');
        }, 3000);
    }, []);

    return (
        <View>
            <Image source={require('../assets/default_screen.png')} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
        </View>
    )
}

export default DefaultScreen