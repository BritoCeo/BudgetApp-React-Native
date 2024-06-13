import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const transactions = [
  { id: '1', date: '2024-05-20', description: 'Amazon Purchase', amount: '-N$50.00' },
  { id: '2', date: '2024-05-18', description: 'Starbucks', amount: '-N$5.75' },
  { id: '3', date: '2024-05-15', description: 'Salary', amount: '+N$2,000.00' },
  { id: '4', date: '2024-05-12', description: 'Grocery Store', amount: '-N$120.50' },
];

const BankCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.bankName}>Bank of React Native</Text>
          <Icon name="credit-card" size={30} color="#fff" />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.footerContent}>
            <Text style={styles.cardHolderLabel}>Card Holder</Text>
            <Text style={styles.cardHolder}>John Doe</Text>
          </View>
          <View style={styles.footerContent}>
            <Text style={styles.expiryLabel}>Expiry</Text>
            <Text style={styles.expiryDate}>12/24</Text>
          </View>
          <Image
            style={styles.chipIcon}
            source={{ uri: 'https://img.icons8.com/color/48/000000/sim-card-chip.png' }}
          />
        </View>
      </View>

      <Text style={styles.historyTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionDescription}>{item.description}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  card: {
    marginTop:20,
    width: '90%',
    height: 200,
    borderRadius: 15,
    padding: 20,
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#3b5998',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBody: {
    marginTop: 30,
    marginBottom: 30,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContent: {
    alignItems: 'flex-start',
  },
  cardHolderLabel: {
    color: '#bbb',
    fontSize: 12,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expiryLabel: {
    color: '#bbb',
    fontSize: 12,
  },
  expiryDate: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chipIcon: {
    width: 40,
    height: 40,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: 20,
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: '5%',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
  transactionDescription: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BankCard;
