import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profile_img from '../../../assets/home/profile/avatar.png';
import cover_img from '../../../assets/home/profile/cover.png';

const EditProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Edit profile</Text>
                </View>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Image source={cover_img} style={styles.coverImage} />

                    <View style={styles.profileImageContainer}>
                        <Image source={profile_img} style={styles.profileImage} />
                        <TouchableOpacity style={styles.cameraIconContainer}>
                            <Ionicons name="camera" size={20} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.editCard}>
                        <TouchableOpacity style={styles.editItem}>
                            <View>
                                <Text style={styles.editItemLabel}>Alex Franklin</Text>
                                <Text style={styles.editItemValue}>Name</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#888" />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.editItem}>
                            <View>
                                <Text style={styles.editItemLabel}>Male</Text>
                                <Text style={styles.editItemValue}>Gender</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#888" />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.editItem}>
                            <View>
                                <Text style={styles.editItemLabel}>25/05/2025</Text>
                                <Text style={styles.editItemValue}>Date of birth</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#888" />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.editItem}>
                            <View>
                                <Text style={styles.editItemLabel}>United States</Text>
                                <Text style={styles.editItemValue}>Location</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#888" />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.editItem}>
                            <View>
                                <Text style={styles.editItemLabel}>I am a sole trader</Text>
                                <Text style={styles.editItemValue}>Bio</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#888" />
                        </TouchableOpacity>
                    </View>
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
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
        color: '#333',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    coverImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    profileImageContainer: {
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 20,
        zIndex: 1,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#E0E0E0',
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#497AF7',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    editCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: -50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    editItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    editItemLabel: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    editItemValue: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
    separator: {
        height: 1,
        backgroundColor: '#F0F0F0',
    },
});

export default EditProfileScreen;
