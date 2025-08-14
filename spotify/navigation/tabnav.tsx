import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../application/acceuille';
import Recherche from '../application/recherche';
import { View, Text, StyleSheet } from 'react-native';
import Bibliothèque from '../application/bibliotheque';

const Tab = createBottomTabNavigator();

// Fond dégradé pour la barre
function GradientTabBarBackground() {
  return (
    <LinearGradient
      colors={['transparent', '#121212']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={StyleSheet.absoluteFill}
    />
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => <GradientTabBarBackground />,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
          height: 70,
          position: 'absolute',
          padding:100
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarIcon: ({ color, focused }) => {
          let iconName = '';
          let label = '';

          if (route.name === 'Home') {
            iconName = 'home';
            label = 'Accueil';
          } else if (route.name === 'Recherche') {
            iconName = 'search';
            label = 'Recherche';
          }else if (route.name === 'Bibliothèque') {
           iconName = 'book';
            label = 'Bibliothèque';
          }
          return (
            <View style={{ alignItems: 'center', bottom:20 }}>
              <Icon name={iconName} size={24} color={color} style={{marginLeft:-30}}/>
              <Text style={{ fontSize: 10,fontWeight:'bold', marginLeft:-29 }}>
                {label}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recherche" component={Recherche} />
      <Tab.Screen name="Bibliothèque" component={Bibliothèque} />
    </Tab.Navigator>
  );
}

