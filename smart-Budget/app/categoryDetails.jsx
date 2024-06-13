import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useState ,useEffect} from 'react'
import { useLocalSearchParam, useRouter, Link } from 'expo-router';
import Colors from '../utils/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../utils/SupabaseConfig';
import CourseInfo from '../components/CourseDetails/CourseInfo';
import CourseItemList from '../components/CourseDetails/CourseItemList';

export default function CategoryDetails() {
    const {categoryId}=useLocalSearchParams();
    const [categoryData,setCategoryData]=useState([]);
    const router=useRouter();
     useEffect(()=>{
      console.log(categoryId)
      categoryId&&getCategoryDetail();
    },[categoryId]);

    const getCategoryDetail=async()=>{
        const {data,error}=await supabase.from('Category')
        .select('*,CategoryItems(*)')
        .eq('id',categoryId)
        setCategoryData(data[0]);
      
    }
  return (
    <View style={{padding:20, marginTop:20, flex:1}}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>router.replace('/(tabs)')}>
            <MaterialIcons name="arrow-back-ios" size={30} color="black" />
            </TouchableOpacity>
            <CourseInfo categoryData={categoryData} />
            
            <CourseItemList categoryData={categoryData}
                setUpdateRecord={()=>getCategoryDetail()}
            
            />
        </ScrollView>

        <Link 
        href={{
            pathname:'/addItems',
            params:{
                categoryId:categoryData.id
              }
        }}
        
        style={styles.floatingBtn}
        
        >
        <MaterialIcons name="add-box" size={60} color={Colors.BLUE} />
        </Link>
  
    </View>

    
  )
}

const styles = StyleSheet.create({
    floatingBtn:{
        position:'absolute',
        bottom:16,
        right:16
    }
})