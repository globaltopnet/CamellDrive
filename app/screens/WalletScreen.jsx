import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, FlatList,  Clipboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ionicons를 import합니다.
import { Colors } from '../../theme/color';
import SubTabScreenHeader from '../main/SubTabScreenHeader';
import RNPickerSelect from 'react-native-picker-select';

// 버튼 텍스트와 매핑될 아이콘 이름
const buttonIcons = {
  출금: 'exit-outline',
  입금: 'enter-outline',
  시세: 'bar-chart-outline',
  더보기: 'ellipsis-horizontal-outline'
};

// WalletScreen.jsx 내 handleButtonPress 수정
const handleButtonPress = (buttonText, navigation) => {
  switch (buttonText) {
    case '입금':
      navigation.navigate('DepositScreen'); // 직접 호출
      break;
    case '출금':
      navigation.navigate('WithdrawalScreen'); // 직접 호출
      break;
    case '시세':
      navigation.navigate('ChartScreen'); // 직접 호출
      break;
    case '더보기':
      // 다른 화면으로 이동
      break;
    default:
      break;
  }
};


const copyToClipboard = (address) => {
  Clipboard.setString(address);
  alert('주소가 복사되었습니다!');
};




export default function WalletScreen({ navigation }) {
  const [currency, setCurrency] = useState('KRW');
  const currencies = [
    // 백엔드 필요 !!
    { label: '(USD)', value: 'USD' },
    { label: '(KRW)', value: 'KRW' },
    { label: '(EUR)', value: 'EUR' }
  ];

  const transactions = [
    // 백엔트 필요 !!
    {
      id: '1',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '2',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '3',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '4',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '5',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '6',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '7',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '8',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '9',
      profilePic: require('@/assets/images/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
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
      {/* 주소와 아이콘을 하나의 뷰 안에 배치 */}
      <View style={styles.addressContainer}>
        <Text style={styles.walletAddress}>
          {`${item.walletAddress.slice(0, 6)}...${item.walletAddress.slice(-4)}`}
        </Text>
        <TouchableOpacity onPress={() => copyToClipboard(item.walletAddress)} style={styles.copyIcon}>
          <Ionicons name="copy-outline" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <Text style={[styles.amount, { color: item.type === 'deposit' ? 'green' : 'red' }]}>
      {item.type === 'deposit' ? '+' : '-'}{item.amount} CAMT
    </Text>
  </View>
  );
  
  

  return (
    <View style={styles.container}>
      <SubTabScreenHeader title="지갑" navigation={navigation} />
      <View style={styles.headContainer}>
        <View style={styles.balance}>

          <View style={styles.balanceTop}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Image
                source={require('@/assets/images/camell_logo.png')}
                style={styles.logo}
            />
            <Text style={styles.camell}>Camell</Text>
            </View>
            
            <View>

              <View style={styles.dropdown}>
                <RNPickerSelect
                  onValueChange={(value) => setCurrency(value)}
                  items={currencies}
                  style={{
                    inputIOS: {
                      fontSize: 13, // 폰트 크기 조정
                      paddingVertical: 12,
                      paddingHorizontal: 10,
                      borderRadius: 4,
                      color: 'gray', // 폰트 색상을 회색으로 변경
                    },
                    inputAndroid: {
                      fontSize: 14, // 폰트 크기 조정
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      color: 'gray', // 폰트 색상을 회색으로 변경
                    },
                    iconContainer: {
                      top: 13,
                      right: 10,
                    },
                  }}
                  value={currency}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{}}
                  Icon={() => {
                    return <Ionicons name="caret-down-outline" size={15} style={{ marginRight: -20, color: 'gray' }} />; // 아이콘을 오른쪽으로 이동시키기
                  }}
                />
              </View>
            </View>

            <View style={styles.dropdown}>
              <RNPickerSelect
                onValueChange={(value) => setCurrency(value)}
                items={currencies}
                style={{
                  inputIOS: {
                    fontSize: 13, // 폰트 크기 조정
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                    borderRadius: 4,
                    color: 'gray', // 폰트 색상을 회색으로 변경
                  },
                  inputAndroid: {
                    fontSize: 14, // 폰트 크기 조정
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    color: 'gray', // 폰트 색상을 회색으로 변경
                  },
                  iconContainer: {
                    top: 13,
                    right: 10,
                  },
                }}
                value={currency}
                useNativeAndroidPickerStyle={false}
                placeholder={{}}
                Icon={() => {
                  return <Ionicons name="caret-down-outline" size={15} style={{ marginRight: -20, color: 'gray' }} />; // 아이콘을 오른쪽으로 이동시키기
                }}
              />
            </View>

          </View>

          <View style={styles.balanceMid}>

                                    {/*  백엔드 필요 !!  */}
            <Text style={styles.camtValue}>32.423123</Text>
            <Text style={styles.camt}>CAMT</Text>
          </View>
          
          <View style={styles.balanceBottom}>

                            {/*  백엔드 필요 !!  */}
          <Text style={styles.Won}>₩23,600</Text>
          <View style={styles.balancePlusMinus}>

                                          {/*  백엔드 필요 !!  */}
            <Text style={styles.PlusMinusValue}>+ 2.53%</Text>
          </View>

          </View>

        </View>
        <View style={styles.buttonRow}>
          {Object.entries(buttonIcons).map(([buttonText, iconName]) => (
             <TouchableOpacity
              key={buttonText}
              style={styles.buttonCircle}
              onPress={() => handleButtonPress(buttonText, navigation)}
             >
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
          showsVerticalScrollIndicator={false}
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
    marginHorizontal: 15,
    flex: 1.8,
    backgroundColor: Colors.background,

  },


  logo: {
    width: 47,
    height: 47,
  },



  dropdown: {
    alignItems: 'center',
    marginLeft: 160,
  },


balanceTop: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginLeft: 15,
  marginTop: 15,
  marginBottom: 5,
  alignItems: 'center',
},
camell: {
  fontSize: 19,
  marginLeft: 10,
},

balanceMid: {
  flexDirection: 'row',
  marginLeft: 15,
},
camtValue: {
  fontSize: 27,
},
camt: {
  fontSize: 27,
  marginLeft: 10,
},


balanceBottom: {
  flexDirection: 'row',
  marginTop: 13,
  marginLeft: 15,
  justifyContent: 'space-between',
},

Won: {
  fontSize: 15,
  color: 'gray'
},

balancePlusMinus: {
  backgroundColor: '#10ad2a',
  marginRight: 15,
  borderRadius: 15,
  padding: 6,
},
PlusMinusValue: {
  fontSize: 12,
  color: 'white'
},



  buttonRow: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,

  },
  buttonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 10,
    backgroundColor: Colors.background,
    shadowColor: '#000', shadowOffset: { width: 0, height: 0.5 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 1

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

  addressContainer: {
    flexDirection: 'row', // 주소와 아이콘을 가로로 배치
    alignItems: 'center', // 세로 중앙 정렬
  },

  copyIcon: {
    marginLeft: 5, // 아이콘과 주소 사이 간격 조절
  },
});
