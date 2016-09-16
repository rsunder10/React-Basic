import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//Api for Youtube
const API_KEY='AIzaSyCGJ1bRPnw1-uu2NpRuld7q_82nhbZUMiQ';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
     };
    //using npm for youtube search
    YTSearch({key:API_KEY,term:'surfboards'},(videos) => {
        this.setState({
          videos:videos,
          selectedVideo:videos[0]

        });

    });

  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
            videos = {this.state.videos} />
      </div>
    )};
}

ReactDOM.render(<App/>,document.querySelector('.container'));
