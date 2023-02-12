import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, List, Text, TextInput } from 'react-native-paper';
import { DATA_CATEGORY } from '../assets/DATA_CATEGORY';

export default function SellScreen({ navigation }) {
  const [expanded, setExpanded] = useState(true);
  const [press, setPress] = useState(false);

  const handlePressed = () => setPress(!press);
  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          justifyContent: 'flex-start',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text>Add your product</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 180,
            justifyContent: 'center',
            padding: 10,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              width: 150,
              alignSelf: 'center',
            }}
          >
            <Button mode="contained" style={{ width: '100%', justifyContent: 'center' }}>
              Add photo
            </Button>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 200,
            justifyContent: 'center',
            padding: 10,
            marginVertical: 10,
          }}
        >
          <View>
            <View style={{ marginVertical: 5 }}>
              <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                Title
              </Text>
              <TextInput label="e.g Eggs, Apples" mode="outlined"></TextInput>
            </View>
            <View>
              <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                Description
              </Text>
              <TextInput
                label="e.g Description of your product"
                mode="outlined"
                multiline={true}
              ></TextInput>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              justifyContent: 'center',
              padding: 10,
              marginVertical: 10,
            }}
          >
            <List.Section>
              <List.Accordion
                title="Pick category"
                left={(props) => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}
              >
                {DATA_CATEGORY.map((item) => {
                  return (
                    <List.Item
                      title={item.category}
                      key={item.id}
                      onPress={handlePress}
                      left={(props) => <List.Icon {...props} icon="folder" />}
                    />
                  );
                })}
              </List.Accordion>
              <List.Section>
                <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                  Localization
                </Text>
                <View style={{ marginVertical: 5 }}>
                  <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                    Country
                  </Text>
                  <TextInput label="e.g Poland, Spain" mode="outlined"></TextInput>
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                    Address
                  </Text>
                  <TextInput label="e.g Wrocław, Legnicka 111 53-627" mode="outlined"></TextInput>
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Text variant="titleMedium" style={{ marginVertical: 3 }}>
                    Contact
                  </Text>
                  <TextInput label="e.g Mail, Phone number" mode="outlined"></TextInput>
                </View>
              </List.Section>
            </List.Section>
            <View>
              <MapView style={{ width: '100%', height: '100%' }}></MapView>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
