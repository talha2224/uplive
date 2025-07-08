import React, { useState } from 'react';
import {RefreshControl,View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavBar from '../../components/BottomNavbar';
import diceImg from '../../assets/home/dice.png';
import hammerImg from '../../assets/home/hammer.png';
import fishingImg from '../../assets/home/fishing.png';
import cheseImg from '../../assets/home/chese.png';

const popularImages = [
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
    require('../../assets/home/trend.png'),
];

const battleImages = [
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
    require('../../assets/home/battle.png'),
];
const trendingImages = [
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
    require('../../assets/home/trending.png'),
];

const { width } = Dimensions.get('window');
const itemWidth = (width - 16 * 2 - 10) / 2;

const HomeScreen = () => {
    const [activeTopTab, setActiveTopTab] = useState('Trend');
    const [activeCategoryTab, setActiveCategoryTab] = useState('Popular');
    const [selectedGame, setSelectedGame] = useState('');

    const renderUserGrid = (data) => (
        <View style={styles.userGridContainer}>
            {data.map((user, index) => (
                <View key={index} style={styles.userCard}>
                    <Image source={user.image} style={styles.userImage} />
                </View>
            ))}
        </View>
    );

    const renderGameIcons = () => (
        <View style={styles.gameIconsContainer}>

            <TouchableOpacity onPress={()=>setSelectedGame("Dice")} style={[styles.gameIconItem,selectedGame=="Dice"&&{borderColor:"#497AF7",borderWidth:1,borderRadius:5}]}>
                <Image source={diceImg} style={styles.gameIconImage} />
                <Text style={[styles.gameIconText,selectedGame=="Dice"&&{color:"#497AF7"}]}>Dice</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelectedGame("Fishing")} style={[styles.gameIconItem,selectedGame=="Fishing"&&{borderColor:"#497AF7",borderWidth:1,borderRadius:5}]}>
                <Image source={fishingImg} style={styles.gameIconImage} />
                <Text style={[styles.gameIconText,selectedGame=="Fishing"&&{color:"#497AF7"}]}>Fishing</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelectedGame("Chess")} style={[styles.gameIconItem,selectedGame=="Chess"&&{borderColor:"#497AF7",borderWidth:1,borderRadius:5}]}>
                <Image source={cheseImg} style={styles.gameIconImage} />
                <Text style={[styles.gameIconText,selectedGame=="Chess"&&{color:"#497AF7"}]}>Chess</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelectedGame("Hammer")} style={[styles.gameIconItem,selectedGame=="Hammer"&&{borderColor:"#497AF7",borderWidth:1,borderRadius:5}]}>
                <Image source={hammerImg} style={styles.gameIconImage} />
                <Text style={[styles.gameIconText,selectedGame=="Hammer"&&{color:"#497AF7"}]}>Hammer</Text>
            </TouchableOpacity>

        </View>
    );

    const renderTrendingOrFollowingSection = (title, data) => (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((user, index) => (
                    <View key={index} style={styles.trendingUserCard}>
                        <Image source={user.image} resizeMode='cover' />
                    </View>
                ))}
            </ScrollView>
        </View>
    );


    const popularUsers = [
        { image: popularImages[0] },
        { image: popularImages[0] },
        { image: popularImages[0] },
        { image: popularImages[0] },
        { image: popularImages[0] },
        { image: popularImages[0] },
    ];

    const battleUsers = [
        { image: battleImages[3] },
        { image: battleImages[4] },
        { image: battleImages[5] },
        { image: battleImages[3] },
        { image: battleImages[4] },
        { image: battleImages[5] },
    ];

    const trendingData = [
        { image: trendingImages[3] },
        { image: trendingImages[4] },
        { image: trendingImages[5] },
    ];


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.topTabsContainer}>
                    <TouchableOpacity style={[styles.topTab, activeTopTab === 'Trend' && styles.activeTopTab]} onPress={() => setActiveTopTab('Trend')}>
                        <Text style={[styles.topTabText, activeTopTab === 'Trend' && styles.activeTopTabText]}>Trend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.topTab, activeTopTab === 'Following' && styles.activeTopTab]} onPress={() => setActiveTopTab('Following')}>
                        <Text style={[styles.topTabText, activeTopTab === 'Following' && styles.activeTopTabText]}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.topTab, activeTopTab === 'For You' && styles.activeTopTab]} onPress={() => setActiveTopTab('For You')}>
                        <Text style={[styles.topTabText, activeTopTab === 'For You' && styles.activeTopTabText]}>For You</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Feather name="search" size={20} color="#7F818A" style={styles.headerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="bell" size={20} color="#7F818A" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="trophy-outline" size={20} color="#7F818A" style={{ marginLeft: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={()=>{}} />} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                {/* Category Toggles */}
                <View style={styles.categoryTabsContainer}>
                    <TouchableOpacity style={[styles.categoryTab, activeCategoryTab === 'Popular' && styles.activeCategoryTab]} onPress={() => setActiveCategoryTab('Popular')}>
                        <Text style={[styles.categoryTabText, activeCategoryTab === 'Popular' && styles.activeCategoryTabText]}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryTab, activeCategoryTab === 'Battle' && styles.activeCategoryTab]} onPress={() => setActiveCategoryTab('Battle')}>
                        <Text style={[styles.categoryTabText, activeCategoryTab === 'Battle' && styles.activeCategoryTabText]}>Battle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryTab, activeCategoryTab === 'Game' && styles.activeCategoryTab]} onPress={() => setActiveCategoryTab('Game')}>
                        <Text style={[styles.categoryTabText, activeCategoryTab === 'Game' && styles.activeCategoryTabText]}>Game</Text>
                    </TouchableOpacity>
                </View>

                {/* Conditional Content based on activeCategoryTab */}
                {activeCategoryTab === 'Popular' && renderUserGrid(popularUsers)}
                {activeCategoryTab === 'Battle' && renderUserGrid(battleUsers)}
                {activeCategoryTab === 'Game' && (
                    <>
                        {renderGameIcons()}
                        {renderTrendingOrFollowingSection('Trending', trendingData)}
                        {renderTrendingOrFollowingSection('Following', trendingData)}
                    </>
                )}
            </ScrollView>

            <BottomNavBar />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 16
    },
    topTabsContainer: {
        flexDirection: 'row',
        gap: 10
    },
    topTab: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    activeTopTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#497AF7",
    },
    topTabText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#B3B3B3', // Grey for inactive text
    },
    activeTopTabText: {
        color: '#1B114F', // Dark purple/blue for active text
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        marginRight: 15,
    },
    scrollViewContent: {
        paddingBottom: 100,
        backgroundColor: "#f4f4f4"
    },
    categoryTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 5,
        margin: 16
    },
    categoryTab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    activeCategoryTab: {
        backgroundColor: '#f4f4f4', // Purple background for active category tab
    },
    categoryTabText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#7F818A', // Grey for inactive text
    },
    activeCategoryTabText: {
        color: '#000',
    },

    userGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 16
    },
    userCard: {
        width: itemWidth,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    userImage: {
        width: '100%',
        height: itemWidth * 1.2,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        paddingHorizontal: 8,
    },
    userCount: {
        fontSize: 12,
        color: '#7F818A',
        marginBottom: 5,
        paddingHorizontal: 8,
    },

    gameIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        paddingVertical: 15,
        marginBottom: 20,
        marginHorizontal:16,
        gap:15
    },
    gameIconItem: {
        alignItems: 'center',
        padding:6
    },
    gameIconImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    gameIconText: {
        fontSize: 12,
        color: '#333',
    },

    sectionContainer: {
        marginBottom: 20,
        marginHorizontal: 16
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    trendingUserCard: {
        marginBottom: 10,
        marginHorizontal:10
    },
    trendingUserImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'cover',
        marginRight: 15,
    },
    trendingUserInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    trendingUserName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    trendingUserCount: {
        fontSize: 14,
        color: '#7F818A',
    },
});