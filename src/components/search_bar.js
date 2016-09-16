import React ,{Component}from 'react'
import { Debounce } from 'react-throttle';
import DebounceInput from 'react-debounce-input';
//searches the result from youtube through Api
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term : '' };

  }
  render(){
    return(
      <div className="search-bar">
        <DebounceInput
          debounceTimeout={300}
          className="form-control"
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}
export default SearchBar;
