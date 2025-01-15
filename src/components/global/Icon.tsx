import React, { FC } from 'react';
import Ionicons from  'react-native-vector-icons/Ionicons';
import  MaterilaCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons';
import  MaterialIcons from  'react-native-vector-icons/MaterialIcons';
interface IIconProps {
    color?:string;
    size?:number;
    name:string;
    iconFamily:'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons'
}
const Icon:FC<IIconProps> = ({color,size,name,iconFamily}) => {
  return (
    <>
    {iconFamily === 'Ionicons' && <Ionicons name ={name} size ={ size} color={color}/> }
    {iconFamily === 'MaterialCommunityIcons' && <MaterilaCommunityIcons name ={name} size ={ size} color={color}/> }
    {iconFamily === 'MaterialIcons' && <MaterialIcons name ={name} size ={ size} color={color}/> }
    </>
  );
};

export default Icon;
