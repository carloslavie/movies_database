/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {getMovie} from '../services/services';

const noImage = require('../assets/images/noimage.png');
const screenHeight = Dimensions.get('screen').height;

const Detail = ({navigation, route}) => {
  const movieId = route.params.movie;
  const [detail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <>
      {loaded ? (
        <ScrollView>
          <Image
            style={styles.imageMovie}
            resizeMode="cover"
            source={
              detail.poster_path
                ? {uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                : noImage
            }
          />
        </ScrollView>
      ) :
      <ActivityIndicator size="large" />
    }
    </>
  );
};

const styles = StyleSheet.create({
  imageMovie: {
    height: screenHeight / 2.5,
  },
});
export default Detail;
