import { View, Text ,Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import { client } from '../utils/KindeConfig';
import Colors from '../utils/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    const [user, setUser]=useState();

    useEffect(()=>{
        getUserData();
    },[])
    const getUserData=async()=>{
        const user=await client.getUserDetails();
        setUser(user);
    }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: 'row',
        gap:8,
        alignItems:'center'
      }}    
    >
      <Image source={{uri:user?.picture}} 
      style={{
        width:50,
        height:50,
        borderRadius:99
      }}
      />
      <View
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '85%'
        }}
      >
        <View>
          <Text style={{color:Colors.WHITE, 
          fontSize:16,
          fontFamily:'Poppins'
          }}>Welcome</Text>
          <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:'Poppins-Bold'}}>
            {user?.given_name}</Text>
        </View>
        <MaterialIcons name="notifications-active" size={24} color={Colors.WHITE} />
      </View>
    </View>
  )
}