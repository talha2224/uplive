import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Stepper from '../../components/Stepper';

const RoleScreen = () => {
    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };

    const handleProceed = () => {
        if (selectedGender) {
            navigation.navigate("home");
        } else {
            alert("Please select your role to proceed.");
        }
    };

    return (
        <View style={styles.container}>

            <Stepper totalSteps={7} currentStep={7} />
            <Text style={styles.welcomeText}>How will you use the app?</Text>
            <Text style={styles.descriptionText}>Choose whether you’re here to stream, watch, or both.</Text>

            <View style={styles.genderOptionsContainer}>
                <TouchableOpacity
                    style={[
                        styles.genderButton,
                        selectedGender === 'Viewer' ? styles.selectedGenderButton : styles.unselectedGenderButton
                    ]}
                    onPress={() => handleGenderSelection('Viewer')}
                >
                    <Text
                        style={[
                            styles.genderButtonText,
                            selectedGender === 'Viewer' ? styles.selectedGenderButtonText : styles.unselectedGenderButtonText
                        ]}
                    >
                        Viewer
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.genderButton,
                        selectedGender === 'Streamer' ? styles.selectedGenderButton : styles.unselectedGenderButton
                    ]}
                    onPress={() => handleGenderSelection('Streamer')}
                >
                    <Text
                        style={[
                            styles.genderButtonText,
                            selectedGender === 'Streamer' ? styles.selectedGenderButtonText : styles.unselectedGenderButtonText
                        ]}
                    >
                        Streamer
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleProceed}
                style={styles.proceedButton}
            >
                <Text style={styles.proceedButtonText}>Proceed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RoleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70, // Adjusted paddingTop for overall content
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 40, // Increased margin from stepper
        marginBottom: 10,
    },
    descriptionText: {
        color: '#A39BCD',
        fontSize: 16,
        marginBottom: 50, // Increased margin to separate from gender options
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    genderOptionsContainer: {
        width: '100%',
        marginBottom: 80, // Space between gender options and button
    },
    genderButton: {
        width: '100%',
        paddingVertical: 18,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 15, // Space between gender buttons
        borderWidth: 1, // Added border for both states
        paddingHorizontal: 20
    },
    unselectedGenderButton: {
        backgroundColor: 'transparent', // Transparent background for unselected
        borderColor: '#53478F', // Border color for unselected
    },
    selectedGenderButton: {
        backgroundColor: '#3B358F', // Darker purple background for selected
        borderColor: '#53478F', // Purple border for selected
    },
    genderButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    unselectedGenderButtonText: {
        color: '#A39BCD', // Grey text for unselected
    },
    selectedGenderButtonText: {
        color: '#fff', // White text for selected
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
    },
});