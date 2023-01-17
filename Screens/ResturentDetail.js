import {Button, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';

import {Divider} from 'react-native-elements';
import Aboutus from '../Components/ResturentDetail/Aboutus';
import MenuItem from '../Components/ResturentDetail/MenuItem';
import MyCart from '../Components/ResturentDetail/MyCart';
import {useSelector} from 'react-redux';

export default function ResturentDetail({route, navigation}) {
  // const items = useSelector(state => state);

  const foods = [
    {
      title: 'Chicken Tikka',
      description: 'with extra sauce and butter',
      price: '$ 13.30',
      image:
        'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1672836327~exp=1672836927~hmac=66e2d0383cf3c0fa4f51e194076ceb94d51416594127349f7d42a1e15b142e1d',
    },
    {
      title: 'vegetable, seeds',
      description: 'Healthy food clean eating selection: fruit',
      price: '$ 17.30',
      image:
        'https://www.shutterstock.com/shutterstock/photos/722718097/display_1500/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereal-leaf-vegetable-on-722718097.jpg',
    },
    {
      title: 'Pizza',
      description: 'with extra sauce and butter',
      price: '$ 13.70',
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg',
    },
    {
      title: 'Cacke',
      description: 'cake with white cream',
      price: '$ 13.30',
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits.jpg',
    },
    {
      title: 'Chicken Burger',
      description: 'with extra sauce and butter',
      price: '$ 19.30',
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2022/07/haloumi-burger-with-french-fries.jpg',
    },
    {
      title: 'Tea',
      description: 'with cream',
      price: '$ 13.30',
      image:
        'https://www.foodiesfeed.com/wp-content/uploads/2022/06/flat-white-and-matcha-latte-in-cafe.jpg',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Aboutus route={route} />
      {/* <Button title="akaakka" onPress={() => console.log(items)} /> */}

      <Divider width={1.8} style={{marginHorizontal: 0, marginTop: 6}} />
      {/* <ScrollView> */}

      <MenuItem resturentName={route.params.name} foods={foods} />
      <MyCart navigation={navigation} />

      {/* </ScrollView> */}
    </View>
  );
}
