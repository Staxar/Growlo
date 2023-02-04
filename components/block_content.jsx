import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function BlockContent({ props }) {
  return (
    <View style={styles.home_flex_col}>
      <Image source={props.img} style={styles.home_images} />
      <View style={styles.home_text_content}>
        <Text style={styles.home_title}>Prize: {props.id}</Text>
        <Text style={styles.home_subtitle}>
          Quantity: {props.count} {props.unit}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home_flex_col: {
    flexDirection: 'column',
    marginLeft: 7,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 3,
    borderRadius: 10,
  },
  home_title: {
    fontWeight: 'bold',
  },
  home_subtitle: {
    fontSize: 12,
    fontWeight: '300',
  },
  home_text_content: {
    justifyContent: 'flex-start',
  },
  home_images: {
    height: 120,
    width: 120,
    padding: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
