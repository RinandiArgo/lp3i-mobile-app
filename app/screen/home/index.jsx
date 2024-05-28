import { View, Text, Button} from 'react-native';

export default function HomeScreen(){
    return(
        <View
        style={{ flex: 1, alignIems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => NavigationPreloadManager.navigate('Details')}/>
        </View> 
    );
}