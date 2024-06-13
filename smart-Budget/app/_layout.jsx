import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import {Stack} from 'expo-router';
import Colors from '../utils/Colors';


export default function HomeLayout() {

  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./../assets/fonts/Poppins-SemiBold.ttf')
    

  });


  return (
    <Stack
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="(tabs)" 
      options={{ 
        headerShown: false 
      }}/>
    <Stack.Screen name= 'addCategory'
      options={{
        presentation:'modal',
        headerShown:true,
        headerTitle:'Add a Budget Category'
      }}
    />
    <Stack.Screen
      name='addItems'
      options={{
        presentation:'modal',
        headerShown:true,
        headerTitle:'Add Budget Item',
        headerStyle:{backgroundColor:Colors.BLUE}
      }}
    />
    </Stack>
  )
}