import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';


// Cards componets
      // Loading
import LoadingPage from './Cards/Loading/loadingPage';

      // Login
import LoginPage from './Cards/Login/LoginPage';

export default function App() {
  return (
    <View >
    {/* <LoadingPage/> */}
    <LoginPage/>
    </View>
     
  );
}
