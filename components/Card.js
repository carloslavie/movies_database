/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const noImage = require('../assets/images/noimage.png');
class Card extends React.PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', {movie:item.id})}>
        <Image
          style={styles.imageMovie}
          resizeMode="cover"
          source={
            item.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
              : noImage
          }
        />
        {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems:'center',
    height: 200,
  },
  imageMovie: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign:'center',
    top:10,
  },
});

export default Card;
