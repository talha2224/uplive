import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import BottomNavBar from '../../../components/BottomNavbar';
import logo from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/core';

const ChatScreen = () => {
    const nav = useNavigation()
    const [activeTab, setActiveTab] = useState('official');

    const officialMessages = [
        {
            id: 'om1',
            title: 'UpLive official',
            snippet: 'Welcome to the spotlight! We\'re excited...',
            time: '1h',
            logo: logo,
        },
        {
            id: 'om2',
            title: 'UpLive official',
            snippet: 'Did you know you can earn from gifts du...',
            time: '1h',
            logo: logo,
        },
        {
            id: 'om3',
            title: 'UpLive official',
            snippet: 'We\'ve rolled out some fresh updates! C...',
            time: '1h',
            logo: logo,
        },
        {
            id: 'om4',
            title: 'UpLive official',
            snippet: 'We\'ve rolled out some fresh updates! C...',
            time: '1h',
            logo: logo,
        },
    ];

    const contacts = [
        {
            id: 'c1',
            name: 'Wade Warren',
            snippet: 'Welcome to the spotlight! We\'re excited...',
            time: '1h',
            avatar: { uri: 'https://placehold.co/50x50/E0E0E0/FFFFFF?text=WW' },
        },
        {
            id: 'c2',
            name: 'Jacob Jones',
            snippet: 'Did you know you can earn from gifts du...',
            time: '1h',
            avatar: { uri: 'https://placehold.co/50x50/6A5ACD/FFFFFF?text=JJ' },
        },
        {
            id: 'c3',
            name: 'Arlene McCoy',
            snippet: 'We\'ve rolled out some fresh updates! C...',
            time: '1h',
            avatar: { uri: 'https://placehold.co/50x50/E0E0E0/FFFFFF?text=AM' },
        },
        {
            id: 'c4',
            name: 'LunaLive',
            snippet: 'We\'ve rolled out some fresh updates! C...',
            time: '1h',
            avatar: { uri: 'https://placehold.co/50x50/6A5ACD/FFFFFF?text=LL' },
        },
    ];

    const renderOfficialMessageItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{nav.navigate("message")}} style={styles.messageCard}>
            <Image source={item.logo} style={styles.messageCardLogo} resizeMode="contain" />
            <View style={styles.messageCardContent}>
                <Text style={styles.messageCardTitle}>{item.title}</Text>
                <Text style={styles.messageCardSnippet}>{item.snippet}</Text>
            </View>
            <Text style={styles.messageCardTime}>{item.time}</Text>
        </TouchableOpacity>
    );

    const renderContactItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{nav.navigate("message")}} style={styles.messageCard}>
            <Image source={item.avatar} style={styles.contactAvatar} />
            <View style={styles.messageCardContent}>
                <Text style={styles.messageCardTitle}>{item.name}</Text>
                <Text style={styles.messageCardSnippet}>{item.snippet}</Text>
            </View>
            <Text style={styles.messageCardTime}>{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Messages</Text>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity style={[styles.tabButton, activeTab === 'official' && styles.activeTabButton]} onPress={() => setActiveTab('official')}>
                        <Text style={[styles.tabText, activeTab === 'official' && styles.activeTabText]}>Official messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabButton, activeTab === 'contacts' && styles.activeTabButton]} onPress={() => setActiveTab('contacts')}>
                        <Text style={[styles.tabText, activeTab === 'contacts' && styles.activeTabText]}>Contacts</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentArea}>
                    {activeTab === 'official' ? (
                        <FlatList data={officialMessages} renderItem={renderOfficialMessageItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContent}/>
                    ) : (
                        <FlatList data={contacts} renderItem={renderContactItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContent}/>
                    )}
                </View>

                <BottomNavBar />
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
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
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
        backgroundColor: '#F7F7F7',
    },
    listContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    messageCard: {
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
    messageCardLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    contactAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageCardContent: {
        flex: 1,
    },
    messageCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 2,
    },
    messageCardSnippet: {
        fontSize: 13,
        color: '#888888',
    },
    messageCardTime: {
        fontSize: 12,
        color: '#AAAAAA',
        marginLeft: 10,
    },
});

export default ChatScreen;
