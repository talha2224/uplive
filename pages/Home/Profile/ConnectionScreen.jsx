import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import user_img from '../../../assets/home/profile/avatar.png';

const ConnectionScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('followers');
    const [searchText, setSearchText] = useState('');

    const users = [
        { id: 'u1', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u2', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u3', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u4', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u5', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u6', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u7', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u8', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
        { id: 'u9', name: 'Savannah Nguyen', userId: 'ID: 01251421', img: user_img },
    ];

    const renderUserItem = ({ item }) => (
        <View style={styles.userCard}>
            <Image source={item.img} style={styles.userAvatar} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userId}>{item.userId}</Text>
            </View>
            <TouchableOpacity style={styles.followingButton}>
                <Text style={styles.followingButtonText}>Following</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar hidden />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Followers</Text>
                    <View style={styles.headerRightPlaceholder} />
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'followers' && styles.activeTabButton]}
                        onPress={() => setActiveTab('followers')}
                    >
                        <Text style={[styles.tabText, activeTab === 'followers' && styles.activeTabText]}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'following' && styles.activeTabButton]}
                        onPress={() => setActiveTab('following')}
                    >
                        <Text style={[styles.tabText, activeTab === 'following' && styles.activeTabText]}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'friends' && styles.activeTabButton]}
                        onPress={() => setActiveTab('friends')}
                    >
                        <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>Friends</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBarContainer}>
                    <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search users"
                        placeholderTextColor="#888"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>

                <FlatList
                    data={users}
                    renderItem={renderUserItem}
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
        backgroundColor: '#F7F7F7',
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
        gap: 10,
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
        width: 34,
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
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
    },
    listContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    userCard: {
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
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#E0E0E0',
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 2,
    },
    userId: {
        fontSize: 13,
        color: '#888888',
    },
    followingButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    followingButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ConnectionScreen;
