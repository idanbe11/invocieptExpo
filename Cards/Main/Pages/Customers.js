import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput, ScrollView,onPress} from 'react-native';
import React, { useState } from "react";
import { Table, TableWrapper, Cell, Row, Rows, Col, Cols } from 'react-native-table-component';

import customers from './Icons/customers.png';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['כתובת', 'פלאפון', 'שם'],
          widthArr: [120, 120, 120]
        }
      }
      render(){ 
        const state = this.state;
        const tableData = [];
        for (let i = 0; i < 6; i += 1) {
          const rowData = ["משה שמיר 3","0535311471","אלדר"];
          for (let j = 0; j < 6; j += 1) {
            rowData.push(`${i}${j}`);
          }
          tableData.push(rowData);
        }
    

    return (
      <SafeAreaView style={styles.body}>
       <Image source={customers} style={styles.CustomersBackground} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.mainTitle}>לקוחות שלי</Text>
                </View>

                <TouchableOpacity onPress={onPress}>
                    <View style={styles.filteringButton}>
                        <Text style={styles.filteringButtonText}>סינון</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.addCustomersButton}>
                        <Text style={styles.addCustomersButtonText}>הוסף לקוח</Text>
                    </View>
                </TouchableOpacity>

        <View style={styles.container1}>
        <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {borderTopWidth: 8,borderColor: 'white',}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
            </View>    
        </SafeAreaView>
    );
}}
export default (Customers);
  const styles = StyleSheet.create({
    CustomersBackground:{
      width:'100%',
      height:360,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    container: {
        width:'100%',
        height:'100%',
        borderRadius:32,
        backgroundColor: "#e9f0f7",
    },
    subContainer: {
        width:'88%',
        height:70,
        top:10,
        left:25,
        borderRadius:22,
        backgroundColor: "#7471F2",
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    mainTitle: {
        fontSize:30,
        textAlign:'center',
        color:'white',
        marginTop:10,
        fontWeight:'700',
    },

    container1: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 80, 
    },
  header: { 
    height: 50, 
    backgroundColor: '#e9f0f7' ,
},
  text: { 
    textAlign: 'center', 
    fontWeight: '700' ,
    color:'black',
    fontSize:17,
},
  dataWrapper: { 
    marginTop: -1 ,
},
  row: { 
    height: 40, 
    borderTopWidth: 8,
    borderColor: 'white',
},
  filteringButton:{
    width:40,
    height:40, 
    top:40,
    position:'absolute',
    marginLeft:52,
},
filteringButtonText:{
    color:'black',
    fontSize:18,
    fontWeight:'700',
},
addCustomersButton:{
    top:40,
    position:'absolute',
    width:140,
    height:40, 
    marginLeft:232,
    borderRadius:22,
    backgroundColor: "#7471F2",
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
},
addCustomersButtonText:{
    textAlign:'center',
    color:'white',
    fontSize:18,
    fontWeight:'700',
    top:5,
},  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  });