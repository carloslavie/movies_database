/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = '8d52822d7382bf63421215cfbb4acad7';
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${apiURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    // console.log('respuesta service', JSON.stringify(response.data, null, 2));
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};
export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${apiURL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};
export const getPopularTv = async () => {
  try {
    const response = await axios.get(`${apiURL}/tv/popular?api_key=${apiKey}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};
export const getFamilyMovies = async () => {
  try {
    const response = await axios.get(`${apiURL}/discover/movie?api_key=${apiKey}&with_genres=10751&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};
export const getDocumentaryMovies = async () => {
  try {
    const response = await axios.get(`${apiURL}/discover/movie?api_key=${apiKey}&with_genres=99&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};
export const getMovie = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/movie/${id}?api_key=${apiKey}`);
    console.log('respuesta 2', response.data)
    return response.data;
  } catch (error) {
    console.log('error');
  }
};
