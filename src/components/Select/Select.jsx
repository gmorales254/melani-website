import React from 'react';

function Select ({options, setOption}) {

    return (
        <>
       <select onChange={(e)=> setOption(e.target.value)}>
            {options ? options.map((item)=> <option key={item}>{item}</option>) : <option>Sin Opciones por props</option>}
        </select> 
        </>
    );
}

export default Select;

