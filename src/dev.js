import './dev.scss';
import ReactAntDatePicker from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-date-picker --save
// import : import ReactAntDatePicker from 'react-ant-date-picker'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-date-picker">
        <ReactAntDatePicker onChange={this._onChange} ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
