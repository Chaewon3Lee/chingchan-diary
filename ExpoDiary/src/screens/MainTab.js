// MainTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from '../components/SearchHeader';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import TodoScreen from './TodoScreen';
import MainScreen from './MainScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="main"
        component={MainScreen}
        options={{
          title: 'Intro',
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Diary"
        component={FeedsScreen}
        options={{
          title: 'Diary',
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Todo" // Add a new tab for TodoScreen
        component={TodoScreen}
        options={{
          title: 'Todo List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="check-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
