import React from 'react';
import Employees from './employees/employes';

const EmployeesPageContainer = (props) => {
  return (
    <Employees employees={props.employees} setEmployees={props.setEmployees} />
  );
};
export default EmployeesPageContainer;
