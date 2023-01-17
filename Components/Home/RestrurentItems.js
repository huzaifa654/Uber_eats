import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '12 $',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '12 $',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '12 $',
    reviews: 700,
    rating: 4.9,
  },
];
export default function RestrurentItem({navigation, ...props}) {
  return (
    <>
      {props.resturentData.map((resturent, index) => (
        // eslint-disable-next-line react/jsx-key
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{marginBottom: 30}}
          onPress={() =>
            navigation.navigate('ResturentDetail', {
              name: resturent.name,
              image: resturent.image_url,
              price: resturent.price,
              reviews: resturent.review_count,
              rating: resturent.rating,
              categories: resturent.categories,
            })
          }>
          <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <RestrurentImage image={resturent.image_url} />
            <ResturentInfo name={resturent.name} rating={resturent.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestrurentImage = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: '100%',
          height: 180,
        }}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};
const ResturentInfo = props => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 12,
          marginTop: 7,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          {props.name}
        </Text>
        <View
          style={{
            marginRight: 15,
            borderRadius: 150 / 2,
            backgroundColor: '#eee',
            // padding: 9,
            height: 30,

            width: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', marginTop: 5}}>{props.rating}</Text>
        </View>
      </View>
      <View style={{marginLeft: 12, marginTop: -10}}>
        <Text style={{fontSize: 13, color: 'grey'}}>30-45 . min</Text>
      </View>
    </>
  );
};
