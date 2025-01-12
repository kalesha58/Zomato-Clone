import { Image, Platform, StatusBar, View } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { splashStyles } from '@unistyles/authStyles';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CustomText from '@components/global/CustomTest';
const SplashScreen: FC = () => {

  const { styles: splashStyle } = useStyles(splashStyles);
  return (
    <View style={splashStyle.container} >
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image source={require('@assets/images/logo_t.png')} style={splashStyle.logoImage} />

      <Animated.View style={splashStyle.animatedContainer} entering={FadeInDown.delay(400).duration(800)} >
        <Image source={require('@assets/images/tree.png')} style={splashStyle.treeImage} />
        <CustomText variant="h5" style={splashStyle.msgText} fontFamily = "Okra-Medium" color="#fff">
           carbon and plastic Neutral Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
