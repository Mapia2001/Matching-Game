import React from 'react';
import {View, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import Style from './styles';
export default class AnimatedScreen extends React.Component{
    componentWillMount = () => {
        this.animatedWidth = new Animated.Value(50)
        this.animatedHeight = new Animated.Value(100)
    }

    animatedBox = () => {
        Animated.timing(
            this.animatedWidth,{
                toValue: 200,
                duration: 1000,
            }
        ).start()

        Animated.timing(
            this.animatedHeight,{
                toValue: 500,
                duration: 500
            }
        ).start()
    }

    render(){
        const animatedStyle = {width: this.animatedWidth, height: this.animatedHeight}
      return(
          <View>
            <TouchableOpacity style={Style.container} onPress={this.animatedBox}>
            <Animated.View style={[style1.box,animatedStyle]}/>
            </TouchableOpacity>
          </View>
      )
    }
}

const style1 = StyleSheet.create(
    {
        box:{
            backgroundColor: 'blue',
            width: 50,
            height: 100,
        }
    }
)