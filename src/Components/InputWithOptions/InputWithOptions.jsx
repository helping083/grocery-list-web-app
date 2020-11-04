import React from "react";
import PropTypes from "prop-types";
import { Select } from "react-materialize";

const InputWithOptions = ({
  options,
  changeHandler,
  isDisabledOption,
  text,
  ...props
}) => {
  return (
    <Select
      onChange={changeHandler}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {isDisabledOption && (
        <option disabled value="">
          {text}
        </option>
      )}
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

InputWithOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeHandler: PropTypes.func.isRequired,
  isDisabledOption: PropTypes.bool,
  text: PropTypes.string,
};

export default InputWithOptions;
