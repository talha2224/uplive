import { useNavigation } from '@react-navigation/native'; // Corrected import path for useNavigation
import React, { useRef } from 'react'; // Added useRef for OTP inputs
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OtpScreen = () => {
    const navigation = useNavigation();

    // Refs for OTP input fields to allow focus management
    const otpInput1 = useRef(null);
    const otpInput2 = useRef(null);
    const otpInput3 = useRef(null);
    const otpInput4 = useRef(null);
    const otpInput5 = useRef(null);
    const otpInput6 = useRef(null);

    // Function to handle OTP input changes and move focus automatically
    const handleOtpChange = (text, nextInput, prevInput) => {
        if (text.length === 1 && nextInput) {
            nextInput.current.focus();
        } else if (text.length === 0 && prevInput) {
            prevInput.current.focus();
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/blur.png')} style={styles.blurImage} resizeMode="cover"/>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.welcomeText}>OTP Verification</Text>
            <Text style={styles.instructionText}>Enter the code sent to phone number</Text>

            <View style={styles.otpInputRow}>
                <TextInput
                    ref={otpInput1}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, otpInput2, null)}
                />
                <TextInput
                    ref={otpInput2}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, otpInput3, otpInput1)}
                />
                <TextInput
                    ref={otpInput3}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, otpInput4, otpInput2)}
                />
                <TextInput
                    ref={otpInput4}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, otpInput5, otpInput3)}
                />
                <TextInput
                    ref={otpInput5}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, otpInput6, otpInput4)}
                />
                <TextInput
                    ref={otpInput6}
                    style={styles.otpInputEmpty}
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={(text) => handleOtpChange(text, null, otpInput5)}
                />
            </View>

            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn’t receive any code? </Text>
                <TouchableOpacity>
                    <Text style={styles.resendLink}>Resend</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate("password")}} style={styles.verifyButton}>
                <Text style={styles.verifyButtonText}>Verify code</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    blurImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        marginBottom: 10,
    },
    instructionText: {
        color: '#A39BCD',
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
    },
    otpInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    otpInput: {
        width: 50,
        height: 50,
        backgroundColor: '#2A205E',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#493F81',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    otpInputEmpty: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#493F81',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    resendContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 40,
    },
    resendText: {
        color: '#A39BCD',
        fontSize: 14,
    },
    resendLink: {
        color: '#ffff',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    verifyButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default OtpScreen;