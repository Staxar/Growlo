import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
export default function BlockContent({ props, navigation }) {
  return (
    <Card
      style={{
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#fff',
        maxWidth: 200,
      }}
      onPress={() => navigation.navigate('DetailsScreen', props.id)}
    >
      <Card.Cover source={props.img} style />

      <Card.Content
        style={{
          marginHorizontal: 0,
          marginTop: 10,
        }}
      >
        <Text variant="titleMedium">Prize: {props.id}</Text>
        <Text variant="bodySmall">
          Quantity: {props.count} {props.unit}
        </Text>
        <Text variant="bodySmall">Location: {props.location}</Text>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text variant="labelSmall">{props.author}</Text>
          <Avatar.Image size={18} source={require('../assets/avatar.png')} />
        </View>
      </Card.Content>
    </Card>
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
