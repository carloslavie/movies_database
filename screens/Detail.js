/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import {getMovie} from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';
// import VideoPlayer from 'react-native-video-controls';

const noImage = require('../assets/images/noimage.png');
const screenHeight = Dimensions.get('screen').height;

const Detail = ({navigation, route}) => {
  const movieId = route.params.movie;
  const [detail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  const showVideo = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      {loaded ? (
        <>
          <ScrollView>
            <Image
              style={styles.imageMovie}
              resizeMode="cover"
              source={
                detail.poster_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
                    }
                  : noImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton handlePress={() => showVideo()} />
              </View>
              <Text style={styles.movieTitle}>{detail.title}</Text>
              {detail.genres && (
                <View style={styles.genreContainer}>
                  {detail.genres.map((item, index) => (
                    <Text style={styles.genreText} key={index}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              )}
              <StarRating
                maxStars={5}
                disabled={true}
                fullStarColor={'gold'}
                starSize={30}
                rating={detail.vote_average / 2}
              />
              <Text style={styles.overview}>{detail.overview}</Text>
              <Text style={styles.release}>
                Release date: {dateFormat(detail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal antimationType="Slide" visible={modalVisible}>
            <View style={styles.videoModal}>
              {/* <Pressable onPress={() => showVideo()}>
                <Text>Hide Modal</Text>
              </Pressable> */}
              {/* <VideoPlayer
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                // navigator={this.props.navigator}
              /> */}
              ;
            </View>
          </Modal>
        </>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  genreText: {
    marginRight: 10,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  imageMovie: {
    height: screenHeight / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  videoModal: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Detail;
