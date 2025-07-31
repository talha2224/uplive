import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const MessageScreen = () => {
    const navigation = useNavigation();
    const flatListRef = useRef(null);
    const [messageInput, setMessageInput] = useState('');
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const messages = [
        {
            id: 'm1',
            text: 'Hey! Thanks for the gift during my stream earlier 💕 That was so sweet!',
            sender: 'other',
            time: '1:57 AM',
            avatar: { uri: 'https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=' },
            status: 'read',
        },
        {
            id: 'm2',
            text: 'Of course! Your energy was 🔥🔥 I had to support. Do you go live every day?',
            sender: 'me',
            time: '1:57 AM',
            avatar: { uri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            status: 'read',
        },
        {
            id: 'm3',
            text: 'Aww thank you 😊 I try to stream every evening around 7 PM. You gonna join again?',
            sender: 'other',
            time: '1:57 AM',
            avatar: { uri: 'https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=' },
            status: 'read',
        },
        {
            id: 'm4',
            text: 'Definitely, I\'ll bring more gifts next time 💪',
            sender: 'me',
            time: '1:57 AM',
            avatar: { uri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            status: 'read',
        },
        {
            id: 'm5',
            text: 'Haha I\'ll hold you to that! Appreciate you ♥',
            sender: 'other',
            time: '1:57 AM',
            avatar: { uri: 'https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=' },
            status: 'read',
        },
    ];

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
            if (flatListRef.current) {
                flatListRef.current.scrollToEnd({ animated: true });
            }
        }
    };


    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', e => {
            setKeyboardHeight(e.endCoordinates.height);
        });
        const hideSub = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
        });
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    const renderMessage = ({ item }) => (
        <View style={[
            styles.messageRow,
            item.sender === 'me' ? styles.myMessageRow : styles.otherMessageRow
        ]}>
            {item.sender === 'other' && (
                <Image source={item.avatar} style={styles.messageAvatar} />
            )}
            <View style={[
                styles.messageBubble,
                item.sender === 'me' ? styles.myMessageBubble : styles.otherMessageBubble
            ]}>
                <Text style={item.sender === 'me' ? styles.myMessageText : styles.otherMessageText}>
                    {item.text}
                </Text>
                <View style={styles.messageTimeAndStatus}>
                    <Text style={item.sender === 'me' ? styles.myMessageTime : styles.otherMessageTime}>
                        {item.time}
                    </Text>
                    {item.status === 'read' && (
                        <Ionicons name="checkmark-done" size={14} color={item.sender === 'me' ? '#E0E0E0' : '#AAAAAA'} style={styles.messageStatusIcon} />
                    )}
                </View>
            </View>
            {item.sender === 'me' && (
                <Image source={item.avatar} style={styles.messageAvatar} />
            )}
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.safeArea}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                        <Image source={{ uri: 'https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=' }} style={styles.headerAvatar} />
                        <Text style={styles.headerTitle}>Luna Live</Text>
                        <TouchableOpacity style={styles.optionsButton}>
                            <Ionicons name="ellipsis-vertical" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>

                    {/* Content including FlatList and Input */}
                    <View style={{ flex: 1 }}>
                        <FlatList ref={flatListRef} data={messages} renderItem={renderMessage} keyExtractor={item => item.id} contentContainerStyle={styles.messageList} onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}  onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })} style={{ flex: 1 }}/>
                        {/* Input */}
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.textInput} placeholder="Type your message" placeholderTextColor="#888" value={messageInput} onChangeText={setMessageInput} multiline/>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Entypo name="attachment" size={24} color="#888" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                                <Ionicons name="send" size={17} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        paddingTop: Platform.OS === 'android' ? 50 : 40,
    },
    backButton: {
        padding: 5,
        marginRight: 10,
    },
    headerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    optionsButton: {
        padding: 5,
        marginLeft: 10,
    },
    messageList: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    myMessageRow: {
        justifyContent: 'flex-end',
    },
    otherMessageRow: {
        justifyContent: 'flex-start',
    },
    messageAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 5,
    },
    messageBubble: {
        maxWidth: '75%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        flexDirection: 'column',
    },
    myMessageBubble: {
        backgroundColor: '#6A5ACD',
        borderBottomRightRadius: 5,
    },
    otherMessageBubble: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderBottomLeftRadius: 5,
    },
    myMessageText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    otherMessageText: {
        color: '#333333',
        fontSize: 15,
    },
    messageTimeAndStatus: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 5,
        alignItems: 'center',
    },
    myMessageTime: {
        color: '#E0E0E0',
        fontSize: 10,
    },
    otherMessageTime: {
        color: '#AAAAAA',
        fontSize: 10,
    },
    messageStatusIcon: {
        marginLeft: 3,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    textInput: {
        flex: 1,
        minHeight: 40,
        maxHeight: 100,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        fontSize: 15,
        color: '#333333',
    },
    deleteButton: {
        padding: 8,
    },
    sendButton: {
        backgroundColor: '#497AF7',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
});

export default MessageScreen;
