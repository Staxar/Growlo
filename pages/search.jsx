import React from 'react';
import { SectionList, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';
export default function SearchScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </View>
  );
}
