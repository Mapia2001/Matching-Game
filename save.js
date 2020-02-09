

import CountDown from 'react-native-countdown-component';
<CountDown
                      size={25}
                      until={30}
                      onFinish={() => alert('success')}
                      digitStyle={{backgroundColor: 'none'}}
                      digitTxtStyle={{color: '#1CC625'}}
                      timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                      separatorStyle={{color: '#1CC625'}}
                      timeToShow={['S']}
                      timeLabels={{s: null}}
                      showSeparator
                    ></CountDown>