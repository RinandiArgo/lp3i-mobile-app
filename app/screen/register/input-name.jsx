import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, Alert
} from "react-native";  
import { 
    CustomeInput,
    FbButton
} from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {setFirstName, setSureName} from '../../store/reducer/regitserReducer'

const onNextInput = ()=>{
   try{
        if(typeof regitser.firstName === null || regitser.firstName === ""){
            throw Error('Harap masukkan nama awalan anda')
        }
        if(typeof regitser.sureName === null || regitser.sureName === ""){
            throw Error('Harap masukkan nama akhir anda')
        }
        navigation.navigate('RegisterDate')
    }catch (err){
        Alert.alert('Error', err.message,[
            {text: 'OK', onPress: () =>{
                console.log('ERR')
            }},
        ]);
    }
    }

export default function RegisterInputNameScreen(navigation){
const register = useSelector((state) => state.register.formInput)
const dispatch = useDispatch()
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textHeader}>What's your name?</Text>
            <Text>Enter the name you use in real life.</Text>

            <View style={styles.containerInput}>
                <CustomeInput value={register.firstName} onChangeText={(value)=> dispatch (setFirstName (value))}
                    label="First name"/>
                
                <CustomeInput value={register.sureName} onChangeText={(value)=> dispatch (setSureName (value))}
                    label="Surename"/>
            </View>

            <FbButton onPress={onNextInput} title="Next"/>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    
})