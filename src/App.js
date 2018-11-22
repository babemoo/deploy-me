import React, { Component } from 'react';
import FullPageLayout from './FullPageLayout';
import Header from './component/Header';
import Core from './Core';

class App extends Component {
  render() {
    return (
      <div  >
        <FullPageLayout>
          <Header ></Header>
          <Core></Core>
        </FullPageLayout>
      </div>
    );
  }
}
export default App