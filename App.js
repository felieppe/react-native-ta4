import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [changed, setChanged] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={!changed ? require('./assets/cat.jpg') : require('./assets/zarasa.webp')} />
      <Text style={{display: !changed ? 'none': 'flex'}}>zzaragsaaa del sabooooooooooohhggg</Text>

      <Button style={styles.button} title="Change Image" onPress={() => { setChanged(!changed) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
