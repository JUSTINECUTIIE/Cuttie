import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-6xl font-pmedium mb-8">Login</Text>
      <TextInput
        placeholder="Username/Email"
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <Button title="Login" onPress={() => alert('Successfully logged in')} />
    </View>
  );
};

export default Login;
