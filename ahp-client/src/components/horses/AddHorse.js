import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

class AddHorse extends Component {

  constructor() {
    super();
    this.state = {
      id: null,  
      name: '',
      status: '',
      description: '',
      breed: '',
      gender: '',
      age: 1,
      size: '',
      color: '',
      ergency: '',
      contact: {},
      capabilities: [],
      media: [],
      organization_id: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let id = uuid4();
    const { id, name, status, description, breed, gender } = this.state;

    axios.post('/api/horses', { id, name, status, description, breed, gender })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, status, description, breed, gender } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-name">
              ADD HORSE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="name" />
              </div>
              <div class="form-group">
                <label for="status">status:</label>
                <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="status" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="breed">Breed:</label>
                <input type="number" class="form-control" name="breed" value={breed} onChange={this.onChange} placeholder="breed" />
              </div>
              <div class="form-group">
                <label for="gender">gender:</label>
                <input type="text" class="form-control" name="gender" value={gender} onChange={this.onChange} placeholder="gender" />
              </div>
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="age" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddHorse;
