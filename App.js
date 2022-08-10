import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert} from 'react-native';


// Cards componets
      // Loading
import LoadingPage from './Cards/Loading/loadingPage';

      // Login


export default function App() {
const handlePress= () => console.log("text pressed");
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
   
  },
});6 
