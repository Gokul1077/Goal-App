import { StyleSheet,View,TextInput,Button,Modal,Image } from "react-native";
import { useState } from 'react';

function InputComp(props){
    const[goalText,setgoalText]=useState("")
    
    function goalInputHandler(inputgoal){
        setgoalText(inputgoal)
      }
    
      function SendaddGoalHandler(){
        props.onAddGoal(goalText)
        props.closeModalVisible()
      }
return(
   <Modal visible={props.startModalvisible} animationType="fade"> 
     
     <View style={styles.inputContainer}>
        <Image style={styles.imageContainer}source={require('./assets/Images/images.jpg')}/> 
            <TextInput 
            onChangeText={goalInputHandler}
            style={styles.textInput} placeholder='Type Your Goals'placeholderTextColor="black"  ></TextInput>
            <View style={styles.buttonContainer}>
              <View style={styles.innerbtnContainer}>
                <Button color="#5e0acc"
                onPress={SendaddGoalHandler}
                title='Add Goal'></Button>
              </View>
              <View style={styles.innerbtnContainer}><Button color="#f31282" onPress={props.closeModalVisible} title="Cancel"/></View>
            </View>
    </View>
   </Modal>
)
}


const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // borderBottomWidth:1,
        // borderBottomColor:'red',
        padding:16,
        paddingBottom:24,
        flex:1,
        backgroundColor:'#1A0037',
      },
      
  textInput:{
    borderWidth:1,
    borderColor:'skyblue',
    width:'100%',
    // marginRight:8,
    padding:8,
    borderRadius:8,
    backgroundColor:'#e4d0ff'
  },
  buttonContainer:{
    flexDirection:'row',
   marginTop:16
  },
  innerbtnContainer:{
    width:100,
    marginHorizontal:8,
    
  },
  imageContainer:{
    borderRadius:8,
    marginBottom:7,
    width:'100%',
    opacity:0.7,
  }
})

module.exports=InputComp;
