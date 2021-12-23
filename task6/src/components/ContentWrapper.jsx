import React, { useState, useEffect } from 'react';
import MainPageContainer from '../components/mainPage/MainPageContainer';
import EmployeesPageContainer from '../components/employeesPage/EmployeesPageContainer';
import { Routes, Route } from 'react-router-dom';
import classes from './ContentWrapper.module.css';
import { URL } from '../constants/constants';

const ContentWrapper = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const arrayEmployee = data.data.map((item) => {
          return `${item.first_name} ${item.last_name}`;
        });
        setEmployees([...arrayEmployee]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(URL);
  }, []);
  return (
    <div className={classes.content_wrapper}>
      <Routes>
        <Route path='/' exact element={<MainPageContainer />} />
        <Route
          path='/employees'
          exact
          element={
            <EmployeesPageContainer
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default ContentWrapper;
