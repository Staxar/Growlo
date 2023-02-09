import { useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';
import DetailScreenComponent from '../components/detailscomponent';

export default function DetailsScreen({ navigation, route }) {
  const [productid, setproductid] = useState('');
  useEffect(() => {
    setproductid(route.params);
  }, [route]);
  return (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
      <View style={{ height: '100%', width: '100%' }}>
        <DetailScreenComponent id={productid} />
      </View>
    </SafeAreaView>
  );
}
