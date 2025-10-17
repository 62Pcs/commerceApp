
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../utils/IMAGES'
import { TextInput } from 'react-native';
// import eye from '../images/eye.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [remember, setRemember] = useState(false)
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing fields', 'Please Enter both Email and Password.');
      return;
    }
    const emailEegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailEegex.test(email)) {
      Alert.alert('Invaild Email', 'Please. Enter a vaild email address');
      return;
    }
    if (password !== 'Punit@1122') {
      Alert.alert('Incorrectb Password', 'Password must be"Punit@1122"');
      return;

    }
    Alert.alert('Login Successful ✅', `Welcome, ${email}\nRemember Me: ${remember ? 'Yes' : 'No'}`);

  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', alignItems: 'center' }}>
      <Image source={IMAGES.playstore}
        style={{ marginTop: 100, width: 70, height: 70, alignSelf: 'center', borderRadius: 15, }}></Image>
      <Text style={{ marginTop: 40, fontSize: 24, fontWeight: '700', color: '#000' }}>Wlcome Back!</Text>
      <Text style={{ fontSize: 20, color: '#555', marginBottom: 30, }}>Login to your account</Text>

      <View style={{
        width: '80%', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, marginBottom: 15,
        shadowColor: '#888', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, elevation: 3,

      }}>
        <TextInput placeholder='Enter Email ID' placeholderTextColor={'#888'}
          keyboardType='email-address' value={email} onChangeText={setEmail}
          style={{ height: 50, color: '#000', fontSize: 16, }} />

      </View>

      <View style={{
        flexDirection: 'row', width: '80%', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15,
        shadowColor: '#888', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, elevation: 3, alignItems: 'center',
      }}>

        <TextInput placeholder='Enter Password' placeholderTextColor={'#888'}
          value={password} onChangeText={setPassword} secureTextEntry={secureText}
          style={{ height: 50, color: '#000', fontSize: 16, width: '90%', }} />

        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Image
            source={
              secureText
                ? IMAGES.eye // closed eye
                : IMAGES.off // open eye
            }
            style={{ width: 24, height: 24, tintColor: '#000', }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', width: '78%', }}>
        <TouchableOpacity onPress={() => setRemember(!remember)}
          style={{ width: 18, height: 18, borderRadius: 2, borderWidth: 1.2, borderColor: '#000', justifyContent: 'center', marginRight: 8, backgroundColor: remember ? '#000' : '#fff', }}>
          {remember ? <Text style={{ color: '#fff', fontSize: 12, }}>✓</Text> : null}
        </TouchableOpacity>
        <Text style={{ color: '#000' }}>Remember Me</Text>
      </View>
      <TouchableOpacity style={{ width: '80%', height: 56, backgroundColor: '#000', borderRadius: 10, justifyContent: 'center', marginTop: 10, }}
        onPress={handleLogin}>

        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', alignSelf: 'center', }}>
          Login
        </Text>

      </TouchableOpacity>

    </View>


  );
};

export default Login;