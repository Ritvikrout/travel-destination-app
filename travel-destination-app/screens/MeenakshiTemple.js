import * as React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import * as Linking from 'expo-linking';

export default class MeenakshiTempleScreen extends React.Component {
  render() {
    return (
      <View>
      
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Meenakshi Amman Temple </Text>
        </View>
        <View>
        <TouchableOpacity
          style={{ backgroundColor: 'black', width : 50 }}
          onPress={() => {
            this.props.navigation.navigate('Temple');
          }}>
          <Text style = {styles.touchableText}> Back </Text>
        </TouchableOpacity>
        </View>
        <Image source = {require('../assets/download-9.jpg')} style = {{height : '50%', width :'80%', alignSelf : 'center'}} />
        <Text style = {{margin : 20}}>
          Vittala Temple is a temple in the town of Madurai in the state of Tamil Nadu, India. It is known for being a tourist attraction and a holy site for Hindus.
        </Text>
        <Text style =  {styles.subHeadingText}> Fun Fact </Text>
        <Text> It is the tallest temple at 144 m </Text>
        <Text style = {styles.subHeadingText}> Maps </Text>
        <Image source = {require('../assets/madurai-city-map.jpg')} style = {{width : '75%', height : "75%", alignSelf : 'center'}} />
        <Text style={styles.subHeadingText}> Additional Info </Text>
        <View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.maduraimeenakshi.org/');
            }}>
            <Text style = {styles.touchableText} >Information</Text>
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
    color : 'white'
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
  subHeadingText : {
    fontWeight : "600" ,
    fontSize : 16,
    alignSelf : 'center'
  },
});
