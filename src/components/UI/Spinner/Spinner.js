import classes from './Spinner.module.css';
import React from 'react';

const spinner = (props)=>(
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;