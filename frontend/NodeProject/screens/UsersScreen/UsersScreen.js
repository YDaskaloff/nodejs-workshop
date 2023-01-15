import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';

import styles from './styles';

const UsersScreen = ({route, navigation}) => {
  const id = route?.params?.id;
  const buttonText = id ? 'Edit user' : 'Create user';

  const [user, setUser] = useState();
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data.data.user))
        .catch(err => {
          console.log(err.message);
        });
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
      setPhone(user.phone.toString());
      setAddress(user.address);
    }
  }, [user]);

  const createUser = async () => {
    await fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        username: userName,
        email,
        phone,
        address,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigation.replace('Home');
  };

  const editUser = async () => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        username: userName,
        email,
        phone,
        address,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigation.replace('Home');
  };

  const buttonController = () => {
    if (id) {
      editUser();
    } else {
      createUser();
    }
  };

  return (
    <View style={styles.container}>
      <TextInputWithLabel label="Name" value={name} onChangeText={setName} />
      <TextInputWithLabel
        label="Username"
        value={userName}
        onChangeText={setUsername}
      />
      <TextInputWithLabel label="Email" value={email} onChangeText={setEmail} />
      <TextInputWithLabel label="Phone" value={phone} onChangeText={setPhone} />
      <TextInputWithLabel
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity style={styles.editButton} onPress={buttonController}>
        <Text style={styles.editButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsersScreen;
