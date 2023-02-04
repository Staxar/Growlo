import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlockContent from './block_content';

export default function Block({ props }) {
  console.log(props);
  return (
    <View style={{ width: '100%' }}>
      <Text styles={styles.home_title}>Friuts</Text>
      <Text styles={styles.home_subtitle}>Products for You</Text>
      <View style={styles.home_flex_row}>
        <BlockContent />
        <BlockContent />
        <BlockContent />
        <BlockContent />
      </View>
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
    width: '90%',
  },
  home_title: {
    fontWeight: 'bold',
  },
  home_subtitle: {
    fontFamily: 'sans-serif-light',
    fontSize: 12,
  },
});
