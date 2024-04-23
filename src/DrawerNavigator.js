// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './navigation';  // 여기서 Tabs는 위에서 정의한 Tabs 컴포넌트를 가져옵니다.
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Tabs} />
            // 필요하다면 여기에 추가 스크린들을 등록할 수 있습니다.
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;