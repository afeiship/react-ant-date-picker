import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const CLASS_NAME = 'react-ant-date-picker';

export default class ReactAntDatePicker extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The datepicker format.
     */
    format: PropTypes.string
  };

  static defaultProps = {
    onChange: noop,
    format: 'YYYY-MM-DD'
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleChange = (inEvent, inDateString) => {
    const { format, onChange } = this.props;
    this.setState({ value: inEvent }, () => {
      onChange({ target: { value: inDateString } });
    });
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    const _value = this.state.value;
    return (
      <DatePicker
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        value={moment(_value)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
