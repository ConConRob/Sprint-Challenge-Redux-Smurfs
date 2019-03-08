import React, { Component } from 'react';
import styled from "styled-components";
import SmurfList from './smurfList/SmurfList.jsx';

const StyledApp = styled.div`
display: flex;
justify-content: center;
`
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <StyledApp>
        <SmurfList />
      </StyledApp>
    );
  }
}

export default App;
