 import React from 'react';

 //css
import classes from './Order.css';

 const order = (props) => (
     <div className={classes.Order}>
         <p>Ingredients: Salad(1)</p>
         <p>Price: <strong>Rs. 60.5</strong></p>
     </div>
 );

 export default order;