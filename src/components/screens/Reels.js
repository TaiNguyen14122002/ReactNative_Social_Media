import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../screenComponents/ReelsComponent';
import Ionic from 'react-native-vector-icons/Ionicons';
const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        marginBottom: 10,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels

        
          
          <Ionic
            name="chevron-down"
            style={{ fontSize: 15, opacity: 0.2 }}
          />
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
