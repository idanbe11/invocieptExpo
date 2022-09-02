import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 // Start
import gettingStart from './Cards/Loading/GettingStart';

//Login
import LoginPage from './Cards/Login/LoginPage';
import LoginSMS from './Cards/Login/LoginSMS';
import ForgetPassword from './Cards/Login/ForgetPassword';

//Register
import ChooseAccount from './Cards/Register/ChooseAccount';
import ChooseBusiness from './Cards/Register/ChooseBusiness';
import Planes from './Cards/Register/Planes';
import RegisterAsEmail from './Cards/Register/RegisterAsEmail';
import VerifyRegisterinfo from './Cards/Register/VerifyRegisterinfo';

//HomePage
import HomePage from './Cards/Main/HomePage';
import ClearingPage from './Cards/Main/ClearingPage';
import DragDrop from './Cards/Main/DragDrop';
import Affiliate from './Cards/Main/Pages/Affiliate';


 function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="gettingStart" component={gettingStart}/>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="LoginSMS" component={LoginSMS}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>

      <Stack.Screen name="ChooseAccount" component={ChooseAccount}/>
        <Stack.Screen name="ChooseBusiness" component={ChooseBusiness}/>
          <Stack.Screen name="Planes" component={Planes}/>
            <Stack.Screen name="RegisterAsEmail" component={RegisterAsEmail}/>
              <Stack.Screen name="VerifyRegisterinfo" component={VerifyRegisterinfo}/>

      <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="ClearingPage" component={ClearingPage}/>
        <Stack.Screen name="DragDrop" component={DragDrop}/>
          <Stack.Screen name="Affiliate" component={Affiliate}/>

  </Stack.Navigator> 
     
  );
}
export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
