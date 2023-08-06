import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homescreen} />
        <Tab.Screen name="Settings" component={graphscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;