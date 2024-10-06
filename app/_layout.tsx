import { Stack } from "expo-router";
import React from "react";


export default function RootLayout(){
    return(
        <Stack>
            {/* <Stack.Screen name="(tabs)" options={{headerShown:false}}/> */}
            <Stack.Screen name="onboarding" options={{
                headerShown:false,
                presentation:'modal'
            }}/>
             <Stack.Screen name="(tabs)" options={{
                headerShown:false,
                animation:'fade'
                }}/>
        </Stack>
    )
}