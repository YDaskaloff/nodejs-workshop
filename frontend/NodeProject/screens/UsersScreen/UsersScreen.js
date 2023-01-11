import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';

import styles from './styles';

const UsersScreen = ({route}) => {
  // Here we should get the id from the navigation and make request to get the current user
  const user = route?.params?.user || null;
  const buttonText = user ? 'Edit user' : 'Create user';

  const [name, setName] = useState(user?.name ?? '');
  const [userName, setUsername] = useState(user?.username ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [address, setAddress] = useState(
    user?.address ? `${user.address.street}, ${user.address.city}` : '',
  );

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
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsersScreen;
