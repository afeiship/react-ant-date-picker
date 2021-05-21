# react-ant-date-picker
> React ant date picker.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-date-picker
```

## properties
| Name      | Type   | Required | Default      | Description                           |
| --------- | ------ | -------- | ------------ | ------------------------------------- |
| className | string | false    | -            | The extended className for component. |
| value     | string | false    | -            | The changed value.                    |
| onChange  | func   | false    | noop         | The change handler.                   |
| format    | string | false    | 'YYYY-MM-DD' | The datepicker format.                |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-date-picker/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-date-picker/dist/style.scss";

  // customize your styles:
  $react-ant-date-picker-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntDatePicker from '@jswork/react-ant-date-picker';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-date-picker/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-date-picker/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-date-picker
[version-url]: https://npmjs.org/package/@jswork/react-ant-date-picker

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-date-picker
[license-url]: https://github.com/afeiship/react-ant-date-picker/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-date-picker
[size-url]: https://github.com/afeiship/react-ant-date-picker/blob/master/dist/react-ant-date-picker.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-date-picker
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-date-picker
