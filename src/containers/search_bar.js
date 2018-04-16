import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <form className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type='submit' className="btn btn-outline-secondary" >Submit</button>
          </div>
      </form>
    );
  }
}
