// DrawerContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawerContent = () => {
    return (
        <View style={styles.container}>
            <Text>메뉴 1</Text>
            <Text>메뉴 2</Text>
            <Text>메뉴 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    }
});

export default DrawerContent;