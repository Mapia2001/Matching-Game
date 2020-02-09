import React from 'react';
import {View,ImageBackground,Image,Text,TouchableOpacity, Alert, Dimensions} from 'react-native';
import randomImages from './randomImages';
import Orientation from 'react-native-orientation';
export default class StartPage extends React.Component{
  //class constructor
  constructor(props: Object) {
    super(props);
    global.CurrentTime = 0;
    global.PrevTime = 0;
    global.Index = [];
    global.Index[0] = '';
    global.answerIndexLeft = 0;
    global.answerIndexRight = 0;
    global.answerIndexPath = 0;
    global.indexCount = 0;
    global.pathIndexCount = 0;
    global.checkingBoolean = 0;
    global.temp = -1;
    global.stopTime = 0;
    global.stopClickCounter = 0;
    global.rightMargin = 0;
    global.leftMargin = 0;
    global.topMargin = 0;
    this._GeneratePath();
    this.state = {
      fullSeconds: 180,//all time life,
      minutes: 3,
      timeString: "3:00",
      fulltime: 180,
      secondString: "",
      restSecond: 0, 
      carder: 25,//all card number
      score: 0,//score,
      carderString: "25",
      scoreString: "0",
      Flex_Direction_Value: 1,
      margin_left: 0,
      margin_right: Dimensions.get('screen').width / 4,
      w1: ( Dimensions.get('window').width / 4 ) * 3,
      w2: Dimensions.get('window').width / 4,
      CounterClick: 0,//image click number
      screenWidth: Dimensions.get('window').width,//screen width
      screenHeight: Dimensions.get('window').height,//screen height
    };
  }

//click event function
  clickFunction(index, side) {
    if ( this.state.fullSeconds == 0){
      return;
    }
    if ( this.state.carder == 0 ){
      return;
    }
    this.scoreCounterPlus(index, side);
    this._GeneratePath();
    //this.Toggle_Change_Layout();
    this.setState({carder: this.state.carder - 1});
  }

//Getting Side Margin
getMargin(val){
  if ( val == 1 ) {
    global.rightMargin = 20;
    global.leftMargin = 60;
  } else if ( val == 3 ) {
    global.rightMargin = 150;
    global.leftMargin = 0;
  } else if ( val == 5 ) {
    global.rightMargin = 150;
    global.leftMargin = 0;
  } else if ( val == 7 ) {
    global.rightMargin = 20;
    global.leftMargin = 60;
  } else {
    global.rightMargin = 0;
    global.leftMargin = 0;
  }
}

//Getting Top Margin
getTopMargin(val){
    if ( val == 2 ) {
      global.topMargin = 5;
    } else if ( val == 8 ) {
      global.topMargin = -22;
    } else {
      global.topMargin = 0;
    }
}

getBottomMargin(val){
  if ( val == 8 ) {
    global.topMargin = -21;
  } else {
    global.topMargin = 0;
  }
}

//counting score
  scoreCounterPlus(index, side){ 
    global.CurrentTime = this.state.fullSeconds;
    //console.log(index + "----" + side + "---" + global.CurrentTime + "---" + global.answerIndexLeft + "----" + global.answerIndexRight);
    if ( (index == global.answerIndexLeft && side == 'left') || (index == global.answerIndexRight && side == 'right')  ){
        if (  this.state.CounterClick == 0 ){
          if ( global.CurrentTime > (this.state.fulltime - 4) ){
            this.setState({score: this.state.score + 10});
          } else if ( global.CurrentTime < (this.state.fulltime - 3) && global.CurrentTime > (this.state.fulltime - 6) ){
            this.setState({score: this.state.score + 7});
          } else {
            this.setState({score: this.state.score + 1});
          }
        } else {
          if ( (global.PrevTime - global.CurrentTime) <= 3 ){
            this.setState({score: this.state.score + 10});
          } else if ( (global.PrevTime - global.CurrentTime) > 3 &&  (global.PrevTime - global.CurrentTime) <=5 ){
            this.setState({score: this.state.score + 7});
          } else {
            this.setState({score: this.state.score + 1});
          }
        }
    }
    global.PrevTime = this.state.fullSeconds;
    this.setState({CounterClick: this.state.CounterClick + 1});
  }

//Animated function 
  Toggle_Change_Layout = () =>
    {
        LayoutAnimation.spring();
        if ( this.state.Flex_Direction_Value == 1 ){
            this.setState({ Flex_Direction_Value: 0 });
        }
        else
        {
            this.setState({ Flex_Direction_Value: 1 });
        }
    }
//Checking Path

_CheckingPath(ii) {
  for ( var k = 1; k < ii; k++ ){
    if ( global.answerIndexPath == global.Index[ii] || global.Index[ii] == global.Index[k] ){
      global.checkingBoolean = 0;
      return;
    }
    global.checkingBoolean = 1;
  }
}

//Generate Path Index
 _GeneratePath = () => {
    global.answerIndexLeft = Math.floor(Math.random() * 7 + 1);
    global.answerIndexRight = Math.floor(Math.random() * 7 + 1);
    global.answerIndexPath = Math.floor(Math.random() * (randomImages.length - 1) + 1);
    global.Index[0] = '';
    global.temp = Math.floor(Math.random() * (randomImages.length - 1) + 1);
    while ( true ){
      if ( global.temp != global.answerIndexPath ){
        break;
      }
      global.temp = Math.floor(Math.random() * (randomImages.length - 1) + 1);
    }
    global.Index[1] = global.temp;
    for ( var i = 2 ; i <  15; i++){
      global.Index[i] = Math.floor(Math.random() * (randomImages.length - 1)+ 1);
    }
    for ( var i = 2; i < 15; i++ ) {
      do {
        global.Index[i] = Math.floor(Math.random() * (randomImages.length - 1)+ 1);
        this._CheckingPath(i);
      }while ( global.checkingBoolean != 1 )
    }
 }

 startTimer1 = () => {
  this.setState({fullSeconds: this.state.fullSeconds - 1});
  this.setState({minutes: Math.floor(this.state.fullSeconds / 60)});
  this.setState({restSecond: this.state.fullSeconds % 60});
  if ( this.state.restSecond < 10 ){
      this.setState({secondString: "0" + this.state.restSecond.toString()});
  } else {
      this.setState({secondString: this.state.restSecond.toString()});
  }
  this.setState({timeString: this.state.minutes.toString() + ":" + this.state.secondString});
}

componentDidMount(){
  this.interval = setInterval(this.startTimer1,1000);
  Orientation.lockToPortrait();
}

componentDidUpdate(){
  if ( this.state.fullSeconds == 0){
      clearInterval(this.interval);
  }
}

componentWillUnmount(){
  clearInterval(this.interval);
}

callFun = () =>
{
  this.props.navigation.navigate('Home');
}
  
  render(){
    let items1 = [];
    let items2 = [];
    let subitem = [];
    let subitem1 = [];
    let subitem2 = [];
    if ( this.state.fullSeconds == 0 || this.state.carder == 0 ){
      subitem1.push(
        <View>
          <TouchableOpacity onPress={this.callFun}>
            <Image source={require('./resources/restart.png')}></Image>
          </TouchableOpacity>
        </View>
      )
    } else {
      subitem1 = [];
    }

    if ( this.state.carder == 0 ){
      global.stopClickCounter++;
      if ( global.stopClickCounter == 1 ){
        global.stopTime = this.state.timeString;
      }
      subitem2.push(<Text style={{textAlign: 'center',color: 'white',fontSize: 23,marginTop: -(this.state.screenHeight / 30),fontStyle: 'italic',fontWeight: 'bold'}}>{global.stopTime}</Text>)
    }else {
      subitem2.push(<Text style={{textAlign: 'center',color: 'white',fontSize: 23,marginTop: -(this.state.screenHeight / 30),fontStyle: 'italic',fontWeight: 'bold'}}>{this.state.timeString}</Text>)
    }
    global.pathIndexCount = 0;
    global.indexCount = 0;
    for (let i = 0; i < 3; i++)
    {
      if ( i == 0 || i == 2 ){
        for (let j = 0; j < 3; j++){
          global.indexCount = global.indexCount + 1;
          this.getMargin(global.indexCount);
          if ( global.answerIndexLeft == global.indexCount ) {
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.answerIndexLeft, "left")}>
                  <Image source={randomImages[global.answerIndexPath]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          } else {
            global.pathIndexCount++;
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.indexCount, "right")}>
                  <Image source={randomImages[global.Index[global.pathIndexCount]]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          }
        }
        this.getTopMargin(global.indexCount);
        items1.push(
          <View style={{flexDirection: 'row'}}>{subitem}</View>
        );
        subitem = [];
      } else {
        for (let j = 0; j < 2; j++){
          global.indexCount = global.indexCount + 1;
          this.getMargin(global.indexCount);
          if ( global.answerIndexLeft == global.indexCount ) {
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.answerIndexLeft, "left")}>
                  <Image source={randomImages[global.answerIndexPath]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          } else {
            global.pathIndexCount++;
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.indexCount, "right")}>
                  <Image source={randomImages[global.Index[global.pathIndexCount]]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          }
        }
        this.getTopMargin(global.indexCount);
        items1.push(
          <View style={{flexDirection: 'row'}}>{subitem}</View>
        );
        subitem = [];
      }
    }
    global.indexCount = 0;
    for (let k = 0; k < 3; k++)
    {
      if ( k == 0 || k == 2 ){
        for (let l = 0; l < 3; l++){
          global.indexCount = global.indexCount + 1;
          this.getMargin(global.indexCount);
          if ( global.answerIndexRight == global.indexCount ) {
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.answerIndexRight, "right")}>
                  <Image source={randomImages[global.answerIndexPath]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          } else {
            global.pathIndexCount++;
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.indexCount, "right")}>
                  <Image source={randomImages[global.Index[global.pathIndexCount]]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          }
        }
        this.getBottomMargin(global.indexCount);
        items2.push(<View style={{flexDirection: 'row'}}>{subitem}</View>);
        subitem = [];
      } else {
        for (let l = 0; l < 2; l++){
          global.indexCount = global.indexCount + 1;
          this.getMargin(global.indexCount);
          if ( global.answerIndexRight == global.indexCount ) {
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.answerIndexRight, "right")}>
                  <Image source={randomImages[global.answerIndexPath]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          } else {
            global.pathIndexCount++;
            subitem.push(
              <View>
                <TouchableOpacity onPress={this.clickFunction.bind(this, global.indexCount, "right")}>
                  <Image source={randomImages[global.Index[global.pathIndexCount]]} style={{width: (this.state.screenWidth / 8),height: (this.state.screenWidth / 8)}}></Image>
                </TouchableOpacity>
              </View>
            );
          }
        }
        this.getBottomMargin(global.indexCount);
        items2.push(<View style={{flexDirection: 'row'}}>{subitem}</View>);
        subitem = [];
      }
    }
    return(
      <View>
          <ImageBackground source={require('./resources/Startback.png')} style={{width: '100%',height: '100%'}}>
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                <View style={{flexDirection: 'column',marginTop: (this.state.screenHeight / 32),marginRight: 40}}>
                  <Image source={require('./resources/cardleft.png')}></Image>
                  <Text style={{textAlign: 'center',color: 'white',fontSize: 23,marginTop: -(this.state.screenHeight / 30),fontStyle: 'italic',fontWeight: 'bold'}}>{this.state.carder}</Text>
                </View>
                <View style={{flexDirection: 'column',marginTop: (this.state.screenHeight / 32),marginRight: 40}}>
                  <Image source={require('./resources/timeleft.png')}></Image>
                  <View>
                    {subitem2}
                  </View>
                </View>
                <View style={{flexDirection: 'column',marginTop: (this.state.screenHeight / 32)}}>
                  <Image source={require('./resources/score.png')}></Image>
                  <Text style={{textAlign: 'center',color: 'white',fontSize: 23,marginTop: -(this.state.screenHeight / 30),fontStyle: 'italic',fontWeight: 'bold'}}>{this.state.score}</Text>
                </View>
            </View>      
            <View style={{justifyContent: 'center',alignItems: 'center',marginTop: ( this.state.screenHeight / 10 ),flexDirection: 'column'}}>
                <ImageBackground source={require('./resources/cardback.png')} style={{width: ( this.state.screenWidth / 5 ) * 3, height: ( this.state.screenWidth / 5 ) * 3}}>
                  <View style={{flexDirection: 'column',alignItems: 'center',marginTop: 40}}>
                    {items1}
                  </View>
                </ImageBackground>
                <ImageBackground source={require('./resources/cardback.png')} style={{width: ( this.state.screenWidth / 5 ) * 3, height: ( this.state.screenWidth / 5 ) * 3}}>
                  <View style={{flexDirection: 'column',alignItems: 'center',marginTop: 40}}>
                    {items2}
                  </View>
                </ImageBackground>
            </View>
            <View style={{marginBottom: (this.state.screenHeight / 12),alignItems: 'center'}}>
              {subitem1}
            </View>
          </ImageBackground>
      </View>
    )
  }
}