import React from 'react';
import Header from './Header';
import userDataContext from './userData-context';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <userDataContext.Provider value={this.state.userData}>
          <Header />
        </userDataContext.Provider>
      </div>
    );
  }
}

export default App;
