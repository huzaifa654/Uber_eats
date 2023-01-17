import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import {ScrollView} from 'react-native-gesture-handler';
import firebase from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function MyCart({navigation}) {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
  const addOrderTofirebase = () => {
    setLoading(true);
    console.log('hahhahha');
    const db = firebase.firestore();
    db.collection('orders').add({
      items: items,
      resturentName: resturentName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  // console.log('price', totalUSD);
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckOutConatiner}>
            <Text style={styles.resturentName}>{resturentName}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {items.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}
              <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>Subtoal</Text>
                <Text>{totalUSD}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.viewCartBtn}
                  onPress={() => {
                    addOrderTofirebase();
                    setTimeout(() => {
                      setLoading(false);
                      navigation.navigate('OrderCompleted');
                    }, 2500);
                    setModalVisible(false);
                  }}>
                  <Text style={styles.viewCart}>Checkout</Text>
                  <Text
                    style={{
                      position: 'absolute',
                      color: 'white',
                      justifyContent: 'flex-end',
                      right: 23,
                    }}>
                    {total ? totalUSD : ''}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.cartparntcontainet}>
          <View style={styles.cartConatier}>
            <TouchableOpacity
              style={styles.viewCartBtn}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.viewCart}>View Cart</Text>
              <Text style={styles.priceUSD}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            opacity: 0.6,
            position: 'absolute',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            alignItems: 'center',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  priceUSD: {
    color: 'white',
    fontSize: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCart: {
    color: 'white',
    marginTop: 0,
    fontSize: 20,
    left: 93,
  },
  viewCartBtn: {
    position: 'relative',
    marginTop: 20,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    width: 300,
    height: 45,
    flexDirection: 'row',
  },
  cartConatier: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  cartparntcontainet: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    zIndex: 999,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',

    // backgroundColor: 'blue',
  },
  modalCheckOutConatiner: {
    backgroundColor: 'white',
    padding: 16,
    height: 350,
    borderWidth: 1,
  },
  resturentName: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  subTotal: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
