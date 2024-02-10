import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import OutputComp from './Output';
import InputComp from './Input';
export default function App() {
  //to capture the state of the Input
  
  const[Goals,setGoals]=useState([])

  const[ismodalVisible,setismodalVisible]=useState(false)
 
  function addGoalHandler(goalText){
    // console.log(goalText);
    setGoals((prevGoals)=>[...prevGoals,goalText]);
    console.log(Goals);
  }
  function deleteGoals(index){

    const newgoals=Goals.filter((elements,position)=>{position=index})
    setGoals(newgoals)
  }
  function clearAllGoals(){
    setGoals([])
  }
  function startAddGoalPage(){
    setismodalVisible(true) 
  }
  function closeAddGoalPage(){
    setismodalVisible(false) 
  }
  return (
    <>
    <StatusBar style='dark'/>
    <View style={styles.appcontainer}>
          <View style={styles.buttonContainer}>
            <Button title='Add new Goal' onPress={startAddGoalPage} color="#5e0acc"/>
            <Button title='Clear All' onPress={clearAllGoals} color="#5e0acc"/>
          </View>
          <InputComp closeModalVisible={closeAddGoalPage} startModalvisible={ismodalVisible}  onAddGoal={addGoalHandler}/>
          <View style={styles.viewContainer}>
            <Text style={styles.displayName}>List Of Goals</Text>
            <FlatList
                data={Goals}
                renderItem={(itemData)=>{
                  return <OutputComp text={itemData.item} ondelete={()=>{deleteGoals(itemData.index)}}/>
                }}
            />
              
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
   paddingTop:50,
   paddingHorizontal:16,
  //  borderWidth:1,
   flex:1,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    
    
   marginTop:16
  },
 
  viewContainer:{
    flex:4,
    marginTop:16,
    borderWidth:1,
    borderRadius:8,
    borderColor:'#5e0acc',
  },
  
  displayName:{
    fontSize:25,
    fontWeight: 'bold',
    color:'red',
    textAlign:'center',
    borderBottomWidth:3

    
  },
});
