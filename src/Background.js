import { ImageBackground, View } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require('./images/background.jpg')} style={{height:'100%'}}/>
      <View style={{position: 'absolute'}}>
        {children}
      </View>
    </View>
  )
}

export default Background
// https://github.com/LalitKanyal/RN_Login_Signup_UI

