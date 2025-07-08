import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import Stepper from '../../components/Stepper';

const topicsData = [
    { id: '1', name: 'Football games' },
    { id: '2', name: 'News' },
    { id: '3', name: 'Music' },
    { id: '4', name: 'Politics' },
    { id: '5', name: 'Trending' },
    { id: '6', name: 'Social network' },
    { id: '7', name: 'Science' },
    { id: '8', name: 'Technology' },
    { id: '9', name: 'Art' },
    { id: '10', name: 'Travel' },
];

const RecommendScreen = () => {
    const navigation = useNavigation();
    const [selectedTopics, setSelectedTopics] = useState([]);

    const toggleTopicSelection = (topicId) => {
        setSelectedTopics(prevSelected => {
            if (prevSelected.includes(topicId)) {
                return prevSelected.filter(id => id !== topicId);
            } else {
                return [...prevSelected, topicId];
            }
        });
    };

    const renderTopic = ({ item }) => {
        const isSelected = selectedTopics.includes(item.id);
        return (
            <TouchableOpacity style={[styles.topicTag,isSelected ? styles.selectedTopicTag : styles.unselectedTopicTag]}onPress={() => toggleTopicSelection(item.id)}>
                <Text style={[styles.topicTagText,isSelected ? styles.selectedTopicTagText : styles.unselectedTopicTagText]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            <Stepper totalSteps={7} currentStep={5} />
            <Text style={styles.welcomeText}>Tailor your experience</Text>
            <Text style={styles.descriptionText}>Let us know what you love — we’ll recommend content and creators</Text>
            <View style={styles.topicsContainer}>
                <FlatList
                    data={topicsData}
                    renderItem={renderTopic}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContent}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate("gender")}}style={styles.proceedButton}>
                <Text style={styles.proceedButtonText}>Proceed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RecommendScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B114F',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70,
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
        marginBottom: 40,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    topicsContainer: {
        width: '100%',
        marginBottom: 30,
    },
    flatListContent: {
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    topicTag: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        minWidth: (Dimensions.get('window').width - 40 - 20) / 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    unselectedTopicTag: {
        backgroundColor: 'transparent',
        borderColor: '#53478F',
    },
    selectedTopicTag: {
        backgroundColor: '#3B358F',
        borderColor: '#3B358F',
    },
    topicTagText: {
        fontSize: 14,
        fontWeight: '500',
    },
    unselectedTopicTagText: {
        color: '#A39BCD',
    },
    selectedTopicTagText: {
        color: '#fff',
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