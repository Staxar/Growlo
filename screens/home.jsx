import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, SectionList } from 'react-native';
import Block from '../components/block';
import { DATA } from '../assets/DATA';
import { Button } from 'react-native-paper';
import { DATA_CATEGORY } from '../assets/DATA_CATEGORY';
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.home_container}>
        <View style={styles.home_content}>
          <FlatList
            data={DATA_CATEGORY}
            renderItem={({ item }) => <Block props={item.category} navigation={navigation} />}
            keyExtractor={(item, index) => item.category + index}
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
