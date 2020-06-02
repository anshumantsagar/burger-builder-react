import React from 'react';

//css
import classes from './Layout.css'
//components
import Aux from '../../hoc/Auxilary'

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrops</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

)

export default layout;