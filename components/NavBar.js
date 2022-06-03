/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={()=>{
          navigation.goBack();
          }}>
          <Icon name={'chevron-back'} size={40} color={'red'}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavBar;
