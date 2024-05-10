import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/color';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SubTabScreenHeader from '../src/SubTabScreenHeader';

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
                <View style={styles.gauge}>
              {/* 게이지 바로 진행 상태를 표시합니다 */}
              <AnimatedCircularProgress
                size={100}
                width={10}
                fill={percentage}
                tintColor={Colors.primary}
                backgroundColor="#3d5875">
                {
                  (fill) => (
                    <Text style={styles.percentageText}>
                      {Math.round(fill)}%
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
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
    backgroundColor: blue,
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
