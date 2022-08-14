import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';


export default function LoadingPage() {
const handlePress= () => console.log("text pressed");
  return (
    <SafeAreaView style={styles.body}>
            <View style={styles.container}>
              <Text style={styles.innerText}>Invociept <Text style={styles.Dot}>.</Text></Text>
            </View>
    </SafeAreaView>
  );
}


function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('.body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.disable', true);
  setVisible('.body', false);
});


const styles = StyleSheet.create({
  body: {
    width: 390,
    height: 844,
    backgroundColor: '#F8F8FF',

  },
  container: {
    backgroundColor:'#7471F2',
    width: '100%',
    height: '100%',
    
  },
  innerText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontSize: 60,
    marginTop: 290,
    fontWeight: 'bold',
  },
  Dot: {
    textAlign:'center',
    color: '#00FA9A',
    fontSize: 90,
    marginTop: 290,
    fontWeight: 'bold',
  },
});
