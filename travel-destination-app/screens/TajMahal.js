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

export default class TajMahalScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Taj Mahal </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: 'black', width: 50 }}
            onPress={() => {
              this.props.navigation.navigate('Monument');
            }}>
            <Text style={styles.touchableText}> Back </Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/download-2.jpg')} />
        <Text style={{ margin: 20 }}>
          The Taj Mahal is a monument in the city of Agra in the state of Uttar
          Pradesh, India. It is known for being a tourist attraction and is one
          of the Seven Wonders of The World.
        </Text>
        <Text style={styles.subHeadingText}> Fun Fact </Text>
        <Text>

          The pilgrim town famous for its golden beaches considered one of the
          safest beaches in the country.
        </Text>
        <Text style = {styles.subHeadingText}> Maps </Text>
        <Image source = {require('../assets/location-map-of-taj-mahal.jpg')} style = {{width : '100%', height : "50%", alignSelf : 'center'}} />
        <Text style={styles.subHeadingText}> Additional Info </Text>
        <View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://en.m.wikipedia.org/wiki/Taj_Mahal');
            }}>
            <Text style = {styles.touchableText} >Wikipedia</Text>
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
    alignContent : 'center'
  },
  subHeadingText: {
    fontWeight: "600",
    fontSize: 16,
    alignSelf: 'center',
  },
});
