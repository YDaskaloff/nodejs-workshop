import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import UserCard from '../../components/UserCard/UserCard';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const onFocus = () => {
    fetch('http://localhost:8000/users', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setUsers(data.data.users))
      .catch(err => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    navigation.addListener('focus', onFocus);

    return () => {
      navigation.removeListener('focus', onFocus);
    };
  }, [navigation]);

  const goToCreateUser = () => {
    navigation.navigate('Users');
  };

  const goToEditUser = user => {
    navigation.navigate('Users', {id: user._id});
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
