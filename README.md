# react-ant-date-picker
> React ant date picker.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    format: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    format:'YYYY-MM-DD'
  };
  
```

## usage:
```jsx

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

```

## customize style:
```scss
// customize your styles:
$react-ant-date-picker-options:(
);

@import '~node_modules/react-ant-date-picker/style.scss';
```
