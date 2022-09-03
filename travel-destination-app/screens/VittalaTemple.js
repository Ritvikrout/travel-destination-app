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

export default class VittalaTempleScreen extends React.Component {
  render() {
    return (
      <View>
      
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Vittala Temple </Text>
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
        <Image source = {require('../assets/puri_beach.jpg')} style = {{height : '30%', width :'100%'}} />
        <Text style = {{margin : 20}}>
          Vittala Temple is a temple in the town of Hampi in the state of Karnataka, India. It is known for being a tourist attraction.
        </Text>
        <Text style =  {styles.subHeadingText}> Fun Fact </Text>
        <Text> The pilgrim town famous for its golden beaches considered one of the safest beaches in the country. </Text>
        <Text style = {styles.subHeadingText}> Maps </Text>
        <Image source = {require('../assets/hampi-map.jpg')} style = {{width : '75%', height : "75%", alignSelf : 'center'}} />
        <Text style={styles.subHeadingText}> Additional Info </Text>
        <View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://hampi.in/vittala-temple');
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
