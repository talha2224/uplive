import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Image, StatusBar } from 'react-native';
import mountainBg from '../../assets/home/mountainBg.png';
import { useNavigation } from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePostScreen = () => {
    const nav = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleMediaPick = () => {
        const options = { mediaType: 'mixed', selectionLimit: 1, };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled picker');
            }
            else if (response.errorCode) {
                console.log('Picker error: ', response.errorMessage);
            }
            else {
                const asset = response.assets[0];
                setSelectedImage(asset.uri);
                console.log('Selected file:', asset);
            }
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <StatusBar hidden />
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create post</Text>

                </View>
                <TouchableOpacity style={styles.publishButton}>
                    <Text style={styles.publishButtonText}>Publish</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground source={selectedImage?{uri:selectedImage}:mountainBg} style={styles.backgroundImage} resizeMode='cover'>
                <View style={styles.editContainer}>
                    <View style={styles.dragHandle} />
                    <Text style={styles.editTitle}>Edit</Text>
                    <TextInput style={styles.textInput} placeholder="What's on our mind?" placeholderTextColor="#999" multiline />
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.actionButton} onPress={handleMediaPick}>
                            <Entypo name="camera" size={16} color="#497AF7" />
                            <Text style={styles.actionButtonText}>Photo/ Videos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <MaterialCommunityIcons name="tag" size={16} color="#497AF7" />
                            <Text style={styles.actionButtonText}>Tags</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <MaterialIcons name="public" size={16} color="#497AF7" />
                            <Text style={styles.actionButtonText}>Public</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 60,
        paddingBottom: 30,
        backgroundColor: 'transparent',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    publishButton: {
        backgroundColor: '#497AF7',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    publishButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    editContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: 40, // Add some bottom padding for action buttons
    },
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 15,
    },
    editTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    textInput: {
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
        fontSize: 14,
        color: '#333',
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    actionButtonText: {
        marginLeft: 5,
        color: '#497AF7',
        fontSize: 13,
        fontWeight: '500',
    },
});