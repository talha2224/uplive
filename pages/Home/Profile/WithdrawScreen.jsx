import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WithdrawScreen = () => {
    const navigation = useNavigation();
    const [withdrawAmount, setWithdrawAmount] = useState('');

    const handleNumberPress = (num) => {
        setWithdrawAmount(prev => prev + num);
    };

    const handleDelete = () => {
        setWithdrawAmount(prev => prev.slice(0, -1));
    };

    const handleWithdraw = () => {
        // Handle withdrawal logic
        console.log('Withdrawing:', withdrawAmount);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Withdraw</Text>
                    <View style={styles.headerRightPlaceholder} />
                </View>

                {/* Amount Display */}
                <View style={styles.amountDisplayContainer}>
                    <Text style={styles.currencySymbol}>💎</Text>
                    <Text style={styles.amountDisplayText}>{withdrawAmount || '0.00'}</Text>
                </View>

                {/* Payment Method */}
                <TouchableOpacity style={styles.paymentMethodButton} onPress={() => navigation.navigate('withdraw_methods')}>
                    <Ionicons name="card-outline" size={24} color="#333" />
                    <Text style={styles.paymentMethodText}>Credit card</Text>
                    <Ionicons name="chevron-forward" size={20} color="#888" style={styles.paymentMethodArrow} />
                </TouchableOpacity>

                {/* Withdraw Button */}
                <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
                    <Text style={styles.withdrawButtonText}>Withdraw</Text>
                </TouchableOpacity>

                {/* Number Pad */}
                <View style={styles.numberPad}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <TouchableOpacity key={num} style={styles.numberPadButton} onPress={() => handleNumberPress(num.toString())}>
                            <Text style={styles.numberPadText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.numberPadButton} onPress={() => handleNumberPress('.')}>
                        <Text style={styles.numberPadText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numberPadButton} onPress={() => handleNumberPress('0')}>
                        <Text style={styles.numberPadText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numberPadButton} onPress={handleDelete}>
                        <Ionicons name="backspace-outline" size={24} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 15,
        justifyContent: 'space-between', // Distribute content
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Platform.OS === 'android' ? 50 : 40,
        marginHorizontal: -15, // Counteract container padding
        paddingHorizontal: 15,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    headerRightPlaceholder: {
        width: 24 + 10,
    },
    amountDisplayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginTop: 20,
    },
    currencySymbol: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 5,
    },
    amountDisplayText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333333',
    },
    paymentMethodButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    paymentMethodText: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
        marginLeft: 10,
    },
    paymentMethodArrow: {
        marginLeft: 'auto',
    },
    withdrawButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20, // Space before number pad
    },
    withdrawButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    numberPad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10, // Space from bottom of screen
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    numberPadButton: {
        width: '30%', // Approx 1/3 for 3 columns
        aspectRatio: 1.5, // Make buttons slightly taller than wide
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    numberPadText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
    },
});

export default WithdrawScreen;
