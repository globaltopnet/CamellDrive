import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, SectionList, StyleSheet, Image } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const ChartScreen = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ title: 'Camell Token' }} />
      <SectionList
        style={{paddingTop: headerHeight}}
        // scrollEnabled={true}
        keyExtractor={(i) => i.title}
        sections={[{ data: [{ title: 'Chart' }]}]}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginHorizontal: 25,
                marginTop: 60,
              }}>
              <Text style={styles.subtitle}>CAMT</Text>
              <Image source={require('@/assets/images/coin.png')} style={{ width: 70, height: 70 }} />
              </View>
          </>
        )}
        renderItem={({ item }) => 
        <>
        {/* TODO: CHART */}
          <View style={[defaultStyles.block, {marginTop: 20}]}>
            <Text style={styles.subtitle}>Overview</Text>
            <Text style={{ color: Colors.gray }}>
              글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한 글글글글글글글글글글글글 카멜코인에 대한
            </Text>
          </View>
        </>
      }>
      </SectionList>
    </>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.gray,
  }
})


export default ChartScreen