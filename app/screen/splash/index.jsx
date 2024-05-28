import { StyleSheet,View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect} from 'react';

export default function SplashScreen({navigation}){
  useEffect(()=>{
    setTimeout(()=>{
    navigation.replace('Login')}, 5000);
    },
    [navigation]
)

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.LinearGradient}>
            <View style={styles.textContainer}>
        <Text style={styles.textSplash}>Facebook</Text>
        </View>
        </LinearGradient>
    );
}

/*return (
    <View 
    style={{ flex:1, alignItems: 'center', justifyContent: ' center'}}>
    <Text>Splash Screen</Text>
    </View>
);
}*/

const styles= StyleSheet.create({
    LinearGradient :{
        flex:1
    },
    textContainer:{
        flex:1,
        textAlign : 'center',
        alignItems:'center'
    },
    textSplash:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign : 'center'
    }
})