/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import {searchMoviesOrTv} from '../services/services';

const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [searchResult, setSearchResult] = useState();
  const onSubmit = query => {
    Promise.all([
      searchMoviesOrTv(query, 'movie'),
      searchMoviesOrTv(query, 'tv')
    ])
    .then(([movies, tv]) => {
      const data = [...movies, ...tv];
      setSearchResult(data);
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={'Search movie or TV show'}
          />
        </View>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{paddingRight: 10}}
          onPress={() => {
            onSubmit(text);
          }}>
          <Icon name={'search-outline'} size={30} color={'red'} />
        </TouchableOpacity>
      </View>
      <View>
        {searchResult && searchResult.length > 0 && (
          <FlatList
            numColumns={3}
            data={searchResult}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}
            keyExtractor={item => item.padding}
          />
        )}
        {searchResult && searchResult.length == 0 && (
          <View>
            <Text>No results matching your criteria</Text>
            <Text>Try different keywords</Text>
          </View>
        )}
        {!searchResult && (
          <View>
            <Text>Type something to start searching</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 10,
  },
});
export default Search;
