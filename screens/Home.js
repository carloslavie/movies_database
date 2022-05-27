/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const Home = ({navigation}) => {
  const dimentions = Dimensions.get('screen');
  const [movieImages, setMovieImages] = useState();
  const [movies, setMovies] = useState();
  const [tv, setTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMovies,
          popularMovies,
          popularTv,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesArray = [];
          upcomingMovies.forEach(element => {
            moviesArray.push(
              'https://image.tmdb.org/t/p/w500' + element.poster_path,
            );
          });
          setMovieImages(moviesArray);
          setMovies(popularMovies);
          setTv(popularTv);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .finally(() => {
        setLoaded(true);
      });
  }, []);
  return (
    <>
      {loaded && (
        <ScrollView>
          {movieImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={movieImages}
                dotStyle={styles.dotStyles}
                sliderBoxHeight={dimentions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {movies && (
            <View style={styles.carousel}>
              <List title="Popular movies" movies={movies} navigation={navigation} />
            </View>
          )}
          {tv && (
            <View style={styles.carousel}>
              <List title="Popular Tv" movies={tv} navigation={navigation}/>
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List title="Family Movies" movies={familyMovies} navigation={navigation}/>
            </View>
          )}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List title="Documentary Movies" movies={documentaryMovies} navigation={navigation}/>
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
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
