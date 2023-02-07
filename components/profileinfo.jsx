import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function ProfileInfo({ displayProfile, displayLocation, left_text }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
      }}
    >
      <Text style={{ flex: 1 }}>{left_text}</Text>
      {displayProfile || displayLocation ? (
        <TextInput label={'Type new ' + left_text} mode="outlined" style={{ flex: 2 }}></TextInput>
      ) : (
        ''
      )}
    </View>
  );
}
