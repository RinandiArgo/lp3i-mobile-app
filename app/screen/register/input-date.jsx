import { View, Text, StyleSheet, ScrollView, Alert} from "react-native";
import { 
    CustomeInput,
    FbButton
} from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {setDate} from '../../store/reducer/regitserReducer'

export default function RegisterInputDateScreen({navigation}){
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput=()=>{
        try{
            if( register.setDate === null || register.setDate === ""){
                throw Error('Harap masukkan tanggal lahir')
            }
        navigation.navigate('RegisterGender')
    }catch (err){
        Alert.alert('Error', err.message,[
            {text: 'OK', onPress: () =>{
                console.log('ERR')
            }},
        ]);
    }
}
    return(
        <ScrollView style={styles.container}>
        <Text style={styles.textHeader}>What's your date of birth?</Text>
        <Text>Choose your date of birth. You can always make this private later. Why do i need to provide my date of birth</Text>
        
        <View style={styles.containerInput}>
                <CustomeInput value={register.setDate} onChangeText={(value)=> dispatch (setDate (value))}
                    label="Date of birth"/>
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
        fontSize:24
    }
})