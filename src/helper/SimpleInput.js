import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SimpleInput = ({
  size,
  defaultValue,
  icon,
  callback,
  actualValue,
  type,
}) => {
  const [value, setValue] = useState('');

  const loadState = () => {
    if (value !== actualValue) {
      setValue(actualValue);
    }

    if (actualValue || actualValue !== null) {
      return;
    }
    callback(defaultValue);
  };

  useEffect(() => {
    loadState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = (e) => {
    setValue(e.target.value);
    callback(e.target.value);
  };

  let status = 'success';
  if (
    value === ''
    || value === ' '
    || value === undefined
    || value === null
    || value === defaultValue
  ) {
    status = '';
  }

  return (
    <p className="control has-icons-left has-icons-right">
      <input
        className={`${size} ${status} input`}
        type={type}
        placeholder={defaultValue}
        onChange={(e) => onUpdate(e)}
        value={value}
        onFocus={(e) => {
          if (e.target.value === defaultValue) {
            e.target.value = '';
          }
        }}
      />
      <span className={`icon ${size} is-left has-text-${status}`}><i className={`fas fa-${icon}`} /></span>
      <span className={`icon ${size} is-right has-text-${status}`}><i className="fas fa-edit" /></span>
    </p>
  );
};

SimpleInput.propTypes = {
  size: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  actualValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SimpleInput;
