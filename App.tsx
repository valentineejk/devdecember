import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListComp from './src/DayListComp';

export default function App() {

  const days = [...Array(31)].map((val, index) => index + 1)

  return (
    <View style={styles.container}>

    <FlatList
    contentContainerStyle={styles.content}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    columnWrapperStyle={styles.col}
    data={days}
    renderItem={({item}) => <DayListComp day={item} />}
    />


    
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 14
   
  },
  content:{
 gap: 10
  },
  col:{
    gap: 10
     }
});


