import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, Clipboard,
  Button, TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ionicons를 import합니다.
import { Colors } from '../theme/color';
import SubTabScreenHeader from '../src/SubTabScreenHeader';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';


// 버튼 텍스트와 매핑될 아이콘 이름
const buttonIcons = {
  출금: 'exit-outline',
  입금: 'enter-outline',
  시세: 'bar-chart-outline',
  더보기: 'ellipsis-horizontal-outline'
};

// WalletScreen.jsx 내 handleButtonPress 수정



const copyToClipboard = (address) => {
  Clipboard.setString(address);
  alert('주소가 복사되었습니다!');
};




export default function WalletScreen({ navigation }) {

  {/**실제 지갑 주소 */}
  const walletAddress = "TNDcxm95uDiensNHpfHfn7q5kt2x1vtMfD";


  const copyToClipboard = (address) => {
    Clipboard.setString(address);
    Alert.alert("알림", "주소가 클립보드에 복사되었습니다!");
  };

  const [inputText, setInputText] = useState('');

// 초기 상태를 false로 설정
const [depositModalVisible, setDepositModalVisible] = useState(false);
const [withdrawalModalVisible, setWithdrawalModalVisible] = useState(false);
const closeModal = () => {
  setDepositModalVisible(false);
};

  

const handleButtonPress = (buttonText) => {
  switch (buttonText) {
    case '입금':
      closeModal();  // 먼저 모달을 강제로 닫고
      setTimeout(() => setDepositModalVisible(true), 10);  // 소폭의 지연 후 모달을 열어 상태 변경이 반드시 일어나도록 함
      break;
    
    case '출금':
      setWithdrawalModalVisible(true);
      break;

    case '시세':
      // 시세 관련 처리
      break;
    
    case '더보기':
      // 더보기 관련 처리
      break;
    
    default:
      break;
  }
};
  

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
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '2',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '3',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '4',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'withrow',
    },
    {
      id: '5',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '6',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '7',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '8',
      profilePic: require('../src/img/camell_logo.png'),
      walletAddress: 'TQsfB1J131GZV3PH8HyCaE8pzNmFnTYzQ5',
      date: '2024-04-26',
      amount: '100.00',
      type: 'deposit',
    },
    {
      id: '9',
      profilePic: require('../src/img/camell_logo.png'),
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>
      <SubTabScreenHeader title="지갑" navigation={navigation} />
      <Modal
  animationType="slide"
  transparent={true}
  visible={withdrawalModalVisible}
  onRequestClose={() => {
    setWithdrawalModalVisible(!withdrawalModalVisible);
  }}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setWithdrawalModalVisible(!withdrawalModalVisible)}
      >
        <Ionicons name="close-circle" size={40} color="#000" />
      </TouchableOpacity>
      <Text style={styles.modalText}>출금</Text>
      <View style={styles.inputView}>
        <View style={styles.inputForm}>
          <View style={styles.won}>
            <Text>출금 수량</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setInputText(text)}
              placeholder="최소 10 CAMT"
              placeholderTextColor="#808080"
            />
            <Text style={styles.wonValue}>= 0 KRW</Text>
          </View>
          <Text>출금 대상</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setInputText(text)}
            placeholder="대상 주소 입력"
            placeholderTextColor="#808080"
          />
          <View style={styles.network}>
            <Text style={styles.networkText}>출금 네트워크</Text>
            <View style={styles.networkValue}>
              <Text style={styles.networkValueText}>Tron</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.okButton}>
              <Text style={styles.okButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </View>
</Modal>





<Modal
  animationType="slide"
  transparent={true}
  visible={depositModalVisible}
  onRequestClose={() => setDepositModalVisible(false)}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setDepositModalVisible(false)}
      >
        <Ionicons name="close-circle" size={40} color="#000" />
      </TouchableOpacity>
      <Text style={styles.modalText}>입금</Text>
      <View style={styles.qr}>
      <QRCode
            value={walletAddress}
            size={230}
            color="black"
            backgroundColor="white"
          />
      </View>
      <View style={styles.address}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>지갑 주소</Text>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 17}}>TNDcxm95uDiensNHpfHfn7q5kt2x1vtMfD</Text>
          <View style={{alignItems: 'center', marginTop: 30,}}>

          <TouchableOpacity onPress={() => copyToClipboard(walletAddress)} style={styles.copyButton}>
          <Ionicons name="copy-outline" size={50} color="black" />
        </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  </View>
</Modal>




      <View style={styles.headContainer}>
        <View style={styles.balance}>

          <View style={styles.balanceTop}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Image
                source={require('../src/img/camell_logo.png')}
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
    </TouchableWithoutFeedback>

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
    marginRight: 30
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
  marginRight: 30,
  borderRadius: 15,
  padding: 6,
},
PlusMinusValue: {
  fontSize: 12,
  color: 'white'
},



  buttonRow: {
    flex: 0.8,
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


  



  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    bottom: -15,
    width: '100%',
    height: '65%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 6,
    elevation: 2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  },

  inputView:{
    flex: 1,
    width: '100%',
  },
  textInput: {
    paddingLeft: 10,
    borderWidth: 0.2,
    marginBottom: 20,
    borderRadius: 10,
    height: 45,
    marginTop: 5,
  },

  inpitForm: {
    marginTop: 30,
  },
  network: {
    marginTop: 10,
  },
  networkText: {
    fontSize: 20,
  },
  networkValue: {
    marginTop:5,
    backgroundColor: '#f3f1f1',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  networkValueText: {
    fontSize: 22,
  },

  buttonContainer: {
    backgroundColor: '',
    marginTop: 100,
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
  },
  okButton: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.2,
    width: '60%',
  },
  okButtontext: {
    fontSize: 20,
  },
  won: {
  },
  wonValue: {
    top: -15,
    fontSize: 12,
    opacity: 0.5,
  },

  qr: {
    marginTop: 20,
    marginBottom: 40,
  },

  address: {
    
  },
  addressText:{
    fontSize: 20,
    textAlign: 'center',
  },

  copyButton: {
    borderWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
