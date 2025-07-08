import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Stepper from '../../components/Stepper';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const FaceScreen = () => {
    const navigation = useNavigation();
    const [profileImage, setProfileImage] = useState(null);

    const handleImageSelection = () => {
        const options = {
            mediaType: 'photo',
            quality: 0.7,
            maxWidth: 500,
            maxHeight: 500,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode, response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const source = response.assets[0].uri;
                setProfileImage(source);
            }
        });
        console.log("Image selection pressed! (Implement react-native-image-picker here)");
    };

    return (
        <View style={styles.container}>

            <Stepper totalSteps={7} currentStep={4} />
            <Text style={styles.welcomeText}>Show your face</Text>
            <Text style={styles.descriptionText}>Add a profile photo so your audience can recognize you instantly.</Text>
            <TouchableOpacity style={styles.profilePhotoContainer} onPress={handleImageSelection}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                    <View style={styles.cameraIconWrapper}>
                        <Feather name="camera" size={30} color="#6A5ACD" />
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("recommend")} style={styles.proceedButton}>
                <Text style={styles.proceedButtonText}>Proceed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 40,
        marginBottom: 10,
    },
    descriptionText: {
        color: '#A39BCD',
        fontSize: 16,
        marginBottom: 50,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    profilePhotoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#493F81',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
        overflow: 'hidden',
    },
    cameraIconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2A205E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    proceedButton: {
        backgroundColor: '#497AF7',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
    },
    proceedButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});