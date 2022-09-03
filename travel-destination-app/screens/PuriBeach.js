import * as React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import * as Linking from 'expo-linking';

export default class PuriBeachScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Puri Beach </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: 'black', width: 50 }}
            onPress={() => {
              this.props.navigation.navigate('Beach');
            }}>
            <Text style={styles.touchableText}> Back </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/puri_beach.jpg')}
          style={{ height: '30%', width: '100%' }}
        />
        <Text style={styles.subHeadingText}> Information </Text>
        <Text>
          Puri Beach or the Golden beach is a beach in the city of Puri in the
          state of Odisha, India. It is on the shore of the Bay of Bengal. It is
          known for being a tourist attraction and a Hindu sacred place.
        </Text>
        <Text style={styles.subHeadingText}> Fun Fact </Text>
        <Text>
          The pilgrim town famous for its golden beaches considered one of the
          safest beaches in the country.
        </Text>
        <Text style = {styles.subHeadingText}> Map </Text>
        <Image source = {require('../assets/puri-map.jpg')} style = {{width : '75%', height : '75%', alignSelf : 'center'}}/>
        <Text style={styles.subHeadingText}> Additional Info </Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://en.m.wikipedia.org/wiki/Puri_Beach'
              );
            }}>
            <Text>Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  touchableText: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
  },
  buttonContainer: {
    borderWidth: 3,
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    margin: 3,
    height: 50,
    backgroundColor: '#82a9d1',
    alignContent : 'center'
  },
  subHeadingText: {
    fontWeight: "600",
    fontSize: 16,
    alignSelf: 'center',
  },
});
