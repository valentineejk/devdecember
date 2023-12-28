import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListComp from '@/components/DayListComp';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function HomeScreen() {



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


