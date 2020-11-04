import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { Button, Row, Col, TextInput } from "react-materialize";
import { useHistory } from "react-router-dom";
import GroceryList from "../../Components/GroceryList";
import { STATUS } from "../../Enums/groceryStatus.enum";
// import { FILTER } from "../../Enums/groceryFilter.enum";
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../../Store/constants/fiters";
import { getVisibleTodos, getFilter } from "../../Store/selectors";
import { AddGrocery, ToggleStatus, DeleteGrocery } from "../../Store/actions/groceryActions";
import InputWithOptions from "../../Components/InputWithOptions";
// import { GMTToLocal } from "../../utils";
import styles from './GroceryListView.module.css';

// const FILTER_TITLES = {
//   [SHOW_ALL] : {

//   },
//   [SHOW_COMPLETED] : {
    
//   },
//   [SHOW_ACTIVE] : {
    
//   }
// }

const GroceryListView = () => {
  const [grocery, setGrocery] = useState("");
  const [priority, setPriority] = useState(1);
  const history = useHistory();

  const dispatch = useDispatch();

  const groceriesList = useSelector((state) => {
    const sorted = state.grocery.groceries.sort((a,b) => {
      return a.priority - b.priority
    });
    return sorted;
  });
  const filter = useSelector(getFilter);

  const visible = useSelector(getVisibleTodos(groceriesList, filter));

  const addGroceryHandle = () => {
    const data = {
      id: uuidv4(),
      name: grocery,
      status: STATUS.HAVE,
      priority: Number(priority),
      toggleStatusChanged: new Date().toGMTString(),
      hitoryOfChanges: [new Date().toGMTString()]
    }
    dispatch(AddGrocery(data));
  };

  const handleToggleChange = (item) => {
    const payload = {
      id: item.id,
      date: new Date().toUTCString(),
    }
    dispatch(ToggleStatus(payload));
  };

  const handleRedirect = (id) => {
    history.push(`/details/${id}`)
  };

  return (
    <>
      <Row className={styles.container}>
        <Row className={styles.addGroceryContainer}>
          <Col s={12} m={3}>
            <InputWithOptions
              multiple={false}
              text="importance"
              s={12}
              isDisabledOption
              options={["1","2","3","4","5"]}
              changeHandler={(e) => {setPriority(e.target.value)}}
            />
          </Col>
          <Col s={12} m={7}>
            <TextInput 
              id="TextInput-4" 
              placeholder="add"
              s={12}
              onChange={(e) => setGrocery(e.target.value)}
            />
          </Col>
          <Col s={12} m={2} className={styles.buttonContainer}>
            <Button
              node="button"
              waves="light"
              onClick={addGroceryHandle}
              style={{
                 width: "100%",
                 top: "30%"
                }}
            >
              add
            </Button>
          </Col>
        </Row>
        <Row>
          radioGroup
          {filter}
        </Row>
        <Row>
          <GroceryList
            items={visible}
            handleToggleChange={handleToggleChange}
            handleRedirect={handleRedirect}
            handleDeleteGrocery={(id) => dispatch(DeleteGrocery(id))}
          />
        </Row>
      </Row>
    </>
  );
};

export default GroceryListView;
