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

//Pages
import Affiliate from './Cards/Main/Pages/Affiliate';
import Settings from './Cards/Main/Pages/Settings';
import ClearingPage from './Cards/Main/Pages/ClearingPage';
import Expense from './Cards/Main/Pages/Expense';


 function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>   
{/* Loading/Startig*/}    
    <Stack.Screen name="gettingStart" component={gettingStart}/>
{/* LoginPage*/}        
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="LoginSMS" component={LoginSMS}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
{/*Register*/}        

      <Stack.Screen name="ChooseAccount" component={ChooseAccount}/>
        <Stack.Screen name="ChooseBusiness" component={ChooseBusiness}/>
          <Stack.Screen name="Planes" component={Planes}/>
            <Stack.Screen name="RegisterAsEmail" component={RegisterAsEmail}/>
              <Stack.Screen name="VerifyRegisterinfo" component={VerifyRegisterinfo}/>
{/*HomePage*/}        
      <Stack.Screen name="HomePage" component={HomePage}/>
{/* Pages*/}        
          <Stack.Screen name="Affiliate" component={Affiliate}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="ClearingPage" component={ClearingPage}/>
          <Stack.Screen name="Expense" component={Expense}/>

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
