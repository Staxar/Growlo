import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { DATA } from '../assets/DATA';
import { DATA_CATEGORY } from '../assets/DATA_CATEGORY';
import BlockContent from './block_content';

export default function Block({ props, navigation }) {
  return (
    <View style={{ width: '100%' }}>
      <View style={{ flexDirection: 'row', padding: 5, width: '100%' }}>
        <View style={{ flex: 4, justifyContent: 'flex-start', alignContent: 'center' }}>
          <Text style={styles.home_title}>{props}</Text>
          <Text style={styles.home_subtitle}>Products for You</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text onPress={() => navigation.navigate('SearchScreen', { category: props })}>
            See all
          </Text>
        </View>
      </View>
      <ScrollView horizontal>
        {DATA.filter((product) => product.category === props).map((item) => {
          return <BlockContent props={item} navigation={navigation} key={item.id + item.title} />;
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  home_flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  home_title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  home_subtitle: {
    fontSize: 12,
  },
});
