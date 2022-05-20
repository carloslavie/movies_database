/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

class Card extends React.PureComponent {
  render(){
    const {item} = this.props;
    return (
        <TouchableOpacity style={styles.container}>
          <Image style={styles.imageMovie} resizeMode="cover" source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}}/>
        </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  imageMovie: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default Card;
