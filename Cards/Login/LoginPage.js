import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';



export default function LoginPage() {
  return (
    <SafeAreaView> 
        <TouchableWithoutFeedback>
            
        <Button title='hello' onPress={() => console.log('test')}  />
        
        
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


const css = {
backgroundColor:"#f2ff",
justifyContent: 'center',
alignItems:'center',



}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff2f',
      justifyContent: 'center',
      alignItems:'center',

    }
  });
  