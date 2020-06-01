import React from 'react';

//components
import Aux from '../../hoc/Auxilary'

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrops</div>
        <main>
            {props.children}
        </main>
    </Aux>

)

export default layout;