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
      <div className="page-body">
        <h1>Enter new cat:</h1>
        <Form>
          <FormGroup>
            <Label for="name">
              Name:
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Age:
            </Label>
            <Input
              name="age"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Hobbies & Enjoyment:
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
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
      </div>
    )
  }
}

export default CatNew