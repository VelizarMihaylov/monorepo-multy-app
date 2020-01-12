import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../Button'

import BaseStyles from '@fui-components/base-styles'

const ButtonStory = (): React.ReactElement => (
  <>
    <BaseStyles />
    <Button text="Hello" />
  </>
)

storiesOf('Button', module).add('Button  Story', ButtonStory)
