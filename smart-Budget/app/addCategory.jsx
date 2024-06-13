import { View, Text , StyleSheet, TextInput ,Keyboard, KeyboardAvoidingView , Platform, TouchableOpacity, ToastAndroid, Alert,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import Colors from './../utils/Colors'
import ColorPicker from '../components/ColorPicker'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {supabase} from './../utils/SupabaseConfig'
import {client} from './../utils/KindeConfig'
import { useRouter } from 'expo-router';


export default function AddCategory() {
  const [selectedIcon, setSelectedIcon]=useState('{-}')
  const [selectedColor, setSelectedColor]=useState(Colors.BLUE)
  const [categoryName, setCategoryName]=useState();
  const [totalBudget, setTotalBudget]=useState();
  const [loading,setLoading]=useState(false);

  const router=useRouter();
  const onCreateCategory=async()=>{
    setLoading(true)
    const user=await client.getUserDetails();
      const {data,error}=await supabase.from ('Category')
      .insert([{
          name:categoryName,
          assigned_budget:totalBudget,
          icon:selectedIcon,
          color:selectedColor,
          created_by:user.email
      }]).select();
      console.log(data);
      if (data) {
        router.replace({
          pathname:'/categoryDetails',
          params:{
            categoryId:data[0].id
          }
        })
        if (Platform.OS === 'ios') {
          Alert.alert('Notification', 'Category Created!');
        } else {
          ToastAndroid.show('Category Created!', ToastAndroid.SHORT);
        }
        setLoading(false)
      } else {
        if (error) {
          if (Platform.OS === 'ios') {
            Alert.alert('Error', 'Failed to create category');
          } else {
            ToastAndroid.show('Failed to create category', ToastAndroid.SHORT);
          }
        }
      }
      if(error)
        {
          setLoading(false)
        }
  } 
  
  return (
    <View style={{marginTop:20,padding:20}}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       
        <TextInput
          style={[styles.inconInput, {backgroundColor:selectedColor}]}
          maxLength={20}
          onChangeText={(value)=>setSelectedIcon(value)}
        >{selectedIcon} </TextInput>
        
        <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={(color)=>setSelectedColor(color)}
        />
      </View>
      {/* Add Category Name and Total Budget Section */}
      
      <View style={styles.inputView}>
      <Entypo name="price-tag" size={24} color="black" />
      <TextInput placeholder='Category Name' 
      onChangeText={(String)=>setCategoryName(String)}
      style={{width:'100%', fontSize:17, color: Colors.BLACK
      }}/>
      </View>

      <View style={styles.inputView}>
      <FontAwesome5 name="money-bill-wave" size={24} color="black" />
      <TextInput placeholder='Total Budget' 
          keyboardType='numeric'
          onChangeText={(v)=>setTotalBudget (v) }
      style={{width:'100%', fontSize:17, color: Colors.BLACK
      }}/>
      </View>
        <TouchableOpacity style={styles.button}
          disabled={!categoryName||!totalBudget||loading}
          onPress={()=>onCreateCategory()}
          
        >
          {loading?
          <ActivityIndicator color={Colors.WHITE}/>

          :
            <Text style={{textAlign: 'center', 
            fontSize: 20, 
            color: Colors.WHITE}}>Create</Text>}
        </TouchableOpacity>
        
    </View>
  ) 
}

const styles = StyleSheet.create({
    inconInput:{
      textAlign: 'center',
      fontSize:30,
      padding:25,
      borderRadius:99,
      paddingHorizontal: 28,
      color: Colors.WHITE
    },
    inputView:{
      borderWidth:1,
      display:'flex', 
      flexDirection: 'row', 
      gap:5, 
      padding:14, 
      borderRadius:10, 
      borderColor:Colors.GRAY,
      backgroundColor:Colors.WHITE,
      alignItems:'center',
      marginTop:20
    },
    button:{
      backgroundColor:Colors.BLUE, 
      padding: 15, 
      borderRadius: 10, 
      marginTop: 30
    }
})