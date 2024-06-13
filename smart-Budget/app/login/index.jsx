import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import moneyImage from './../../assets/images/money.jpeg';
import Colors from '../../utils/Colors';
import { client } from '../../utils/KindeConfig';
import services from '../../utils/services';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    
    const router=useRouter();
    const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
          // User was authenticated
          await services.storeData('login','true')
          router.replace('/')
        }
      };

 
    return (
    <View style={{
        display:'flex',
        alignItems:'center'
    }}>
      <Image
        source={moneyImage}
        style={styles.moneyImage}
      />
      <View style={{
        backgroundColor:Colors.STEEL_BLUE,
        height: '100%',
        width: '100%',
        padding:20,
        marginTop:-25,
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30
      }}
      >
            <Text
            style ={{
                fontSize: 35, 
                fontWeight: 'bold', 
                textAlign: 'center',
                color: Colors.WHITE
            }}
            >Smart Budget App</Text>

            <Text style ={{
                fontSize: 18,  
                textAlign: 'center',
                color: Colors.WHITE,
                marginTop:20
            }}
            >Stay on Track, Event by Event: Your Personal Budget Tacking App
            </Text>

            <TouchableOpacity style={styles.button}
            onPress={handleSignIn}>
                <Text style={{ textAlign: 'center',
                    color: Colors.DARK_GRAY , fontFamily:'Poppins-Bold'}}>Login / Sign Up</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12, 
            color: Colors.GRAY, marginTop:10}}> * By login/signup you will agree to our tearms and conditions </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  moneyImage: {
    width: 400,
    height: 400,
    marginTop: 45,
    borderWidth: 0,
    borderRadius: 20,
    borderColor: Colors.SKY_BLUE,
  },
  button:{
    backgroundColor: Colors.WHITE, 
    padding: 15,
    paddingHorizontal:5,
    borderRadius: 99,
    marginTop: 30
  }
});
