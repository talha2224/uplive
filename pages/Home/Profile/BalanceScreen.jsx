import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BalanceScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('coins'); // 'coins' or 'diamonds'

    // Dummy data for coins
    const coinOptions = [
        { id: 'c1', coins: 69, usd: 0.69 },
        { id: 'c2', coins: 139, usd: 1.39 },
        { id: 'c3', coins: 349, usd: 3.49 },
        { id: 'c4', coins: 69, usd: 0.69 },
        { id: 'c5', coins: 139, usd: 1.39 },
        { id: 'c6', coins: 349, usd: 3.49 },
        { id: 'c7', coins: 69, usd: 0.69 },
        { id: 'c8', coins: 139, usd: 1.39 },
        { id: 'c9', coins: 349, usd: 3.49 },
    ];

    // Dummy data for diamond history
    const diamondHistory = [
        { id: 'd1', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'completed' },
        { id: 'd2', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'completed' },
        { id: 'd3', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'completed' },
        { id: 'd4', type: 'withdraw', amount: '10,00coins', date: '12-05-25, 10:00 AM', status: 'completed' },
    ];

    const renderCoinItem = ({ item }) => (
        <TouchableOpacity style={styles.coinOptionCard}>
            <Text style={styles.coinOptionCoins}>{item.coins}</Text>
            <Text style={styles.coinOptionUSD}>USD {item.usd.toFixed(2)}</Text>
        </TouchableOpacity>
    );

    const renderDiamondHistoryItem = ({ item }) => (
        <View style={styles.historyItem}>
            <View>
                <Text style={styles.historyText}>You {item.type} {item.amount}</Text>
                <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <Text style={styles.historyStatus}>{item.status}</Text>
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
                    <Text style={styles.headerTitle}>Balance</Text>
                    <View style={styles.headerRightPlaceholder} />
                </View>

                {/* Tab Navigation */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'coins' && styles.activeTabButton]}
                        onPress={() => setActiveTab('coins')}
                    >
                        <Text style={[styles.tabText, activeTab === 'coins' && styles.activeTabText]}>Coins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'diamonds' && styles.activeTabButton]}
                        onPress={() => setActiveTab('diamonds')}
                    >
                        <Text style={[styles.tabText, activeTab === 'diamonds' && styles.activeTabText]}>Diamonds</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'coins' && (
                    <View style={styles.contentArea}>
                        <View style={styles.balanceCard}>
                            <Text style={styles.balanceCardTitle}>Available coins</Text>
                            <Text style={styles.balanceCardAmount}>🪙 12,000</Text>
                        </View>

                        <Text style={styles.sectionTitle}>Recharge coins</Text>
                        <FlatList
                            data={coinOptions}
                            renderItem={renderCoinItem}
                            keyExtractor={item => item.id}
                            numColumns={3}
                            columnWrapperStyle={styles.rowWrapper}
                            contentContainerStyle={styles.coinListContent}
                        />

                        <View style={styles.rechargeFooter}>
                            <Text style={styles.currentUSD}>USD 100.50</Text>
                            <TouchableOpacity style={styles.rechargeButton}>
                                <Text style={styles.rechargeButtonText}>Recharge</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {activeTab === 'diamonds' && (
                    <View style={styles.contentArea}>
                        <View style={styles.balanceCardDiamonds}>
                            <Text style={styles.balanceCardTitle}>Available diamonds</Text>
                            <Text style={styles.balanceCardAmount}>💎 120,000</Text>
                        </View>

                        <View style={styles.diamondActions}>
                            <TouchableOpacity style={styles.diamondActionButton} onPress={() => navigation.navigate('exchange')}>
                                <Ionicons name="swap-horizontal-outline" size={24} color="#497AF7" />
                                <Text style={styles.diamondActionButtonText}>Exchange</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.diamondActionButton} onPress={() => navigation.navigate('withdraw')}>
                                <Ionicons name="wallet-outline" size={24} color="#497AF7" />
                                <Text style={styles.diamondActionButtonText}>Withdraw</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.historyHeader}>
                            <Text style={styles.sectionTitle}>History</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate("transaction_history")}}>
                                <Text style={styles.seeAllText}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={diamondHistory}
                            renderItem={renderDiamondHistoryItem}
                            keyExtractor={item => item.id}
                            contentContainerStyle={styles.historyListContent}
                        />
                    </View>
                )}
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Platform.OS === 'android' ? 50 : 40,
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
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTabButton: {
        backgroundColor: '#EFEFEF',
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#888888',
    },
    activeTabText: {
        color: '#333333',
    },
    contentArea: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    balanceCard: {
        backgroundColor: '#497AF7', // Purple gradient-like color
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    balanceCardDiamonds: {
        backgroundColor: '#497AF7', // Purple gradient-like color
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    balanceCardTitle: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    balanceCardAmount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    coinListContent: {
        justifyContent: 'space-between',
    },
    rowWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    coinOptionCard: {
        width: '32%', // Approx 1/3 minus spacing
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    coinOptionCoins: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    coinOptionUSD: {
        fontSize: 12,
        color: '#888888',
        marginTop: 5,
    },
    rechargeFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginTop: 'auto', // Push to bottom
        marginBottom: 10, // Space from bottom of screen
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    currentUSD: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    rechargeButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    rechargeButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    diamondActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    diamondActionButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    diamondActionButtonText: {
        fontSize: 14,
        color: '#333333',
        marginTop: 5,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    seeAllText: {
        fontSize: 14,
        color: '#497AF7',
    },
    historyListContent: {
        paddingBottom: 10,
    },
    historyItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    historyText: {
        fontSize: 14,
        color: '#333333',
    },
    historyDate: {
        fontSize: 12,
        color: '#888888',
        marginTop: 2,
    },
    historyStatus: {
        fontSize: 14,
        color: '#28A745', // Green for completed
        fontWeight: 'bold',
    },
});

export default BalanceScreen;
