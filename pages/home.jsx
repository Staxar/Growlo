import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Block from '../components/block';
export default function HomeScreen({ navigation }) {
  const DATA = [
    {
      id: '1',
      title: 'Fruits',
    },
    {
      id: '2',
      title: 'Vegetables',
    },
    {
      id: '3',
      title: 'Homemade preserves',
    },
    {
      id: '4',
      title: 'Delicacies',
    },
    {
      id: '5',
      title: 'Dairy',
    },
    {
      id: '6',
      title: 'Eggs',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Block props={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: 100,
  },
  home_content: {
    width: '90%',
    padding: 10,
  },
  home_flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  home_flex_col: {
    flexDirection: 'column',
    borderWidth: 1,
    marginLeft: 7,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  home_title: {
    fontWeight: 'bold',
  },
  home_subtitle: {
    fontFamily: 'sans-serif-light',
    fontSize: 12,
  },
  home_text_content: {
    justifyContent: 'flex-start',
  },
  home_images: {
    width: 60,
    height: 100,
    padding: 10,
  },
});
