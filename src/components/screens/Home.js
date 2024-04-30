import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          marginTop: 10
        }}>
        {/* <FontAwesome name="plus-square-o" style={{fontSize: 24}} /> */}
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
            color: 'black'
          }}>
          Instagram
        </Text>
        <View style={{ flexDirection: 'row', color: 'white' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Activity')}>
            <Ionic name="heart-outline" style={{ padding: 5, fontSize: 24, color: 'black', fontWeight: 600 }} />

          </TouchableOpacity>


          <Feather name="navigation" style={{ padding: 5, fontSize: 24, color: 'black' }} />
        </View>

      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />

        </View>

      </ScrollView>
    </View>
  );
};

export default Home;
