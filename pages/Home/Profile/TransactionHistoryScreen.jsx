import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

const TransactionHistoryScreen = () => {
    const navigation = useNavigation();

    // Dummy data for transaction history
    const transactions = [
        { id: 't1', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'Completed', icon: 'cash-outline' },
        { id: 't2', type: 'exchanged', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'Completed', icon: 'swap-horizontal-outline' },
        { id: 't3', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'Completed', icon: 'cash-outline' },
        { id: 't4', type: 'exchanged', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'Completed', icon: 'swap-horizontal-outline' },
    ];

    const renderTransactionItem = ({ item }) => (
        <View style={styles.transactionCard}>
            <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={24} color="#6A5ACD" />
            </View>
            <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>You {item.type} {item.amount}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={styles.transactionStatus}>{item.status}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>History</Text>
                    <View style={styles.headerRightPlaceholder} />
                </View>

                {/* Transaction List */}
                <FlatList
                    data={transactions}
                    renderItem={renderTransactionItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F7F7', // Overall background color
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
        paddingTop: Platform.OS === 'android' ? 50 : 40, // Adjust for status bar
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
        width: 24 + 10, // To balance the back button space
    },
    listContent: {
        paddingVertical: 10,
    },
    transactionCard: {
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
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EFEFEF', // Light grey background for icon
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionText: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 2,
    },
    transactionDate: {
        fontSize: 12,
        color: '#888888',
    },
    transactionStatus: {
        fontSize: 12,
        color: '#28A745', // Green for completed
        fontWeight: 'bold',
        backgroundColor: '#E6F7E9', // Light green background for status
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
});

export default TransactionHistoryScreen;
