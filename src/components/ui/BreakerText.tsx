import { View } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomTest';

const BreakerText: FC<{ text: string }> = ({ text }) => {
    const { styles:loginStyle } = useStyles(loginStyles);
    return (
        <View style={loginStyle.breakerContainer}>
            <View style={loginStyle.horizontalLine} />
            <CustomText  fontSize={12} style={loginStyle.breakerText} fontFamily="Okra-Medium">{text}</CustomText>
            <View style={loginStyle.horizontalLine} />
        </View>
    );
};

export default BreakerText;
