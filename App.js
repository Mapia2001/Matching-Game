import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import StartPage from './StartPage';

const App = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {header: null}
    },
  Start:{
    screen: StartPage,
    navigationOptions: {header: null}
  }
});

export default createAppContainer(App);
