import {
  AppRegistry, View, Image, StatusBar
} from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
      <StatusBar />
      <View style={{ flexDirection: 'row' }}>
      <Image
    source={require('./src/components/images/back-arrow.png')}
    style={styles.backarrowStyle} />

    <Image
  source={require('./src/components/images/help.png')}
  style={styles.helpStyle} />


  <Image
source={require('./src/components/images/setting.png')}
style={styles.settingStyle} />
</View>
      </View>
    );
  }

}
const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#000000'
  },
  backarrowStyle: {
    resizeMode: 'contain',
    flexDirection: 'row',
    width: 50,
    height: 50,
    left: 0,
    justifyContent: 'flex-start'
  },
  helpStyle: {
    resizeMode: 'contain',
      width: 50,
      height: 50,
      left: 220,
      justifyContent: 'flex-end',
      position: 'relative'

  },
  settingStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  position: 'relative',
  left: 210
  }
};
AppRegistry.registerComponent('navBar', () => App);
