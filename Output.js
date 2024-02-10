import { StyleSheet,View,Text, Pressable} from "react-native";
function OutputComp(props){

    return (
        
        <View style={styles.goalItem}>
            <Pressable onPress={props.ondelete}
            // android_ripple={{color:'#dddddd'}}
            style={({pressed})=> pressed && styles.pressChangeEffect}
                ><Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
  
    )

}


const styles=StyleSheet.create({
    goalItem:{
        margin:7,
        borderRadius:6,
        backgroundColor:'#5e0acc'

        
      }, 
      goalText:{
        margin:8,
        padding:3,
        color:'white'
      },
      pressChangeEffect:{
        opacity:0.5
      }
})

module.exports=OutputComp;