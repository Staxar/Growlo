import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({navigation, route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is profile</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')} title="Home"/>
    </View>
  );
}