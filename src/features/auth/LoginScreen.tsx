import { View, StatusBar, Platform, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomTest';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import SocialLogin from '@components/ui/SocialLogin';
import { resetAndNavigate } from '@utils/NavigationUtils';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';
const LoginScreen: FC = () => {
  const { styles: loginStyle } = useStyles(loginStyles);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffSetHeight = useKeyboardOffsetHeight();
  const [Phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handledLogin = async () => {
     setLoading(true);
     setTimeout(()=>{
      setLoading(false);
      resetAndNavigate('UserBottomTab');
     },2000);
  };

  useEffect(()=>{
    if(keyboardOffSetHeight === 0){
       Animated.timing(animatedValue,{toValue:0,duration:500,useNativeDriver:true}).start();
      }else{
      Animated.timing(animatedValue,{toValue:-keyboardOffSetHeight * 0.25,duration:500,useNativeDriver:true}).start();
    }
  });
  return (
    <View style={loginStyle.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image source={require('@assets/images/login.png')} style={loginStyle.cover} />
      <Animated.ScrollView style={{transform:[{translateY:animatedValue}]}}bounces={false} keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" contentContainerStyle={loginStyle.bottomContainer}>
        <CustomText fontFamily="Okra-Bold" variant="h2" style={loginStyle.title}>
          India's #1 Food Delivery and Dining App
        </CustomText>
        <BreakerText text="Log In or Sign up" />
        <PhoneInput
          onFocus={() => { }}
          onBlur={() => { }}
          value={Phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity style={loginStyle.buttonContainer} activeOpacity={0.8} disabled={loading} onPress={handledLogin}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText
              variant="h5"
              fontFamily="Okra-Medium"
              color="#fff"
            >
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="or" />
        <SocialLogin/>
      </Animated.ScrollView>
      <View style={loginStyle.footer}>
        <CustomText>
          By continuing, you agree to Zomato's
        </CustomText>
        <View style={loginStyle.footerTextContainer}>
          <CustomText style={loginStyle.footerText}>
            Terms of Service
          </CustomText>
          <CustomText style={loginStyle.footerText}>
            Privacy Policy
          </CustomText>
          <CustomText style={loginStyle.footerText}>
            Content Policies
          </CustomText>
        </View>
      </View>

    </View>
  );
};

export default LoginScreen;
