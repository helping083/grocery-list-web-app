import { STATUS } from "../../Enums/groceryStatus.enum";

const INITIAL_STATE = {
  groceries: [
    {
      id: "e0ea0480-d697-4c98-9db8-a3c9aad16241",
      name: "Buy bread",
      status: STATUS.HAVE,
      priority: 1,
      toggleStatusChanged: "Mon, 02 Nov 2020 15:12:31 GMT",
      hitoryOfChanges: ["Mon, 02 Nov 2020 15:12:31 GMT"],
    },
    {
      id: "ca592541-a6ea-4641-9d7f-2044b0fd8f6d",
      name: "Buy milk",
      status: STATUS.HAVE,
      priority: 1,
      toggleStatusChanged: "Mon, 02 Nov 2020 15:25:07 GMT",
      hitoryOfChanges: ["Mon, 02 Nov 2020 15:25:07 GMT"],
    },
    {
      id: "be400f6e-580c-4756-bb69-85f8e93583c3",
      name: "Buy a bread",
      status: STATUS.HAVE,
      priority: 1,
      toggleStatusChanged: "Mon, 02 Nov 2020 15:25:33 GMT",
      hitoryOfChanges: ["Mon, 02 Nov 2020 15:25:33 GMT"],
    },
  ],
};

const groceryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default groceryReducer;
