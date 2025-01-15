import React from 'react';
import DeliveryScreen from '@features/delivery/DeliveryScreen';
import DinningScreen from '@features/dinning/DinningScreen';
import Live from '@features/live/Live';
import Reorder from '@features/reorder/Reorder';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const UserBottomTab:React.FC = ()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true}}>
            <Tab.Screen name= "Delivery" component={DeliveryScreen}/>
            <Tab.Screen name= "Reorder" component={Reorder}/>
            <Tab.Screen name= "Dining" component={DinningScreen}/>
            <Tab.Screen name= "Live" component={Live}/>
        </Tab.Navigator>
    );
};

export default UserBottomTab;
