// Components:
import Description from './components/Description';
import Community from './components/Community';
import Games from './components/Games';
import Streamers from './components/Streamers';
import News from './components/News';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main>
        <Description />
        <div className="container text-white my-5">
          <News />
          <Community />
          <Games />
          <Streamers firebase={this.props.firebase} />
        </div>
      </main>
    );
  }
}

export default App;
