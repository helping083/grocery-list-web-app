import React from "react";
import PropTypes from "prop-types";
import { Col, TextInput, Button } from "react-materialize";
import InputWithOptions from "../InputWithOptions";

const AddGrocerySection = ({
  inputText,
  importanceOptions,
  setImportanceHandler,
  setTextInputValue,
  addGroceryHandler,
}) => {
  return (
    <>
      <Col s={12} m={3}>
        <InputWithOptions
          multiple={false}
          text={inputText}
          s={12}
          isDisabledOption
          options={importanceOptions}
          changeHandler={(e) => {
            setImportanceHandler(e.target.value);
          }}
        />
      </Col>
      <Col s={12} m={7}>
        <TextInput
          id="TextInput-4"
          placeholder="add"
          s={12}
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </Col>
      <Col s={12} m={2}>
        <Button
          node="button"
          waves="light"
          onClick={addGroceryHandler}
          style={{
            width: "100%",
            top: "30%",
          }}
        >
          add
        </Button>
      </Col>
    </>
  );
};

AddGrocerySection.propTypes = {
  inputText: PropTypes.string.isRequired,
  importanceOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setImportanceHandler: PropTypes.func.isRequired,
  setTextInputValue: PropTypes.func.isRequired,
  addGroceryHandler: PropTypes.func.isRequired,
};

export default AddGrocerySection;
