import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Platform, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profile_img from '../../../assets/home/profile/avatar.png';
import badge_img from '../../../assets/home/profile/badge.png';

const LevelScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('transmission'); // 'transmission' or 'wealth'

    // Dummy data for Transmission Level milestones
    const transmissionMilestones = [
        { id: 't1', title: 'Honor level upgrade', level: 'Level 1', status: 'circle-outline', statusColor: '#497AF7' },
        { id: 't2', title: 'Notification upgrade', level: 'Level 10', status: 'circle-outline', statusColor: '#497AF7' },
        { id: 't3', title: 'Message upgrade', level: 'Level 20', status: 'You\'re currently in this level', statusColor: '#4CAF50' },
        { id: 't4', title: 'Entry effects', level: 'Level 30', status: 'circle-outline', statusColor: '#497AF7' },
        { id: 't5', title: 'Entry effect upgrade', level: 'Level 40', status: 'circle-outline', statusColor: '#FFA500' },
        { id: 't6', title: 'Exclusive service for VIP', level: 'Level 51', status: 'circle-outline', statusColor: '#FFA500' },
    ];

    // Dummy data for Wealth Level milestones
    const wealthMilestones = [
        { id: 'w1', title: 'Priority chat', level: 'Level 1', status: 'circle-outline', statusColor: '#FFA500' },
        { id: 'w2', title: 'VIP frame', level: 'Level 10', status: 'circle-outline', statusColor: '#FFA500' },
        { id: 'w3', title: 'Exclusive emoji', level: 'Level 20', status: 'You\'re currently in this level', statusColor: '#4CAF50' },
        { id: 'w4', title: 'Profile highlight', level: 'Level 30', status: 'circle-outline', statusColor: '#FFA500' },
        { id: 'w5', title: 'Entry effect upgrade', level: 'Level 40', status: 'circle-outline', statusColor: '#FFA500' },
        { id: 'w6', title: 'Exclusive service for VIP', level: 'Level 51', status: 'circle-outline', statusColor: '#FFA500' },
    ];

    const renderMilestoneItem = ({ item }) => (
        <View style={styles.milestoneCard}>
            <View style={styles.milestoneInfo}>
                <Text style={styles.milestoneTitle}>{item.title}</Text>
                <Text style={styles.milestoneLevel}>{item.level}</Text>
            </View>
            {item.status === 'You\'re currently in this level' ? (
                <View style={[styles.statusBadge, { backgroundColor: '#E6F7E9' }]}>
                    <Text style={[styles.statusText, { color: '#28A745' }]}>{item.status}</Text>
                </View>
            ) : (
                <Image source={badge_img}/>
            )}
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
                    <Text style={styles.headerTitle}>Level</Text>
                    <TouchableOpacity style={styles.headerIconRight}>
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIconRight}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Tab Navigation */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'transmission' && styles.activeTabButton]}
                        onPress={() => setActiveTab('transmission')}
                    >
                        <Text style={[styles.tabText, activeTab === 'transmission' && styles.activeTabText]}>Transmission level</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'wealth' && styles.activeTabButton]}
                        onPress={() => setActiveTab('wealth')}
                    >
                        <Text style={[styles.tabText, activeTab === 'wealth' && styles.activeTabText]}>Wealth level</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {/* Level Card */}
                    <View style={styles.levelCard}>
                        <View style={styles.levelInfoRow}>
                            <Text style={styles.levelNumber}>Level {activeTab === 'transmission' ? '20' : '10'}</Text>
                            <Text style={styles.levelSubtitle}>
                                {activeTab === 'transmission' ? '(You\'ve streamed 20hrs this week)' : '(Gift 5,500 more to reach next level)'}
                            </Text>
                            <Image source={profile_img} style={styles.levelAvatar} />
                        </View>
                        <View style={styles.progressBarBackground}>
                            <View style={[styles.progressBarFill, { width: activeTab === 'transmission' ? '65%' : '45%' }]} />
                        </View>
                        <Text style={styles.experienceText}>
                            {activeTab === 'transmission' ? '650/1000 Experience level' : '4,500/10,000 coins gifted'}
                        </Text>
                    </View>

                    {/* Milestones and Rewards Section */}
                    <Text style={styles.milestonesTitle}>Milestones and rewards</Text>
                    <FlatList
                        data={activeTab === 'transmission' ? transmissionMilestones : wealthMilestones}
                        renderItem={renderMilestoneItem}
                        keyExtractor={item => item.id}
                        scrollEnabled={false} // Disable FlatList scrolling as it's inside a ScrollView
                        contentContainerStyle={styles.milestoneList}
                    />
                </ScrollView>
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
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Platform.OS === 'android' ? 50 : 40,
    },
    backButton: {
        padding: 5,
        marginRight: 10,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    headerIconRight: {
        padding: 5,
        marginLeft: 10,
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
    scrollViewContent: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    levelCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        alignItems: 'flex-start', // Align content to the left
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    levelInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    levelNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 5,
    },
    levelSubtitle: {
        fontSize: 12,
        color: '#888888',
        flex: 1, // Take up remaining space
    },
    levelAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: '#E0E0E0',
    },
    progressBarBackground: {
        width: '100%',
        height: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        overflow: 'hidden', // Ensure fill stays within bounds
        marginBottom: 10,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#497AF7', // Purple fill
        borderRadius: 4,
    },
    experienceText: {
        fontSize: 12,
        color: '#888888',
    },
    milestonesTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    milestoneList: {
        // No specific styling needed here, individual cards have styling
    },
    milestoneCard: {
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
    milestoneInfo: {
        flex: 1,
    },
    milestoneTitle: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 2,
    },
    milestoneLevel: {
        fontSize: 12,
        color: '#888888',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default LevelScreen;
