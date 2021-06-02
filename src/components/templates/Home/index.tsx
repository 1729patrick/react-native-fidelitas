import React, { useState } from 'react';
import { View, Text, StatusBar, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import StyleGuide from '../../../util/StyleGuide';
import styles from './styles';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../organisms/TabBar/constants';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import RectButton from '../../atoms/buttons/Rect';
import Map from '../../organisms/Map';
const areas = ['Portuguesa', '•', 'Tradicional', '•', 'Marinha'];

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const { width } = Dimensions.get('window');

const Home = () => {
  const [dark, setDark] = useState(false);
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const animatedImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(translationY.value, [0, 300], [0, -150]),
        },
      ],
    };
  }, [translationY]);

  const animatedHeader = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [275, 300],
      [0, 1],
      Extrapolate.CLAMP,
    );

    if (translationY.value >= 287.5 && !dark) {
      runOnJS(setDark)(true);
    } else if (translationY.value <= 287.5 && dark) {
      runOnJS(setDark)(false);
    }

    return {
      opacity,
    };
  }, [translationY, dark]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle={dark ? 'dark-content' : 'light-content'}
      />
      <AnimatedFastImage
        source={require('../../../assets/background_home.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={[styles.image, animatedImage]}
      />
      <Animated.View style={[styles.header, animatedHeader]} />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <View style={styles.container}>
          <Animated.Text style={[styles.title]}>
            Restaurante do Pastel de bacalhau
          </Animated.Text>
          <View>
            <View style={styles.areas}>
              {areas.map((type, index) => (
                <Text style={styles.area} key={index}>
                  {type}
                </Text>
              ))}
            </View>

            <Text style={StyleGuide.typography.caption}>
              <Text style={[StyleGuide.typography.caption, styles.status]}>
                Aberto
              </Text>{' '}
              • Fecha hoje às 18:00
            </Text>
          </View>
          <View style={styles.line} />

          <View>
            <Text
              style={[
                StyleGuide.typography.title3,
                { marginBottom: StyleGuide.spacing * 3 },
              ]}>
              Facilidades
            </Text>

            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              Wi-fi
            </Text>
            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              Vegans
            </Text>
            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              Aceitamos cartão de crédito
            </Text>
            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              Aceitamos dinheiro
            </Text>

            <RectButton
              title="Ver todas as 23 facilidades"
              onPress={() => {}}
              borderRadius={8}
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              backgroundColor={StyleGuide.palette.primary}
              outline
            />
          </View>

          <View style={styles.line} />

          <View>
            <Text
              style={[
                StyleGuide.typography.title3,
                { marginBottom: StyleGuide.spacing * 3 },
              ]}>
              Contatos
            </Text>

            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              +55 49991118313
            </Text>
            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              +55 12132132138
            </Text>
            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              pastel@bacalhau.pt
            </Text>
          </View>
          <View style={styles.line} />

          <View>
            <Text
              style={[
                StyleGuide.typography.title3,
                { marginBottom: StyleGuide.spacing * 3 },
              ]}>
              Localização
            </Text>

            <Text
              style={[
                StyleGuide.typography.caption,
                { marginBottom: StyleGuide.spacing },
              ]}>
              Avenida Professor Orlando Ribeiro, 2910-248, Setúbal, Portugal
            </Text>
            <Map width={width - StyleGuide.spacing * 6} />
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default Home;
