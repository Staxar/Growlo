
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './pages/profile';
import HomeScreen from './pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './pages/search';
import SellScreen from './pages/sell';
import MessagesScreen from './pages/messages';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: ({}) => {<Ionicons name="md-checkmark-circle" size={32} color="green" />}}}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="SellScreen" component={SellScreen} />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
