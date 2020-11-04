import React from 'react';
import {Row, Col, Checkbox} from "react-materialize";
import PropTypes from 'prop-types';
import { STATUS } from "../../Enums/groceryStatus.enum";
import { GMTToLocal } from "../../utils";

const GroceryList = ({items, handleToggleChange, handleRedirect, handleDeleteGrocery}) => {
  return (
    <>
      <Row>
        <Col 
          s={3} 
          className="offset-s3 offset-m4"
        >
          TASK
        </Col>
        <Col 
          s={3}
        >
          LAST MODIFIED
        </Col>
      </Row>
      {items.map((item) => {
        const { id, name, status, toggleStatusChanged } = item;
        return (
          <Row key={id}>
            <Col s={3} className="offset-m1">
              <Checkbox
                checked={status === STATUS.RAN_OUT}
                filledIn
                id={id}
                label={status}
                value={status}
                onChange={() => {
                  handleToggleChange(item)
                }}
              />
            </Col>
            <Col 
              s={3}
              style={{
                wordBreak: "break-word"
              }}
              onClick={() => handleRedirect(item.id)}
            >
              <p>{name}</p>
            </Col>
            <Col s={4} onClick={() => handleRedirect(item.id)}>
              {GMTToLocal(toggleStatusChanged)}
            </Col>
            <Col s={1}>
              <span 
                role="button" 
                tabIndex={0} 
                onClick={() => handleDeleteGrocery(id)}
                onKeyPress={() => handleDeleteGrocery(id)}
              >x
              </span>
            </Col>
          </Row>
        )
      })}
    </>
  )
}

GroceryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggleStatusChanged: PropTypes.string.isRequired,
    hitoryOfChanges: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  handleToggleChange: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  handleDeleteGrocery: PropTypes.func.isRequired,
}

export default GroceryList;
