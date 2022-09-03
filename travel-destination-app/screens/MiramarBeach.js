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

export default class MiramarBeachScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Panaji Beach </Text>
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
        <Text style={{ margin: 20 }}>
          Panaji Beach or MIramar Beach is a beach in the city of Panjii in the state of Goa, India. It is
          on the shore of the Arabian Sea. It is known for being a tourist
          attraction.
        </Text>
        <Text style={styles.subHeadingText}> Fun Fact </Text>
        <Text>
          
          The pilgrim town famous for its golden beaches considered one of the
          safest beaches in the country.
        </Text>
        <Text style={styles.subHeadingText}> Maps </Text>
        <Image
          source={require('../assets/download-8.jpg')}
          style={{ width: '95%', height: '65%', alignSelf: 'center' }}
        />
        <Text style={styles.subHeadingText}> Additional Info </Text>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.tourmyindia.com/states/goa/miramar-beach.html');
              }}>
              <Text style={styles.touchableText}>Information</Text>
            </TouchableOpacity>
          </View>
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
    alignContent: 'center',
  },
  subHeadingText: {
    fontWeight: "600",
    fontSize: 16,
    alignSelf: 'center',
  },
});
