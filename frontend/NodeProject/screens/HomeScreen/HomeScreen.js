import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';
import UserCard from '../../components/UserCard/UserCard';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(data => setUsers(data.data.users))
      .catch(err => {
        console.log(err.message);
      });
  });

  const goToCreateUser = () => {
    navigation.navigate('Users');
  };

  const goToEditUser = user => {
    // here we should put id to make request for different users
    navigation.navigate('Users', {user});
  };

  const renderItem = ({item}) => {
    return (
      <UserCard
        user={item}
        editUserNavigationHandler={() => goToEditUser(item)}
      />
    );
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={goToCreateUser}
        style={styles.createUserButton}>
        <Text style={styles.createButtonText}>Create user</Text>
      </TouchableOpacity>
      {users.map(user => renderItem({item: user}))}
    </ScrollView>
  );
};
export default HomeScreen;
