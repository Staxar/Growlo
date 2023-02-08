import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { Searchbar, Text, List } from 'react-native-paper';
import { DATA } from '../assets/DATA';
import { DATA_CATEGORY } from '../assets/DATA_CATEGORY';
export default function SearchScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: '100%', height: '100%' }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginVertical: 5 }}
          />
          <List.Section>
            {DATA_CATEGORY.map((item) => {
              return (
                <List.Accordion title={item.category} key={item.id + item.title}>
                  {DATA.filter((product) => product.category.includes(item.category))
                    .filter((product) => product.title.includes(searchQuery))
                    .map((x, index) => {
                      return (
                        <List.Item
                          title={x.title}
                          description={[x.location, ' ', x.count, ' ', x.unit, ' ', x.author]}
                          style={{
                            backgroundColor: '#ffff',
                            padding: 5,
                            marginHorizontal: 5,
                            marginVertical: 3,
                          }}
                          key={index + x.title}
                          left={(props) => (
                            <Image
                              source={x.img}
                              style={{
                                width: 45,
                                height: 45,
                                padding: 5,
                                marginLeft: 5,
                                borderRadius: 5,
                              }}
                            />
                          )}
                        ></List.Item>
                      );
                    })}
                </List.Accordion>
              );
            })}
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
