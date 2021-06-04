import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Menu = ({ data, openCategory, openProduct }) => {
  return (
    <View style={{ paddingTop: 100 }}>
      {data.map(x => {
        if (x.type === 'category') {
          return (
            <RectButton
              key={x.title}
              onPress={() => openCategory(x.items)}
              style={{ height: 100, backgroundColor: 'red' }}>
              <Text>cat: {x.title}</Text>
            </RectButton>
          );
        }

        if (x.type === 'product') {
          return (
            <RectButton
              key={x.title}
              onPress={() => openProduct(x)}
              style={{ height: 100, backgroundColor: 'red' }}>
              <Text>prod: {x.title}</Text>
            </RectButton>
          );
        }
      })}
    </View>
  );
};

export default Menu;
