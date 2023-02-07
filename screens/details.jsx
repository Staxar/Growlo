import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function DetailsScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <View>
        <Text>itemId: {route.params}</Text>
      </View>
    </SafeAreaView>
  );
}
