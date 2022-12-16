import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  const navigateToUserForm = () => {
    navigation.navigate('Users');
  };
  return (
    <View>
      <Text>This is the Home screen</Text>
      <Button onPress={navigateToUserForm} title="Go to users" />
    </View>
  );
};
export default HomeScreen;
