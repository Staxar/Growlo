import { StyleSheet, View } from 'react-native';
import ProfileScreen from './pages/profile';
import HomeScreen from './pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './pages/search';
import SellScreen from './pages/sell';
import MessagesScreen from './pages/messages';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native-paper';
const globalstyle = require('./styles/style');
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={globalstyle.header_container}>
        <Text style={globalstyle.header_text} variant="headlineSmall">
          Growlo
          <Ionicons name="leaf" size={32} color="green" />
        </Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeScreen">
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ tabBarIcon: ({}) => <Ionicons name="home" size={25} color="black" /> }}
          />
          <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ tabBarIcon: ({}) => <Ionicons name="search" size={25} color="black" /> }}
          />
          <Tab.Screen
            name="SellScreen"
            component={SellScreen}
            options={{ tabBarIcon: ({}) => <Ionicons name="add" size={25} color="black" /> }}
          />
          <Tab.Screen
            name="MessagesScreen"
            component={MessagesScreen}
            options={{
              tabBarBadge: 3,
              tabBarIcon: ({}) => <Ionicons name="paper-plane" size={25} color="black" />,
            }}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ tabBarIcon: ({}) => <Ionicons name="person" size={25} color="black" /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
