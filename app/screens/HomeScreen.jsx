import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/color';
import SubTabScreenHeader from '../main/SubTabScreenHeader';

export default function HomeScreen({ navigation }) {

    const usedStorage = 10; // 10GB 사용됨
    const totalStorage = 30; // 총 30GB
  
    const percentage = Math.round((usedStorage / totalStorage) * 100);

  return (
      <View style={styles.container}>
        <SubTabScreenHeader title="홈" navigation={navigation} />
        <View style={styles.mainContainer}>

            <View style={styles.topContainer}>
                <View style={styles.storageCard}>
                <View style={[styles.gauge, {justifyContent: 'center', alignItems: 'center'}]}>
              {/* 게이지 안에 백분율을 표시합니다 */}
              <Text style={styles.percentageText}>{percentage}%</Text>
            </View>

                    <View style={styles.storageTextContainer}>
                        <Text style={styles.storageTitle}>
                            저장 공간
                        </Text>

                        <Text style={styles.storageText}>
                            10 GB of 30 GB used
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.midContainer}>

            </View>

            <View style={styles.bottomContainer}>

            </View>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  mainContainer: {

    flex: 1,
  },

  topContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storageCard: {
    borderWidth: 0.2,
    borderRadius: 40,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gauge: {
    backgroundColor: Colors.primary,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  storageTextContainer: {
    margin: 30,
    marginLeft: 5,
    justifyContent: 'space-between'
  },
  storageTitle: {
    fontSize: 30,
    marginBottom: 10,
  },
  storageText: {
    fontSize: 14,
  },


  midContainer: {
    flex: 1,
    backgroundColor: 'red',
  },    
  bottomContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  }


});