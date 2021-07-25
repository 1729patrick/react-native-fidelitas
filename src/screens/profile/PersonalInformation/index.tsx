import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import styles from './styles';

const PersonalInformation = () => {
  useHideTabBar();

  return (
    <View>
      <Header title="Informações Pessoais" />
      <ScrollView
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Seu nome</Text>
        <Input placeholder="Nome" style={styles.firstInput} />
        <Input placeholder="Apelido" />

        <Text style={styles.title}>Seus contatos</Text>
        <Input placeholder="Telemóvel" style={styles.firstInput} />
        <Input placeholder="E-mail" />

        <Text style={styles.title}>Sua palavra-passe</Text>
        <Input placeholder="Palavra-passe" style={styles.firstInput} />
      </ScrollView>
    </View>
  );
};

export default PersonalInformation;
