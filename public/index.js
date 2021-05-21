import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntDatePicker from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: '2021-05-21 15:19:15'
  };
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-date-picker">
        <ReactAntDatePicker
          format="YYYY-MM-DD HH:mm:ss"
          value={this.state.value}
          onChange={(e) => {
            console.log('event :=>', e.target.value);
          }}
          className="mb-5 has-text-white"
        />
        <button className="button is-primary is-fullwidth">Start~</button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
