import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
const globalstyle = require('../styles/style');
export default function ProfileScreen({ navigation, route }) {
  const [name, setName] = useState();
  const [display, setDisplay] = useState(false);
  function changeName() {
    setDisplay(!display);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalstyle.full_container}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              margin: 10,
              padding: 10,
              alignItems: 'center',
            }}
          >
            <Text variant="bodySmall">Profile</Text>
            <Button mode="contained" style={{ backgroundColor: '#63ab76' }} onPress={changeName}>
              Edit
            </Button>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 10,
              }}
            >
              <Text style={{ flex: 1 }}>Profile name</Text>
              {display ? (
                <TextInput label={'Type new name'} mode="outlined" style={{ flex: 2 }}></TextInput>
              ) : (
                ''
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
