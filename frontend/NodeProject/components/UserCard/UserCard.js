import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const UserCard = ({editUserNavigationHandler, user}) => {
  const {name, username, email, address, phone} = user;
  const {city, street} = address;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={editUserNavigationHandler}>
        <Text style={styles.header}>{name}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.body}>
        <Text>Username: {username}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
        <Text>
          Address: {street}, {city}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
