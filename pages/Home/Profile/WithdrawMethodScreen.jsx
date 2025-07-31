import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WithdrawMethodScreen = () => {
    const navigation = useNavigation();

    // Dummy data for withdraw methods
    const withdrawMethods = [
        { id: 'wm1', name: 'Alex Maxwell', type: 'Credit card', last4: '7890', icon: 'card-outline' },
        { id: 'wm2', name: 'Alex Maxwell', type: 'Visa', last4: '7890', icon: 'card-outline' },
    ];

    const renderWithdrawMethodItem = ({ item }) => (
        <TouchableOpacity style={styles.methodCard}>
            <Ionicons name={item.icon} size={24} color="#333" style={styles.methodIcon} />
            <View style={styles.methodInfo}>
                <Text style={styles.methodName}>{item.name}</Text>
                <Text style={styles.methodDetails}>{item.type} **** {item.last4}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Withdrawal method</Text>
                    <View style={styles.headerRightPlaceholder} />
                </View>

                {/* Withdraw Methods List */}
                <FlatList
                    data={withdrawMethods}
                    renderItem={renderWithdrawMethodItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />

                {/* Add New Method Button */}
                <TouchableOpacity style={styles.addMethodButton}>
                    <Text style={styles.addMethodButtonText}>Add new method</Text>
                </TouchableOpacity>
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
    listContent: {
        paddingVertical: 10,
    },
    methodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    methodIcon: {
        marginRight: 10,
    },
    methodInfo: {
        flex: 1,
    },
    methodName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 2,
    },
    methodDetails: {
        fontSize: 13,
        color: '#888888',
    },
    addMethodButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginTop: 'auto', // Push to bottom
        marginBottom: 10, // Space from bottom of screen
    },
    addMethodButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WithdrawMethodScreen;
