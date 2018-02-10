import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { DatePicker } from 'antd';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    format: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    format:'YYYY-MM-DD'
  };
  /*===properties end===*/

  _onChange = inMoment =>{
    const { format, onChange } = this.props;
    const target = inMoment ? inMoment.format(format): inMoment;
    onChange( target );
  };

  render(){
    const {className, format, onChange,...props} = this.props;
    return (
      <DatePicker {...props} onChange={this._onChange} className={classNames('react-ant-date-picker',className)} />
    );
  }
}
