import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import AppContacts from "./src/pages/AppContacts";

import {Ionicons} from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1BB57D',
      }}
    >
      <Tab.Screen 
        name='AppContacts'
        component={AppContacts} 
        options={{ 
          tabBarIcon: ({color,size,focused}) => {
            if(focused){
              return <Ionicons 
                name="home"
                size={size}
                color={color}
              />
            }

            return <Ionicons 
              name="home-outline" 
              size={size}
              color={color}
            />
          }
        }}
      />
      <Tab.Screen 
        name='Contacts'
        component={Contacts}
        options={{ 
          tabBarIcon: ({color,size,focused}) => {
            if(focused){
              return <Ionicons 
                name="person"
                size={size}
                color={color}
              />
            }

            return <Ionicons 
              name="person-outline" 
              size={size}
              color={color}
            />
          }
        }}
        />
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='AppContacts' 
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Information' component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

