import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SignupScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image source={require('../assets/blur.png')} style={{ position: "absolute", top: 0, left: 0, }} resizeMode="cover" />
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Step Into the Spotlight</Text>

            <View style={styles.inputContainer}>
                <Icon name="email" size={20} color="#497AF7" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Email address" placeholderTextColor="#A39BCD" keyboardType="email-address" />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#497AF7" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A39BCD" secureTextEntry />
                <TouchableOpacity style={styles.eyeIcon}>
                    <Icon name="eye" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('name')} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or</Text>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/phone.png')} />
                <Text style={styles.socialButtonText}>Sign in with phone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/google.png')} />
                <Text style={styles.socialButtonText}>Sign up with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/apple.png')} />
                <Text style={styles.socialButtonText}>Sign up with Apple</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.signUpLink}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignupScreen

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
        marginBottom: 40,
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
    eyeIcon: {
        padding: 5,
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
        marginVertical: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        marginBottom: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#493F81",
        gap: 10
    },
    socialIcon: {
        marginRight: 10,
        color: "#497AF7"
    },
    socialButtonText: {
        color: '#A39BCD',
        fontSize: 16,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    signUpText: {
        color: '#C0C0C0',
        fontSize: 14,
    },
    signUpLink: {
        color: '#6A5ACD',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

