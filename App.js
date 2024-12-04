import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

//screens
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from './screens/Home';
import Profile from './screens/Profile';
import Firstaid from './screens/Firstaid';
import Kit from './screens/Kit';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Kit} 
          options={{tabBarIcon:({color})=><FontAwesome name="home" size={24} color={color}/>,}} 
        />
        <Tab.Screen 
          name="Firstaid" 
          component={Firstaid}
          options={{tabBarIcon:({color})=><FontAwesome5 name="first-aid" size={24} color={color} />,}} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{tabBarIcon:({color})=><FontAwesome5 name="user-alt" size={24} color={color} />,}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
