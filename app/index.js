// 아이콘 임포트
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// ㅡㅡㅡㅡㅡ
import { Button, StyleSheet, Text, View } from "react-native";

import {Dimensions} from 'react-native';
const fullWidth = Dimensions.get('window').width



export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Entypo style={styles.menuButton} name="menu" size={40} color="black" />

        <Text style={styles.menuLocation}>파일</Text>

        <AntDesign style={styles.searchButton} name="search1" size={30} color="black" />
      </View>

      <View style={styles.filePage}>

      </View>

      <View style={styles.footer}>
        <Text style={styles.fileButton}>파일</Text>

        <AntDesign style={styles.plusButton} name="pluscircle" size={70} color="black" />

        <Text style={styles.mediaButton} >미디어</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  // 앱바 
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: fullWidth,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  menuButton: {
    flex: .1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  menuLocation: {
    fontSize: 30,
    justifyContent: "center",
  },
  searchButton: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
  },

  // 앱바 끝 ㅡㅡㅡㅡㅡ


  // 파일 페이지 ㅡㅡㅡㅡㅡ
  filePage: {
    flex: 9,
    width: fullWidth,
  },
  // 파일 페이지 끝 ㅡㅡㅡㅡㅡ
  footer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    width: fullWidth,
    justifyContent: "space-between",
    borderTopColor: "black",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  fileButton: {
    flex: 1,
    alignItems: "center",
    fontSize: 20,
  },
  plusButton: {
  },
  mediaButton: {
    flex: 1,
    fontSize: 20,
  },
  
  
});
