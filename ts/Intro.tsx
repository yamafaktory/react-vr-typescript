import * as React from 'react'
import {
  asset,
  Pano,
  Text,
  View,
} from 'react-vr'

export default function Intro (): JSX.Element {
  return (
    <View>
      <Pano source={asset('chess-world.jpg')} />
      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -4]}],
        }}>
        React VR
      </Text>
      <Text
        style={{
          color: '#314F7C',
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -4]}],
        }}>
        powered by TypeScript!
      </Text>
    </View>
  )
}
