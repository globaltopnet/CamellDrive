import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/color';
import SubTabScreenHeader from '../main/SubTabScreenHeader';
import Svg, { Circle } from 'react-native-svg';

export default function HomeScreen({ navigation }) {
    const usedStorage = 10; // 10GB used
    const totalStorage = 30; // Total 30GB

    const percentage = Math.round((usedStorage / totalStorage) * 100);

    return (
        <View style={styles.container}>
            <SubTabScreenHeader title="홈" navigation={navigation} />
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                <View style={styles.storageCard}>
                        <Svg height="200" width="200" viewBox="0 0 200 200">
                            <Circle
                                cx="100"
                                cy="100"
                                r={radius}
                                fill="none"
                                stroke="#e6e6e6"
                                strokeWidth={strokeWidth}
                            />
                            <Circle
                                cx="100"
                                cy="100"
                                r={radius}
                                fill="none"
                                stroke={Colors.primary}
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                transform="rotate(-90 100 100)"
                            />
                        </Svg>
                        <View style={styles.storageTextContainer}>
                            <Text style={styles.storageTitle}>저장 공간</Text>
                            <Text style={styles.storageText}>{usedStorage} GB of {totalStorage} GB used</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.midContainer}>
                    {/* Mid section content */}
                </View>

                <View style={styles.bottomContainer}>
                    {/* Bottom section content */}
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
        marginHorizontal: 20,
    },
    storageTextContainer: {
        margin: 30,
        marginLeft: 5,
        justifyContent: 'space-between',
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
    },
    percentageText: {
        fontSize: 20,
        color: 'white',
    },
});
