import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function BlockContent() {
  return (
    <View style={styles.home_flex_col}>
      <Image source={require('../assets/adaptive-icon.png')} style={styles.home_images} />
      <View style={styles.home_text_content}>
        <Text style={styles.home_title}>Prize: 10</Text>
        <Text style={styles.home_subtitle}>Count: 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
