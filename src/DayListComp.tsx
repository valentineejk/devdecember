import { Text, View, StyleSheet } from "react-native";

type days = {
    day: number
}


export default function DayListComp(props:days) {
    return(
        <View style={styles.box}> 
        <Text style={styles.txt}>{props.day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    box:{
      backgroundColor: '#521a75',
      // height: 150,
      // width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flex:1,
      aspectRatio: 1,
    },
    txt:{
      color: "white",
      fontSize: 50,
      fontWeight: 'bold',
    }
  });