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
      <View style={styles.container}>
        <Text>
          Growlo
          <Ionicons name="leaf" size={32} color="green" />
        </Text>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63ab76',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
  },
});
