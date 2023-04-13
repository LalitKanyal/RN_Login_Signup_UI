import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Btn from './Btn';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Register
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          {/* <Text
            style={{
              fontSize: 40,
              color: darkGreen,
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text> */}
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create a new account
          </Text>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email Address" keyboardType={'email-address'} />
          <Field placeholder="Mobile Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View style={{display: 'flex', flexDirection: 'row', width: '70%'}}>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                paddingLeft:20
              }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}>
              Terms &
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '70%',
              paddingRight: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                paddingLeft:20
              }}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  
                }}>
                conditions
              </Text>{' '}
              and{' '}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine: 'underline',
                justifyContent: 'center',
                marginBottom: 20
              }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account Created Successfully');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
