import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';


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

export default function App() {
  return (
    <View >
     {/*LoadingPage/> 
    
     <LoginSMS/>
     <LoginPage/>
     <ForgetPassword/> 
          <ChooseAccount/>
            <ChooseBusiness/>
            <RegisterAsEmail/>*/}
            <VerifyRegisterinfo/>
    </View>
     
  );
}
