import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';

const Signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-6xl font-pmedium mb-8">Signup</Text>
      <TextInput
        placeholder="Email"
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Username"
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        className="w-full p-4 mb-4 border border-gray-300 rounded"
      />
      <Button title="Signup" onPress={() => alert('Successfully signed up')} />
    </View>
  );
};

export default Signup;
