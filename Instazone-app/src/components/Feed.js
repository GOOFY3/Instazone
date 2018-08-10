import React, { Component } from 'react';

class Feed extends Component {

  constructor(props){
    super()
    // this.colors = {
    //   red:'#BA8B8B',
    //   blue:'#457C98',
    //   green:'#94DD9C'
    // }
    this.state = {
      username: ''
    }
  }

  updateUsername(event){
    // console.log('updateUsername' + event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  fetchFeed(){
    console.log('fetchFeed: ' + this.state.username)
  }

  render(){
    // const color = this.colors[this.state.username] || '#fff'
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <h4>Enter Username:</h4>
            <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" placeholder="Username" /><br/>
            <button onClick={this.fetchFeed.bind(this)} className="btn btn-danger">Get Feed!</button>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-6">

          </div>
        </div>
      </div>
    )
  }
}

export default Feed;
