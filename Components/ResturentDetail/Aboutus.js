import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Aboutus(props) {
  const {name, price, reviews, rating, categories, image} = props.route.params;

  const formattedCatagories = categories.map(cat => cat.title).join('•');
  const description = `${formattedCatagories}  ${
    price ? '•' + '  ' + price : '$$'
  }  • 🎫  • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestrurentImage image={image} />
      <RestrurentName name={name} />
      <RestrurentDescription description={description} />
    </View>
  );
}

const RestrurentImage = props => {
  return (
    <View>
      <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
    </View>
  );
};
const RestrurentName = props => {
  return (
    <View>
      <Text
        style={{
          fontSize: 29,
          color: 'black',
          fontWeight: '600',
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        {props.name}
      </Text>
    </View>
  );
};
const RestrurentDescription = props => {
  return (
    <View>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: '500',
          fontSize: 15.5,
          color: 'black',
        }}>
        {props.description}
      </Text>
    </View>
  );
};
