import React, { useState } from 'react';
import { Image, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import streamImg from '../../assets/home/stream.png'
import { imgUrl } from '../../config'
import { commentsData, reportReasons } from '../../constant';
import BottomNavBar from '../../components/BottomNavbar';
import { useNavigation } from '@react-navigation/core';


const ExploreScreen = () => {
    const nav = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const [moreVisible, setMoreVisible] = useState(false);
    const [blockVisible, setBlockVisible] = useState(false);
    const [reportVisible, setReportVisible] = useState(false);
    const [selectedReason, setSelectedReason] = useState(null);


    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>


            <ImageBackground source={streamImg} style={{ width: "100%", height: "100%" }} resizeMode='cover' />
            <TouchableOpacity onPress={() => nav.navigate("createpost")} style={{ position: "absolute", top: 70, right: 20, backgroundColor: "#497AF7", width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                <AntDesign name="plus" size={20} style={{ color: "#fff" }} />
            </TouchableOpacity>
            <View style={{ position: "absolute", bottom: 230, right: 20 }}>
                <TouchableOpacity style={{ marginBottom: 20 }}><AntDesign name="heart" size={24} style={{ color: "#fff" }} /></TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => setModalVisible(true)}><Feather name="message-circle" size={24} style={{ color: "#fff" }} /></TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 20 }}><FontAwesome name="share" size={24} style={{ color: "#fff" }} /></TouchableOpacity>
            </View>
            <View style={{ position: "absolute", bottom: 100, right: 0, left: 0, backgroundColor: "rgba(0,0,0,0.2)", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>

                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Image source={{ uri: imgUrl }} style={{ width: 40, height: 40, borderRadius: 100 }} />
                        <Text style={{ color: "#fff" }}>Alex Franklin</Text>
                    </View>
                    <Text style={{ color: "#fff", marginTop: 3, width: "90%" }}>I’m having the best moment of my life in Bahamas tonight</Text>
                </View>

                <TouchableOpacity onPress={() => setMoreVisible(true)} style={{ backgroundColor: "#fff", width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                    <Entypo name="dots-three-vertical" size={16} style={{ color: "#000" }} />
                </TouchableOpacity>

            </View>


            {/* CHAT MODEL  */}

            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setModalVisible(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                    <Pressable style={styles.modalContent} onPress={() => { }}>
                        <View style={styles.dragHandle} />
                        <Text style={styles.modalHeader}>Comments</Text>
                        <ScrollView style={styles.commentsList}>
                            {commentsData.map((commentItem) => (
                                <View key={commentItem.id} style={styles.commentItem}>
                                    <Image source={{ uri: imgUrl }} style={styles.commentUserImage} />
                                    <View style={styles.commentDetails}>
                                        <Text style={styles.commentUserName}>{commentItem.userName}</Text>
                                        <Text style={styles.commentText}>{commentItem.comment}</Text>
                                        <View style={styles.commentActions}>
                                            <AntDesign name="heart" size={14} color="#666" />
                                            <Text style={styles.commentActionText}>{commentItem.likes}</Text>
                                            <AntDesign name="dislike1" size={14} color="#666" style={{ marginLeft: 15 }} />
                                            <Text style={styles.commentActionText}>{commentItem.dislikes}</Text>
                                            <TouchableOpacity style={styles.viewRepliesButton}>
                                                <Text style={styles.viewRepliesText}>View replies {commentItem.replies}</Text>
                                                <AntDesign name="right" size={12} color="#497AF7" style={{ marginLeft: 5 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>

                        <View style={styles.commentInputContainer}>
                            <Image source={{ uri: imgUrl }} style={styles.commentInputUserImage} />
                            <TextInput style={styles.commentTextInput} placeholder="Your comments" placeholderTextColor="#999" />
                            <View style={styles.commentInputIcons}>
                                <TouchableOpacity><MaterialCommunityIcons name="image-multiple" size={24} color="#777" /></TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 10 }}><Ionicons name="happy-outline" size={24} color="#777" /></TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.sendButton}>
                                <AntDesign name="arrowright" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* MORE MODEL  */}
            <Modal animationType="slide" transparent={true} visible={moreVisible} onRequestClose={() => setMoreVisible(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setMoreVisible(false)}>
                    <Pressable style={styles.modalContentMore} onPress={() => { }}>
                        <View style={styles.dragHandle} />
                        <Text style={styles.modalHeader}>More</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <TouchableOpacity onPress={() => { setMoreVisible(false); setReportVisible(true) }} style={{ backgroundColor: "#F3F3F3", width: 120, height: 120, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Feather name="alert-octagon" size={22} color={"#497AF7"} style={{ marginBottom: 4 }} />
                                <Text>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setMoreVisible(false); setBlockVisible(true) }} style={{ backgroundColor: "#F3F3F3", width: 120, height: 120, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <MaterialIcons name="block" size={24} color={"#497AF7"} style={{ marginBottom: 4 }} />
                                <Text>Block</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* BLOCK MODEL  */}
            <Modal animationType="slide" transparent={true} visible={blockVisible} onRequestClose={() => setBlockVisible(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setBlockVisible(false)}>
                    <Pressable style={styles.modalContentBlock} onPress={() => { }}>
                        <View style={styles.blockIconContainer}>
                            <MaterialIcons name="block" size={50} color="#497AF7" />
                        </View>
                        <Text style={styles.blockHeader}>Block post</Text>
                        <Text style={styles.blockMessage}>
                            Posts has been blocked
                        </Text>
                        <Text style={styles.blockSubMessage}>
                            You can no longer view their posts, or interact with you.
                        </Text>
                        <TouchableOpacity style={styles.blockButton} onPress={() => setBlockVisible(false)}>
                            <Text style={styles.blockButtonText}>Okay, got it!</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>


            {/* Report MODEL */}
            <Modal animationType="slide" transparent={true} visible={reportVisible} onRequestClose={() => setReportVisible(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setReportVisible(false)}>
                    <Pressable style={styles.modalContentReport} onPress={() => { }}>
                        <View style={styles.dragHandle} />
                        <Text style={styles.modalHeader}>Report</Text>
                        <Text style={styles.reportQuestion}>Why are you reporting this user</Text>
                        <View style={styles.reportReasonsContainer}>
                            {reportReasons.map((reason, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.reportReasonButton,
                                        selectedReason === reason && styles.reportReasonButtonSelected
                                    ]}
                                    onPress={() => setSelectedReason(reason)}
                                >
                                    <Text
                                        style={[
                                            styles.reportReasonText,
                                            selectedReason === reason && styles.reportReasonTextSelected
                                        ]}
                                    >
                                        {reason}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TextInput
                            style={styles.reportTextInput}
                            placeholder="Please describe your reasons"
                            placeholderTextColor="#999"
                            multiline
                        />
                        <TouchableOpacity style={styles.proceedButton} onPress={() => setReportVisible(false)}>
                            <Text style={styles.proceedButtonText}>Proceed</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>



            <BottomNavBar />


        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        zIndex: 100
    },
    commentUserImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
        height: "70%"
    },
    modalContentMore: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15
    },
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 15,
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    commentsList: {
        flex: 1,
        marginBottom: 20,
    },
    commentItem: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    commentUserImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentDetails: {
        flex: 1,
    },
    commentUserName: {
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#333',
    },
    commentText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    commentActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    commentActionText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 5,
    },
    viewRepliesButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    viewRepliesText: {
        color: '#497AF7',
        fontSize: 12,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff', // Ensure background for the input area
    },
    commentInputUserImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentTextInput: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontSize: 14,
        color: '#333',
    },
    commentInputIcons: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    sendButton: {
        backgroundColor: '#497AF7',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    modalContentBlock: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    blockIconContainer: {
        backgroundColor: '#E6EFFD',
        borderRadius: 50,
        padding: 15,
        marginBottom: 20,
    },
    blockHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    blockMessage: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 5,
    },
    blockSubMessage: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 30,
    },
    blockButton: {
        backgroundColor: '#497AF7',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    blockButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContentReport: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
    },
    reportQuestion: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    reportReasonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    reportReasonButton: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
        marginBottom: 10,
    },
    reportReasonButtonSelected: {
        backgroundColor: '#E6EFFD',
        borderColor: '#497AF7',
    },
    reportReasonText: {
        fontSize: 14,
        color: '#555',
    },
    reportReasonTextSelected: {
        color: '#497AF7',
        fontWeight: 'bold',
    },
    reportTextInput: {
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 20,
        fontSize: 14,
        color: '#333',
    },
    proceedButton: {
        backgroundColor: '#497AF7',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    proceedButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});