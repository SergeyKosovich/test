import React from 'react';
import classes from './Employees.module.css';

const DeleteEmployee = (props) => {
  const deleteEmployee = (e) => {
    props.setEmployees(
      props.employees.filter((employee) => employee !== e.target.id)
    );
  };
  return (
    <>
      {props.employees.map((item) => {
        return (
          <div key={item}>
            <h3 className={classes.h3}>{item}</h3>
            <button id={item} onClick={deleteEmployee}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default DeleteEmployee;
