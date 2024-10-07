import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Stack, Tabs } from "expo-router";
import React from "react";
import { theme } from "@/theme";

// const hasFinishedOnboarding = false;
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href={"/onboarding"} />;
  }

  return (
    // <Stack>
    //     <Stack.Screen name="index" options={{title:"Home"}}/>
    // </Stack>
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight:()=>(
            <Link href={'/new'} asChild>
              <Pressable hitSlop={20} style={{marginRight:18}}>
               <AntDesign
                name="pluscircleo"
                size={24}
                color={theme.colorGreen}
               />

              </Pressable>
            </Link>
         )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen name="docs" options={{title:"Profile",tabBarShowLabel:false, tabBarIcon:({size,color})=>(<Entypo name="user" size={size} color={color} />)}}/> */}
    </Tabs>
  );
}
