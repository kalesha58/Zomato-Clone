import { View, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '@components/global/icon';

const SocialLogin: FC = () => {
    const { styles: phoneStyle } = useStyles(phoneStyles);
    return (
        <View style={phoneStyle.socialContainer}>
            <TouchableOpacity style={phoneStyle.iconContainer}>
                <Image source={require('@assets/icons/google.png')} style={phoneStyle.gimg} />
            </TouchableOpacity>
            <TouchableOpacity style={phoneStyle.iconContainer}>
               <Icon name="logo-apple" iconFamily="Ionicons" color="#222" size={RFValue(18)}/>
            </TouchableOpacity>
            <TouchableOpacity style={phoneStyle.iconContainer}>
               <Icon name="ellipsis-horizontal-sharp" iconFamily="Ionicons" color="#222" size={RFValue(18)}/>
            </TouchableOpacity>
        </View>
    );
};

export default SocialLogin;
