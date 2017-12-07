import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  onChange = (e) => {
    var name = e.target.name
    var value = e.target.value
    this.setState({ [name]: value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term : '' })
    return null;
  }

  render(){
    return(
      <form onSubmit={(e) => {this.state.term == '' ? e.preventDefault() : this.onFormSubmit(e)}} className="input-group">
        <input name="term"
                className="form-control"
                placeholder="Get a five-day forecast in your favorite cities"
                onChange={this.onChange}
                value={this.state.term}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchWeather
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar)
