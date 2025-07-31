import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExchangeScreen = () => {
  const navigation = useNavigation();
  const [diamondAmount, setDiamondAmount] = useState('');
  const [minAmount, setMinAmount] = useState('100');

  const exchangedCoins = diamondAmount ? (parseFloat(diamondAmount) * 20) : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Exchange</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>

        <View style={styles.diamondBalanceContainer}>
          <Text style={styles.diamondBalanceText}>Diamond Balance</Text>
          <Text style={styles.diamondBalanceAmount}>💎 120,000</Text>
        </View>

        <View style={styles.exchangeCard}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              placeholder="💎 Exchange Amount"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={diamondAmount}
              onChangeText={setDiamondAmount}
            />
            <TouchableOpacity style={styles.minButton} onPress={() => setDiamondAmount(minAmount)}>
              <Text style={styles.minButtonText}>Min</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              placeholder="🪙 You’ll receive"
              placeholderTextColor="#888"
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.exchangeRate}>Exchange rate: 1 diamond = 20 coins</Text>

        <TouchableOpacity style={styles.exchangeButton}>
          <Text style={styles.exchangeButtonText}>Exchange</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    elevation: 0,
    paddingTop: Platform.OS === 'android' ? 50 : 40,
    marginHorizontal: -15,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerRightPlaceholder: {
    width: 34,
  },
  diamondBalanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10
  },
  diamondBalanceText: {
    fontSize: 16,
    color: '#888888',
    marginRight: 5,
  },
  diamondBalanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  exchangeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
  minButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  minButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  exchangeRate: {
    fontSize: 12,
    color: '#888888',
    textAlign: "center",
    marginBottom: 20
  },
  exchangeButton: {
    backgroundColor: '#497AF7',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  exchangeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExchangeScreen;
