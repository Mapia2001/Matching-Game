import React from 'react';
import {View,Text,Button,TextInput, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';
import Orientation from 'react-native-orientation';

export default class HomeScreen extends React.Component{

  componentDidMount(){
    Orientation.lockToPortrait();
  }

    render(){
      return(
        <View style={styles.container}>
          <ImageBackground source={require('./resources/FRUNLT.jpg')} style={{justifyContent: 'flex-end',alignItems: 'center',width: '100%', height: '100%'}}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Start')}>
                <Image source={require('./resources/start.png')}></Image>
              </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
      )
    }
  }