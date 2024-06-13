import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router'
import Colors from '../../utils/Colors';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:Colors.BLUE,
      headerShown:false
    }}
    >
        <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <FontAwesome5 name="history" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}