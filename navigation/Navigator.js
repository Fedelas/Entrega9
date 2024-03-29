import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import COLORS from '../constants/colors'
import StartScreen from '../screens/startScreen'
import GameScreen from '../screens/gameScreen'


const Stack =createNativeStackNavigator();


const Navigator = () => {
    return (
      
        
        <Stack.Navigator 
        initialRouteName="Home Nav"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
          <Stack.Screen name="Home Nav" component={StartScreen} 
          options={{
            title: "SEMORDNILAP",
          }}
          
          />
          <Stack.Screen name="GameScreen" component={GameScreen} 
          options={{
            title: "",
          }}
          />
        </Stack.Navigator>
 

      
       
      )
    
    }



export default Navigator;