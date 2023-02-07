import { StyleSheet, View } from 'react-native';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/search';
import SellScreen from './screens/sell';
import MessagesScreen from './screens/messages';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import DetailsScreen from './screens/details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const globalstyle = require('./styles/style');
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon: ({}) => <Ionicons name="home" size={25} color="black" /> }}
      />
      <BottomTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ tabBarIcon: ({}) => <Ionicons name="search" size={25} color="black" /> }}
      />
      <BottomTabs.Screen
        name="SellScreen"
        component={SellScreen}
        options={{ tabBarIcon: ({}) => <Ionicons name="add" size={25} color="black" /> }}
      />
      <BottomTabs.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({}) => <Ionicons name="paper-plane" size={25} color="black" />,
        }}
      />
      <BottomTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ tabBarIcon: ({}) => <Ionicons name="person" size={25} color="black" /> }}
      />
    </BottomTabs.Navigator>
  );
}
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
        <Stack.Navigator>
          <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
