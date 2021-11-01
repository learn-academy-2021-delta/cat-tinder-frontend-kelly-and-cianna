import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component{
  constructor(props){
    super(props)
      this.state = {
        form: {
          name: "",
          age: "",
          enjoys: ""
        },
        submitted: false
      }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createCat(this.state.form)
    this.setState({submitted: true})
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
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Add a New Cat
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex"/>}
      </>
    )
  }
}

export default CatNew