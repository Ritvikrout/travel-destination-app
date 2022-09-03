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

export default class WaterfallScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Waterfalls </Text>
         </View>
          <TouchableOpacity
            style={{ backgroundColor: 'black', width : 50 }}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
          <Text style = {styles.touchableText}> Back </Text>
          </TouchableOpacity>
          <View style = {styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('JogFalls');
          }}>
          <Text style = {styles.touchableText}> Jog Falls </Text>
        </TouchableOpacity>
        </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DudhsagarFalls');
          }}>
          <Text style = {styles.touchableText}> Dudhsagar Falls </Text>
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
    color : 'white'
  },
  buttonContainer: {
    borderWidth: 3,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    margin: 3,
    backgroundColor : '#82a9d1'
  },
});
