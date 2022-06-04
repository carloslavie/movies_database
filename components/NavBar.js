/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, SafeAreaView, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = ({navigation, main = false}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon name={'search-outline'} size={30} color={'red'} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={40} color={'red'} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    // flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    padding: 10,
    alignItems:'center',
    display: 'flex',
  },
  logoImage:{
    width: 50,
    height: 50,
  },
})
export default NavBar;
