import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import Block from '../components/block';
import { DATA } from '../assets/DATA';
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.home_container}>
        <View style={styles.home_content}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Block props={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  home_content: {
    width: '95%',
    padding: 10,
  },
});
