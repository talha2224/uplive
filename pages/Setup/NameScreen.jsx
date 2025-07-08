import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Stepper from '../../components/Stepper';


const NameScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Stepper totalSteps={7} currentStep={1}/>

            <Text style={styles.welcomeText}>Let’s get personal</Text>
            <Text style={styles.orText}>Tell us your name so your fans know who’s behind the camera.</Text>

            <View style={styles.inputContainer}>
                <Feather name="user" size={20} color="#497AF7" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#A39BCD" secureTextEntry />
            </View>
            
            <View style={styles.inputContainer}>
                <Feather name="user" size={20} color="#497AF7" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#A39BCD" secureTextEntry />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("phone")} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Proceed</Text>
            </TouchableOpacity>


        </View>
    );
}

export default NameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop:30
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
        marginTop: 6,
        textAlign:"center"
    },

});

