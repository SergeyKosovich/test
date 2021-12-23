import React, { useRef } from 'react';

const AddEmployee = (props) => {
  const textInput = useRef(null);
  const addEmployee = () => {
    props.setEmployees([...props.employees, textInput.current.value]);
  };
  return (
    <>
      <input type='text' ref={textInput}></input>
      <button type='submit' onClick={addEmployee}>
        add employee
      </button>
    </>
  );
};
export default AddEmployee;
