import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomNavBar from '../../../components/BottomNavbar';
import profile_img from '../../../assets/home/profile/avatar.png';
import cover_img from '../../../assets/home/profile/cover.png';
import card_img from '../../../assets/home/profile/card.png';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <Image source={cover_img} style={styles.coverImage} />

          <View style={styles.headerIconsContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate("edit_profile")}} style={styles.headerIcon}>
              <Ionicons name="pencil-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="qr-code-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileHeader}>
            <Image source={profile_img} style={styles.profileImage} />
            <Text style={styles.profileName}>Alex Franklin</Text>
            <Text style={styles.profileID}>ID:12345678</Text>
            <Text style={styles.profileBio}>I am a solo trader</Text>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>300K</Text>
                <Text style={styles.statLabel}>Likes</Text>
              </View>
              <View style={styles.statSeparator} />
              <TouchableOpacity onPress={()=>{navigation.navigate("connections")}} style={styles.statItem}>
                <Text style={styles.statNumber}>200</Text>
                <Text style={styles.statLabel}>Following</Text>
              </TouchableOpacity>
              <View style={styles.statSeparator} />
              <TouchableOpacity onPress={()=>{navigation.navigate("connections")}} style={styles.statItem}>
                <Text style={styles.statNumber}>12M</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </TouchableOpacity>
              <View style={styles.statSeparator} />
              <TouchableOpacity onPress={()=>{navigation.navigate("connections")}} style={styles.statItem}>
                <Text style={styles.statNumber}>100k</Text>
                <Text style={styles.statLabel}>Friends</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="home-outline" size={24} color="#333" />
              <Text style={styles.actionButtonText}>Host center</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="bar-chart-outline" size={24} color="#333" />
              <Text style={styles.actionButtonText}>Data center</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="briefcase-outline" size={24} color="#333" />
              <Text style={styles.actionButtonText}>Agency</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.balanceLevelContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate("balance")}} style={styles.balanceButton}>
              <Ionicons name="wallet-outline" size={24} color="#FFFFFF" />
              <Text style={styles.balanceButtonText}>Balance</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("level")}} style={styles.levelButton}>
              <Ionicons name="trending-up-outline" size={24} color="#FFFFFF" />
              <Text style={styles.levelButtonText}>Level</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentTabsContainer}>
            <TouchableOpacity style={styles.contentTabActive}>
              <Text style={styles.contentTabTextActive}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentTab}>
              <Text style={styles.contentTabText}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentTab}>
              <Text style={styles.contentTabText}>Likes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageGrid}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Image key={i} source={card_img} style={styles.gridImage} />
            ))}
          </View>
        </ScrollView>

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
  scrollViewContent: {
    paddingBottom: 20,
  },
  coverImage: {
    width: '100%',
    height: 310,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 10 : 40,
    width: '100%',
    zIndex: 1,
  },
  headerIcon: {
    marginLeft: 15,
    padding: 5,
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 150,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginTop: -70,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  profileID: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 220,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    zIndex: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
  },
  statSeparator: {
    width: 1,
    backgroundColor: '#E0E0E0',
    height: '80%',
    alignSelf: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginTop: 20,
  },
  actionButton: {
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
  actionButtonText: {
    fontSize: 12,
    color: '#333333',
    marginTop: 5,
  },
  balanceLevelContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  balanceButton: {
    flex: 1,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 15,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  balanceButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  levelButton: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    paddingVertical: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  levelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  contentTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  contentTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  contentTabActive: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  contentTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888888',
  },
  contentTabTextActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 100,
  },
  gridImage: {
    width: '32%',
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});

export default ProfileScreen;