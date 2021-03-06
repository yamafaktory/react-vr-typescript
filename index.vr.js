// This file is the entry point for the React VR application.
// See https://facebook.github.io/react-vr/docs/project-configuration.html
import React from 'react'
import { AppRegistry, View } from 'react-vr'

// Now import a TypeScript file!
import Intro from './ts/Intro'

export default function react_vr_typescript() {
  return (
    <View>
      <Intro />
    </View>
  )
}

AppRegistry.registerComponent('react_vr_typescript', () => react_vr_typescript)
