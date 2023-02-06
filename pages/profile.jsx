import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, List } from 'react-native-paper';

export default function ProfileScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <List.Section>
          <List.Subheader>Profile</List.Subheader>
          <List.Item title="Your name" />
          <List.Item title="Your surname" />
          <List.Item title="Your location" />
          <List.Item
            title="Your image"
            right={() => <Avatar.Image size={32} source={require('../assets/avatar.png')} />}
          />
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}
