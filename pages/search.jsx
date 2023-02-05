import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
export default function SearchScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const DATA = [
    {
      id: '0',
      title: 'Fruits',
      data: [
        {
          id: '1',
          title: 'Apple',
          img: require('../assets/Fruits/apple.png'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '2',
          title: 'Cherries',
          img: require('../assets/Fruits/cherries.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '3',
          title: 'Peach',
          img: require('../assets/Fruits/peach.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '4',
          title: 'Pear',
          img: require('../assets/Fruits/pear.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
      ],
    },
    {
      id: '1',
      title: 'Vegetables',
      data: [
        {
          id: '1',
          title: 'Carrots',
          img: require('../assets/Vegetables/carrots.webp'),
          count: 85,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '2',
          title: 'Celery',
          img: require('../assets/Vegetables/celery.webp'),
          count: 15,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '3',
          title: 'Leek',
          img: require('../assets/Vegetables/leek.webp'),
          count: 2,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '4',
          title: 'Parsley',
          img: require('../assets/Vegetables/parsley.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
      ],
    },
    {
      id: '2',
      title: 'Homemade preserves',
      data: [
        {
          id: '1',
          title: 'Apple Muse',
          img: require('../assets/Homemade_preserves/apple_muse.webp'),
          count: 11,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '2',
          title: 'Compote',
          img: require('../assets/Homemade_preserves/compote.webp'),
          count: 1,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '3',
          title: 'Cucumbers',
          img: require('../assets/Homemade_preserves/jarcucumber.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '4',
          title: 'Peach',
          img: require('../assets/Homemade_preserves/jarpeach.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
      ],
    },
    {
      id: '3',
      title: 'Delicacies',
      data: [
        {
          id: '1',
          title: 'Fruits',
          img: require('../assets/Delicacies/craberries.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '2',
          title: 'Vegetables',
          img: require('../assets/Delicacies/dried_mushrooms.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '3',
          title: 'Homemade preserves',
          img: require('../assets/Delicacies/dried_plum.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '4',
          title: 'Delicacies',
          img: require('../assets/Delicacies/hazelnuts.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
      ],
    },
    {
      id: '4',
      title: 'Dairy',
      data: [
        {
          id: '1',
          title: 'Fruits',
          img: require('../assets/Dairy/butter.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '2',
          title: 'Vegetables',
          img: require('../assets/Dairy/buttermilk.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '3',
          title: 'Homemade preserves',
          img: require('../assets/Dairy/cheese.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
        {
          id: '4',
          title: 'Delicacies',
          img: require('../assets/Dairy/feta_cheese.webp'),
          count: 25,
          unit: 'kg',
          location: 'Wies Polska',
        },
      ],
    },
  ];
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
