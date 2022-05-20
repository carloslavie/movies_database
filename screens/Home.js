/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const Home = () => {
  const dimentions = Dimensions.get('screen');
  const [movieImages, setMovieImages] = useState([]);
  const [movies, setMovies] = useState('');
  useEffect(() => {
    getUpcomingMovies().then(movie => {
      const moviesArray = [];
      movie.forEach(element => {
        moviesArray.push(
          'https://image.tmdb.org/t/p/w500' + element.poster_path,
        );
      });
      setMovieImages(moviesArray);
    });
    getPopularMovies().then(movie => {
      setMovies(movie);
    });
  }, []);
console.log('movies', movies)
  return (
    <>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={movieImages}
          dotStyle={styles.dotStyles}
          sliderBoxHeight={dimentions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <List title="Popular movies" movies={movies}/>
      </View>
      <View style={styles.carousel}>
        <List title="Popular movies" movies={movies}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  dotStyles: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
});
export default Home;
