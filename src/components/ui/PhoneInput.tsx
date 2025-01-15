import { Pressable, TextInput, View } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import CustomText from '@components/global/CustomTest';
import { Colors } from '@unistyles/Constants';
import Icon from '@components/global/icon';
interface IPhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void
    onBlur?: () => void
}
const PhoneInput: FC<IPhoneInputProps> = ({ value, onChangeText, onBlur, onFocus }) => {
    const { styles: phoneStyle } = useStyles(phoneStyles);
    return (
        <View style={phoneStyle.container}>
            <Pressable style={phoneStyle.countryPickerContainer}>
                <CustomText variant="h2">🏳️‍⚧️</CustomText>
            </Pressable>
                <Icon iconFamily="Ionicons" name="caret-down-sharp" color={Colors.lightText} size={18}/>
                <View style={phoneStyle.phoneInputContainer}>
                    <CustomText fontFamily="Okra-Bold">+91</CustomText>
                    <TextInput placeholder="Enter Phone Number" keyboardType="phone-pad" value={value} placeholderTextColor={Colors.lightText} onChangeText={onChangeText} onBlur={onBlur} onFocus={onFocus} style={phoneStyle.input}/>
                </View>
        </View>
    );
};

export default PhoneInput;
