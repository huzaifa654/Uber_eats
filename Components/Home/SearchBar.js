import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchBar(props) {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyDuBEmiBpMTiuhaAX-9ZhYGpRRto3k-T1I'}}
        placeholder="Search"
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          props.cityHandler(city);
        }}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            // marginTop: 7,
            // marginHorizontal: 15,
            // marginBottom: 15,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            marginBottom: 15,
            // marginHorizontal: 15,
            alignItems: 'center',
            marginRight: 25,
            marginLeft: 15,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              backgroundColor: 'white',
              paddingVertical: 6,
              borderRadius: 50,
              marginRight: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircle" size={15} color="black" />

            <Text style={{color: 'black', fontSize: 15, marginLeft: 7}}>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
