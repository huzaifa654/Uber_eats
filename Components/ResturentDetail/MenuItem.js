import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MyCart from './MyCart';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function MenuItem({
  resturentName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkBoxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        resturentName: resturentName,
        checkBoxValue: checkBoxValue,
      },
    });
  };
  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title == food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <View key={index}>
            <View style={styles.menuItem}>
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  iconStyle={{
                    borderRadius: 0,
                    borderColor: 'lightgray',
                  }}
                  fillColor="green"
                  isChecked={isFoodInCart(food, cartItems)}
                  onPress={checkBoxValue => selectItem(food, checkBoxValue)}
                />
              )}
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider width={0.5} orientation={'vertical'} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const FoodInfo = props => {
  return (
    <View style={styles.foodinfo}>
      <Text style={styles.foodtitle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};
const FoodImage = ({marginLeft, ...props}) => {
  return (
    <View style={{}}>
      <Image
        source={{uri: props.food.image}}
        style={{width: 90, height: 80, borderRadius: 8, marginLeft: marginLeft}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodinfo: {
    width: 140,
    justifyContent: 'space-evenly',
    // marginRight: 8,
  },
  foodtitle: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
});
