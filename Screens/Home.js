import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../Components/Home/HeaderTabs';
import SearchBar from '../Components/Home/SearchBar';
import Catagories from '../Components/Home/Catagories';
import RestrurentItems, {
  localRestaurants,
} from '../Components/Home/RestrurentItems';
import {Divider} from 'react-native-elements';
import BottomTabs from '../Components/Home/BottomTabs';

const YELP_API_KEY =
  'lPLBkvlTm-NcwYY4c_QE9c-1n0QhrA7INfCre6t9D5V_VWFqprcGYiauTTjdJPNEYd6RitUZ1cjoYq_x2fuYV0cXTk7aBGKLH2W0mx3UyYHK8JHJTkhmnFfTySC0Y3Yx';

export default function Home({navigation}) {
  const [resturentData, setresturentData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setresturentData(
          json.businesses.filter(bussiness =>
            bussiness.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', marginTop: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestrurentItems
          resturentData={resturentData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
