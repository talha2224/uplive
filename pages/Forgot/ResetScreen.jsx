import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ResetScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/blur.png')} style={{ position: "absolute", top: 0, left: 0, }} resizeMode="cover" />
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Reset password</Text>
            <Text style={styles.orText}>Enter the email associated with your account</Text>

            <View style={styles.inputContainer}>
                <Icon name="email" size={20} color="#497AF7" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Email address" placeholderTextColor="#A39BCD" keyboardType="email-address" />
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate("otp")} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Send code</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 16 }}> Use phone number</Text>
            </TouchableOpacity>


        </View>
    );
}

export default ResetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1B114F',
        borderRadius: 10,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: "#493F81"
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    signInButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    orText: {
        color: '#A39BCD',
        fontSize: 16,
        marginBottom: 20,
        marginTop: 6
    },

});

