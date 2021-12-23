import React from 'react';
import AddEmployee from './AddEmployee';
import DeleteEmployee from './DeleteEmployee';

const Employees = (props) => {
  return (
    <div>
      <AddEmployee
        setEmployees={props.setEmployees}
        employees={props.employees}
      />
      <DeleteEmployee
        setEmployees={props.setEmployees}
        employees={props.employees}
      />
    </div>
  );
};
export default Employees;
