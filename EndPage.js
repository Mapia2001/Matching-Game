import React from 'react';
import {View,ImageBackground,Image,Text,TouchableOpacity} from 'react-native';

export default class StartPage extends React.Component{

  render(){
    return(
      <View>
          <ImageBackground source={require('./resources/Startback.png')} style={{width: '100%',height: '100%'}}>
            <View style={{flexDirection: "row",marginTop: 90,justifyContent: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Image source={require('./resources/carder.png')} style={{marginTop: 7, marginRight: 20}}></Image>
                    <Text style={{textAlign: 'center',color: 'blue',fontSize: 23,marginTop: 16,fontStyle: 'italic'}}>20</Text>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                    <Image source={require('./resources/timer.png')} style={{marginTop: 2, marginRight: 20}}></Image>
                    <Text style={{textAlign: 'center',color: '#1CC625',fontSize: 23,marginTop: 16,fontWeight: 'bold'}}>00</Text>
                  </View>
                  <View style={{flexDirection: 'column', marginTop: -12}}>
                    <Image source={require('./resources/scorer.png')}></Image>
                    <Text style={{textAlign: 'center',color: 'blue',fontSize: 23,marginTop: 16,fontStyle: 'italic'}}>20</Text>
                  </View>
            </View>
            <View style={{flexDirection: 'row',marginTop: 40,justifyContent: 'center',alignItems: 'center'}}>
              <View style={{marginRight: 30}}>
                <View>
                  <TouchableOpacity>
                    <Image source={require('./resources/Individual_symbol/2.png')} style={{width: Math.floor(Math.random()*60 + 20),height: Math.floor(Math.random()*10 + 40)}}></Image>
                  </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                     <Image source={require('./resources/Individual_symbol/3.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image source={require('./resources/Individual_symbol/4.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View>
                  <TouchableOpacity>
                    <Image source={require('./resources/Individual_symbol/5.png')}></Image>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image source={require('./resources/Individual_symbol/6.png')}></Image>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image source={require('./resources/Individual_symbol/7.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
      </View>
    )
  }
}