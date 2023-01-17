import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItem from '../Components/ResturentDetail/MenuItem';
import {ScrollView} from 'react-native-gesture-handler';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Chicken Tikka',
        description: 'with extra sauce and butter',
        price: '$ 13.30',
        image:
          'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1672836327~exp=1672836927~hmac=66e2d0383cf3c0fa4f51e194076ceb94d51416594127349f7d42a1e15b142e1d',
      },
    ],
  });
  const {items, resturentName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{justifyContent: 'center', marginLeft: 16}}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Your order at {resturentName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
        </ScrollView>
        <LottieView
          style={{height: 200, alignSelf: 'center', marginBottom: 80}}
          source={require('../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
