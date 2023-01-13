import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
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
  }, []);

  const goToCreateUser = () => {
    navigation.replace('Users');
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
        key={item.id}
      />
    );
  };

  return (
    <>
      <FlatList
        data={users}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={goToCreateUser}
            style={styles.createUserButton}>
            <Text style={styles.createButtonText}>Create user</Text>
          </TouchableOpacity>
        }
        scrollEnabled
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default HomeScreen;
