import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const areas = ['Portuguesa', '•', 'Tradicional', '•', 'Marinha'];

const Home = () => {
  return (
    <>
      <FastImage
        source={require('../../../assets/background_home.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Restaurante do Pastel de bacalhau</Text>
        <View style={styles.areas}>
          {areas.map(type => (
            <Text style={styles.area}>{type}</Text>
          ))}
        </View>
        <View style={styles.line} />
      </View>
    </>
  );
};

export default Home;
