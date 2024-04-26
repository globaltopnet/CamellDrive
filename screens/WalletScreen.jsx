import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ionicons를 import합니다.
import { Colors } from '../theme/color';
import SubTabScreenHeader from '../src/SubTabScreenHeader';

// 버튼 텍스트와 매핑될 아이콘 이름
const buttonIcons = {
  출금: 'exit-outline',
  입금: 'enter-outline',
  차트: 'bar-chart-outline',
  더보기: 'ellipsis-horizontal-outline'
};

export default function WalletScreen({ navigation }) {

  const transactions = [
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '1',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: '0xABC...1234',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    // ... 더 많은 내역 추가
  ];

  const renderItem = ({ item }) => (
    <View style={styles.transactionRow}>
      <Image source={item.profilePic} style={styles.profilePic} />
      <View style={styles.transactionDetails}>
        <Text style={styles.walletAddress}>{item.walletAddress}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={[styles.amount, { color: item.type === 'deposit' ? 'green' : 'red' }]}>
        {item.type === 'deposit' ? '+' : '-'}{item.amount} CAMT
      </Text>
      <Ionicons
        name={item.type === 'deposit' ? 'enter-outline' : 'exit-outline'}
        size={20}
        color={item.type === 'deposit' ? 'green' : 'red'}
      />
    </View>
  );
  

  return (
    <View style={styles.container}>
      <SubTabScreenHeader title="지갑" navigation={navigation} />
      <View style={styles.headContainer}>
        <View style={styles.balance}>
        <Image
            source={require('../src/img/camell_logo.png')}
            style={styles.logo}
          />
          <View style={styles.balanceTexts}>
            <Text style={styles.Camt}>0.0</Text>
            <Text style={styles.value}>CAMT</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          {Object.entries(buttonIcons).map(([buttonText, iconName]) => (
            <TouchableOpacity key={buttonText} style={styles.buttonCircle}>
              <Ionicons name={iconName} size={30} color="#000" />
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebef',
  },
  headContainer: {
    flex: 1,
    marginBottom: 10,
  },
  balance: {
    borderRadius: 20,
    margin: 11,
    flex: 1.3,
    backgroundColor: Colors.background,
    alignItems: 'center',

  },

  balanceTexts: {
  },

  Camt: {
    fontSize: 20,
    textAlign: 'center',
    bottom: -5,
  },
  value: {
    textAlign: 'center',
    fontSize: 20,
    bottom: 10,
    marginTop: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,

  },
  buttonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70, // 원형 버튼의 폭과 높이
    height: 70, // 원형 버튼의 폭과 높이
    borderRadius: 35, // 버튼의 반지름을 폭과 높이의 절반으로 설정하여 원형 만들기
    padding: 10,
    backgroundColor: Colors.background,
  },
  buttonIconText: {
    // 아이콘을 위한 텍스트 스타일링, 실제 아이콘으로 교체 필요
  },
  buttonText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5, // 아이콘과 텍스트 간격 조정
  },
  bottomContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1.5,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#000',
    marginTop: 8,
  },
  profilePic: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  transactionDetails: {
    flex: 1,
  },
  walletAddress: {
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },


  logo: {
    marginTop: 15,
    width: 40,
    height: 40,
  }
});
