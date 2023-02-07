import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Button, Text, TextInput } from 'react-native-paper';
import ProfileInfo from '../components/profileinfo';
const globalstyle = require('../styles/style');
export default function ProfileScreen({ navigation, route }) {
  const [displayProfile, setdisplayProfile] = useState(false);
  const [displayLocation, setdisplayLocation] = useState(false);
  function changeName() {
    setdisplayProfile(!displayProfile);
  }
  function changeLocation() {
    setdisplayLocation(!displayLocation);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalstyle.full_container}>
          <View style={{ padding: 10 }}>
            <Avatar.Image size={64} source={require('../assets/avatar.png')} />
          </View>
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
            <ProfileInfo displayProfile={displayProfile} left_text={'Profile name'} />
            <ProfileInfo displayProfile={displayProfile} left_text={'Profile surname'} />
            <ProfileInfo displayProfile={displayProfile} left_text={'Profile e-mail'} />
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
              <Text variant="bodySmall">Location</Text>
              <Button
                mode="contained"
                style={{ backgroundColor: '#63ab76' }}
                onPress={changeLocation}
              >
                Edit
              </Button>
            </View>
            <ProfileInfo displayLocation={displayLocation} left_text={'Location city'} />
            <ProfileInfo displayLocation={displayLocation} left_text={'Location post-code'} />
            <ProfileInfo displayLocation={displayLocation} left_text={'Location street'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
