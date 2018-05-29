import './dev.scss';
import ReactAntDatePicker from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-date-picker --save
// import : import ReactAntDatePicker from 'react-ant-date-picker'

class App extends React.Component{
  state = {
    value:'2018-05-29 11:34:28'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e);
    // this.setState({ value: e})
  };

  render(){
    return (
      <div className="hello-react-ant-date-picker">
        <ReactAntDatePicker
          value={this.state.value}
          style={{ width: 200 }}
          onChange={this._onChange} ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
