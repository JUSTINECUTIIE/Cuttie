import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { image } from '../../constants'

const home = () => {
  return (
    <View>
      <Text>home</Text>
     <Image 
     source={image.testing}
     />

     <View>
      
     </View>
    </View>
  )
}

export default home