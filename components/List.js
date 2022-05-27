/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  render(){
    const {navigation, title, movies} = this.props;
    return (
      <>
        <View style={styles.list}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={movies}
            horizontal={true}
            renderItem={({item}) => <Card item={item} navigation={navigation}/>}
          />
        </View>
      </>
    );
  }  
};

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom: 20,
  },
  list:{
    marginTop: 50,
  }
})

export default List;
