import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
import { Image } from 'react-native';
import { image } from '../constants';


const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black bg-none">
        <Text className="text-3xl  font-serif text-fuchsia-600"> Cuttie</Text>
      <Link className="text-2xl font-black text-orange-500"href="/home">Go to home</Link>
      <Link className="text-2xl font-medium text-orange-500" href="/signup">Go to Sign up</Link>
      <Link className="text-2xl font-medium text-orange-500" href="/login">Go to login</Link>

    </View>
  )
}

export default index

// const styles = StyleSheet.create({
//  container:{
//        desplay:'flex',
//        flex:1,
//       alignItems:'center',
//       justifyContent:'center',
//     }
// })