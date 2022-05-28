import React, { useState } from 'react';
import PropType from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputvalue, setInputvalue] = useState('')
    const inputchange = (e)=>{
        setInputvalue(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault();
        if(inputvalue.trim().length>2){
            setCategorias(cate => [inputvalue,...cate]);
            setInputvalue('')
        }
    }


  return (
    <form onSubmit={submit}>
        <input
            type="text"
            value={inputvalue}
            onChange={(e)=>{inputchange(e)}} 
        />
    </form>
  )
}

AddCategory.propType = {
    setCategorias: PropType.func.isRequired
}
