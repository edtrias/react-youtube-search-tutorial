import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//PLACE THE YOUTUBE API KEY HERE
const API_KEY = /*API KEY HERE*/;


class App extends React.Component {
  constructor(props) {
    super(props);

    //videos is set as an array because we'll receive a list of videos
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    //_.debounce allows to call the function this.videoSearch() only every 300ms.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>

      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)
