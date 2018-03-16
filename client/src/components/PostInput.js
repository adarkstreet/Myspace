import React from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

const PostTextInput = () => (
  <Form>
    <TextArea autoHeight placeholder="Share What You're Thinking With No Limit On Characters!" />
    <Button color="green" >Share</Button>
  </Form>
)

export default PostTextInput;