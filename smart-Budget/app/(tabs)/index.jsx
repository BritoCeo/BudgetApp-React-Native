import React, { useEffect, useState} from 'react';
import { View, StyleSheet, Text, Button,TouchableOpacity, ScrollView , RefreshControl} from 'react-native';
import { Link, useRouter } from 'expo-router'; // Assuming you're using a routing library like react-navigation
import services from '../../utils/services';
import { client } from '../../utils/KindeConfig';
import { supabase } from '../../utils/SupabaseConfig';
import Header from '../../components/Header';
import Colors from '../../utils/Colors';
import MyPieChart from '../../components/MyPieChart';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryList from '../../components/CategoryList';


export default function Home() {

    const router=useRouter();
    const [categoryList,setCategoryList]=useState();
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        checkUserAuth();
        getCategoryList();
    },[])
    // Check if user is already authenticated or not
    const checkUserAuth=async()=>{
        const result=await services.getData('login');
        if(result!=='true')
        {
            router.replace('/login')
        }
    }


    const handleLogout = async () => {
        const loggedOut = await client.logout();
        if (loggedOut) {
          await services.storeData('login','false');
          router.replace('/login');
            // User was logged out
        }
    };


    const getCategoryList=async()=>{
        setLoading(true)
        const user=await client.getUserDetails();
        const {data,error}=await supabase.from('Category')
        .select('*,CategoryItems(*)')
        .eq('created_by',user.email)
        .order(['id'],{ascending:false})
        ;
    
        console.log("Data",data) 
        setCategoryList(data);
        data&&setLoading(false)
    }
    /*const getCategoryList=async()=>{
        const {user}=await client.getUserDetails();
        const {data, error}=await supabase.from('Categories')
        .select('*,CategoryItems(*)')
        .eq('created_by',user.email);

        console.log("Data",data)
        setCategoryList(data);
    }
*/
    return (
        <View style={{
            marginTop: 20,
            flex:1
        }}>
        <ScrollView
         refreshControl={
            <RefreshControl
              onRefresh={()=>getCategoryList()}
              refreshing={loading}
            />
         }   
        >
            <View style={{
                padding: 20, 
                backgroundColor:Colors.BLUE,
                height: 150,
                marginTop:20,
                borderRadius:10
            }}>
                <Header/>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
                <View style={{
                        padding:20,
                        marginTop:-90
                    }}
                >
                    
                    <MyPieChart categoryList={categoryList}/>
                    <CategoryList categoryList={categoryList} />     
                </View>
                
        </ScrollView>
        <Link href={'/addCategory'} style={styles.btnContainer}>
         <MaterialIcons name="add-box" size={64} color={Colors.BLUE} />
        </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        marginTop: 50,
        fontSize:20
    },
    btnContainer:{
        position:'absolute',
        bottom:17,
        right:17,
        borderRadius:99
    },
    logoutButton: {
        position: 'absolute',
        top: 25,
        right: 50,
        backgroundColor: Colors.DARK_BLUE,
        padding: 10,
        borderRadius: 5
    },
    logoutButtonText: {
        color: Colors.WHITE,
        fontSize: 16
    }
})