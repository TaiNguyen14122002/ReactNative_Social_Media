import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import entypo from 'react-native-vector-icons/Entypo'
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';
import NewPost from './src/components/screens/NewPost';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Registed';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search';
            } else if (route.name === 'Activity') {
              iconName = focused
                ? 'heart'
                : 'heart-outline';
            } else if (route.name === 'Reels') {
              iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'NewPost') {
              iconName = focused ? 'duplicate' : 'duplicate-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="NewPost" component={NewPost} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="Home" component={Home} />
        <Stack.Screen name = "RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
