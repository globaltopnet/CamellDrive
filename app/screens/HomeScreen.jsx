import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/color';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    const usedStorage = 10; // 10GB 사용됨
    const totalStorage = 30; // 총 30GB

    const percentage = Math.round((usedStorage / totalStorage) * 100);
    const radius = 80; // 게이지의 반지름
    const strokeWidth = 20; // 게이지 선의 두께
    const circumference = 2 * Math.PI * radius; // 원의 둘레
    const strokeDashoffset = circumference - (percentage / 100) * circumference; // 게이지 진행 상태

    const handleSubmit = () => {
        alert('to be updated');
      };

    // 임의의 최근 항목 데이터
    const recentItems = [
        { id: 1, type: 'folder', name: 'Documents', date: '2024-05-07' },
        { id: 2, type: 'file', name: 'Project Plan.pdf', date: '2024-05-05' },
        { id: 3, type: 'file', name: 'Test.docx', date: '2024-04-30' },
        { id: 4, type: 'folder', name: 'Image', date: '2024-05-04' },
    ];

    return (
        <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.storageCard}>
                        <Svg height="200%" width="200" viewBox="0 0 200 200" style={styles.gauge}>
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
                                stroke={Colors.themcolor}
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                transform="rotate(-90 100 100)"
                            />
                            <SvgText
                                x="88"
                                y="104" // y값을 약간 조정하여 텍스트를 정중앙으로 배치
                                fill="black"
                                fontSize="33.5"
                                fontWeight="bold"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                            >
                                {percentage}%
                            </SvgText>
                        </Svg>
                        <View style={styles.storageTextContainer}>
                            <Text style={styles.storageTitle}>Storage</Text>
                            <Text style={styles.storageText}>{usedStorage} GB of {totalStorage} GB used</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.selectedCategoryButton}>
                            <Ionicons name="time" size={20} color="white" />
                            <Text style={styles.selectedButtonText}>Recent Items</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryButton}>
                            <Ionicons name="star" size={17.5} color="#636363" />
                            <Text style={styles.buttonText}>Favorite</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryButton}>
                          <MaterialCommunityIcons name="share" color='#636363' size={21} />
                            <Text style={styles.buttonText}>Share</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{alignItems: 'flex-end'}}>
                      <TouchableOpacity style={styles.viewAll} onPress={() => navigation.navigate('File')}>
                        <Text style={{color: 'blue', fontSize:12, textAlign: 'center'}}>View All</Text>
                      </TouchableOpacity>
                    </View>

                  

                    <View style={styles.itemContainer}>
                        {recentItems.slice(0, 4).map((item, index) => (
                            <View key={item.id} style={[styles.item, (index === 0 && recentItems.length === 1) ? styles.firstSingleItem : {}]}>
                                <Ionicons name={item.type === 'folder' ? 'folder' : 'document-text'} size={60} color={Colors.themcolor} />
                                  <MaterialCommunityIcons name="dots-vertical" color='#636363' size={21} style={{position:'absolute', left: 115, top: 15,}} />

                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDate}>{item.date}</Text>
                            </View>
                        ))}
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
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 10,
        alignItems: 'center',
    },
    storageCard: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center', // 좌우 중앙 정렬
    },
    gauge: {
      marginRight: -20,
    },
    storageTextContainer: {
        marginLeft: 28,
        justifyContent: 'space-between',
    },
    storageTitle: {
        fontSize: 35,
        marginBottom: 30,
    },
    storageText: {
        fontSize: 18,
        color: 'gray'
    },


    bottomContainer: {
        marginTop: 30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#f8e7ef',
        height: '100%',
        flex: 2.5,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    categoryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 13,
    },
    selectedCategoryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.themcolor,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 13,
    },
    
    buttonText: {
      color: 'black',
      fontSize: 15,
      marginLeft: 5,
    },
    selectedButtonText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    item: {
        width: '40%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    firstSingleItem: {
        marginLeft: '10%',
    },
    itemName: {
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
    },
    itemDate: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    },

    viewAll: {
      paddingVertical: 15,
      paddingRight: 15,
      width: '20%',
      alignItems: 'flex-end'
    },
});