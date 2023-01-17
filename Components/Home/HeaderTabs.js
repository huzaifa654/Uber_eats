import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function HeaderTabs(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 15}}>
      <HeadeButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeadeButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}
const HeadeButton = props => {
  return (
    <TouchableOpacity
      style={{
        // color: props.textColor,
        marginTop: 17,
        backgroundColor: props.activeTab == props.text ? 'black' : 'white',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab == props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
