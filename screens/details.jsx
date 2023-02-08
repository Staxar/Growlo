import { useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';

export default function DetailsScreen({ navigation, route }) {
  const [id, setid] = useState('');
  useEffect(() => {
    setid(route.params);
  }, [route]);

  return (
    <SafeAreaView>
      {/* <View>{DATA.filter((item) => item.data.id === id).map(item)}</View> */}
    </SafeAreaView>
  );
}
