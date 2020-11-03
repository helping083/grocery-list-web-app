import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { Button, Row, Col, TextInput, Checkbox } from "react-materialize";
import { STATUS } from "../../Enums/groceryStatus.enum";
import { FILTER } from "../../Enums/groceryFilter.enum";
import { AddGrocery, ToggleStatus, DeleteGrocery } from "../../Store/actions/groceryActions";
import InputWithOptions from "../../Components/InputWithOptions";
import styles from './GroceryListView.module.css';
import "materialize-css";

const GroceryListView = () => {
  const [grocery, setGrocery] = useState("");
  const [priority, setPriority] = useState(1);
  const [filteredGroceries, setFilteredGroceries] = useState([]);
  const [filters, setFilter] = useState([
    {
      isFilter: false,
      name: "ran out",
      status: FILTER.RAN_OUT
    },
    { 
      isFilter: false,
      name: "have",
      status: FILTER.HAVE
    },
    {
      isFilter : true,
      name: "all",
      status: FILTER.ALL
    }
  ]);

  const dispatch = useDispatch();

  const groceriesList = useSelector((state) => {
    const sorted = state.grocery.groceries.sort((a,b) => {
      return a.priority - b.priority
    });
    return sorted;
  });

  useEffect(() => {
    setFilteredGroceries([...groceriesList]);
  }, [groceriesList])

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
      date: new Date().toGMTString(),
    }
    dispatch(ToggleStatus(payload));
  };
  
  const handleFilter = (status) => {
    const filtersCopy = [...filters];
    const index = filters.findIndex((filter) => filter.status === status);
    filtersCopy[index] = {
      ...filtersCopy[index],
      isFilter: !filtersCopy[index].isFilter
    }
    setFilter(filtersCopy);
  };

  const renderGroceriesList = () => (
    <>
      {filteredGroceries.map((item) => (
        <Row 
          key={item.id}
          className={styles.pl1}
        >
          <Col s={3}>
            <Checkbox
              checked={item.status === STATUS.RAN_OUT}
              filledIn
              id={item.id}
              label={item.status}
              value={item.status}
              onChange={() => {
                handleToggleChange(item)
              }}
            />
          </Col>
          <Col s={3} className={item.status === STATUS.HAVE ? styles.active: ""}>
            {item.name}
          </Col>
          <Col s={3}>
            {item.toggleStatusChanged}
          </Col>
          <Col s={3}>
            <span 
              role="button" 
              tabIndex={0} 
              onClick={() => dispatch(DeleteGrocery(item.id))}
              onKeyPress={() => dispatch(DeleteGrocery(item.id))}
              className={styles.deleteButton}
            >x
            </span>
          </Col>
        </Row>
      ))}
    </>
  );

  return (
    <>
      <Row className={styles.container}>
        {console.log(groceriesList)}
        <Row>
          <Col 
            s={12} 
            m={10} 
            className="offset-m1"
            style={{
              marginBottom: "1rem"
            }}
          >
            <Col m={3}>
              <InputWithOptions
                multiple={false}
                text="importance"
                s={12}
                isDisabledOption
                options={["1","2","3","4","5"]}
                changeHandler={(e) => {setPriority(e.target.value)}}
              />
            </Col>
            <Col m={7}>
              <TextInput 
                id="TextInput-4" 
                placeholder="add"
                s={12}
                onChange={(e) => setGrocery(e.target.value)}
              />
            </Col>
            <Col m={2} className={styles.buttonContainer}>
              <Button
                node="button"
                waves="light"
                onClick={addGroceryHandle}
                style={{
                 width: "100%"
                }}
              >
                add
              </Button>
            </Col>
          </Col>
        </Row>
        <Row className={styles.pl1}>
          {filters.map((filter) => (
            <Col s={3} key={filter.status} className={styles.pl1}>
              <Checkbox
                checked={filter.isFilter}
                filledIn
                id={filter.status}
                label={filter.name}
                value={filter.status}
                onChange={() => handleFilter(filter.status)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {renderGroceriesList()}
        </Row>
      </Row>
    </>
  );
};

export default GroceryListView;
