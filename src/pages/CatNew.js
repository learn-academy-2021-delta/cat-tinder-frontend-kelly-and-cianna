import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class CatNew extends Component{
  constructor(props){
    super(props)
      this.state = {
        form: {
          name: "",
          age: "",
          enjoys: ""
        }
      }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  render(){
    return(
      <>
        <h1>Enter new cat:</h1>
        <Form>
          <FormGroup>
            <Label for="name">
              Name:
            </Label>
            <Input
              name="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Age:
            </Label>
            <Input
              name="age"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Hobbies & Enjoyment:
            </Label>
            <Input
              name="enjoys"
              type="text"
            />
          </FormGroup>
          <Button>
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default CatNew