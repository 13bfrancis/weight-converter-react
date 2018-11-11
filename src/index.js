import React from 'react';
import ReactDOM from 'react-dom';

import TextField from '@material-ui/core/TextField';

import './styles.css';

class App extends React.Component {
  state = {
    weight: ''
  };
  render() {
    return (
      <TextField
        label="Enter Weight"
        value={this.state.weight}
        onChange={e => {
          this.setState({
            weight: e.target.value
          });
        }}
      />
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
