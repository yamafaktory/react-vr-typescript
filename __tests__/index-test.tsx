import 'react-native'
import 'react-vr'
import * as React from 'react'
import Index from '../index.vr'

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  )
})
