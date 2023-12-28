
import { Stack } from "expo-router"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout(){

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        AmaticR: AmaticSC_400Regular,
        AmaticB: AmaticSC_700Bold,
    
      });
    
    
      useEffect(() => {
      
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
       }
      }, [fontsLoaded,fontError])
    
      
      if (!fontsLoaded && !fontError) {
        return null;
     }

    return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{
            title: 'Cave'
        }}
        />
</Stack>);
}