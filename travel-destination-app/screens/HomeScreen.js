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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView>
        <View style={{ backgroundColor: '#f5a12c' }}>
          <Text style={styles.titleText}> Travel Destinations </Text>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Beach');
              }}>
              <Text style={styles.touchableText}> Beaches </Text>
              <Image
                source={require('../assets/download.jpg')}
                style={styles.touchableImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Temple');
              }}>
              <Text style={styles.touchableText}> Temples </Text>
              <Image
                source={require('../assets/download-1.jpg')}
                style={styles.touchableImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Monument');
              }}>
              <Text style={styles.touchableText}> Monuments </Text>
              <Image
                source={require('../assets/download-2.jpg')}
                style={styles.touchableImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Waterfall');
              }}>
              <Text style={styles.touchableText}> Waterfalls </Text>
              <Image
                source={require('../assets/download-3.jpg')}
                style={styles.touchableImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
  },
  titleText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  touchableImage: {
    width: '85%',
    height: 90,
    alignSelf: 'center',
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
    height : 120,
    alignSelf: 'center',
    margin: 3,
    backgroundColor : '#82a9d1'
  },
});
