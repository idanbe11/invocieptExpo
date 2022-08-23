import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Cards componets
      // Loading
import LoadingPage from './Cards/Loading/LoadingPage';
 
      // Login
import LoginPage from './Cards/Login/LoginPage';
import LoginSMS from './Cards/Login/LoginSMS';
import ForgetPassword from './Cards/Login/ForgetPassword';
import ChooseAccount from './Cards/Register/ChooseAccount';
import ChooseBusiness from './Cards/Register/ChooseBusiness';
import RegisterAsEmail from './Cards/Register/RegisterAsEmail';
import VerifyRegisterinfo from './Cards/Register/VerifyRegisterinfo';
import HomePage from './Cards/Main/HomePage';
import ClearingPage from './Cards/Main/ClearingPage';
import GettingStart from './Cards/Loading/gettingStart';


 function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="GettingStart" component={GettingStart}/>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="LoginSMS" component={LoginSMS}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>

      <Stack.Screen name="ChooseAccount" component={ChooseAccount}/>
        <Stack.Screen name="ChooseBusiness" component={ChooseBusiness}/>
          <Stack.Screen name="RegisterAsEmail" component={RegisterAsEmail}/>
            <Stack.Screen name="VerifyRegisterinfo" component={VerifyRegisterinfo}/>

      <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="ClearingPage" component={ClearingPage}/>

  </Stack.Navigator> 
     
  );
}
export default () => {
  return(
    <NavigationContainer>
      <GettingStart/>
    </NavigationContainer>
  )
}
