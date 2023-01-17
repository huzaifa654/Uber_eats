import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color} from 'react-native-elements/dist/helpers';

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        margin: 10,
      }}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
      {/* <Text>Bottom</Text> */}
    </View>
  );
}

const Icon = props => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          color="black"
          style={{
            alignSelf: 'center',
            marginBottom: 3,
          }}
        />
        <Text style={{color: 'black'}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
