import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    format: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    format: 'YYYY-MM-DD HH:mm:ss'
  };
  /*===properties end===*/

  _onChange = inMoment =>{
    const { onChange } = this.props;
    onChange({
      target:{
        value: inMoment
      }
    });
  };

  render(){
    const { className, onChange, value, ...props } = this.props;
    return (
      <DatePicker
        onChange={this._onChange}
        defaultValue={moment(value)}
        className={classNames('react-ant-date-picker', className)}
        {...props}
      />
    );
  }
}
