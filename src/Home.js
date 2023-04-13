import {View, Text} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal: 30, marginVertical: 100}}>
        <Text style={{color: '#fff', fontSize: 60}}>Welcome to</Text>
        <Text style={{color: '#fff', fontSize: 60, marginBottom: 65}}>
          HuiHui.com
        </Text>
        <Btn
          bgColor={green}
          textColor='#fff'
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor='#fff'
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
        {/* https://github.com/LalitKanyal/RN_Login_Signup_UI */}
      </View>
    </Background>
  );
};

export default Home;
