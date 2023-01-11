import React from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import UserCard from '../../components/UserCard/UserCard';
import styles from './styles';
import {users} from './users';
const HomeScreen = ({navigation}) => {
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
    <>
      <TouchableOpacity
        onPress={goToCreateUser}
        style={styles.createUserButton}>
        <Text style={styles.createButtonText}>Create user</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled
      />
    </>
  );
};
export default HomeScreen;
