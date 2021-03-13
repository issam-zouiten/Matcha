import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import Button from '@material-ui/core/Button';


const CheckboxGroup = (props) => {
  const { input, meta, tags } = props;
  const hasError = meta.touched && meta.error;
  const [tages, setTages] = useState([]);
  // const {tag} = props;

  const handleTages = (e) => {
    if(e.target.checked){
      setTages([
        ...tages,
        {
          id: tages.length,
          name: e.target.value
        }
      ])
    }
    else
   {
     setTages(tages.filter(tag => tag.name !== e.target.value));
   }
    // tag.tag = [
    //   ...tags,
    //   { 
    //     id: tag.length,
    //     name: e.targetr
    //   }
    // ]
  }

  return (
    <div>
      {tags.map((tag) => <Button style={{ borderRadius: '5px',  margin: '10px'}} key={tag.id_tags} >
        <Checkbox  {...input} key={tag.id_tags}
          value={tag.value} onChange={handleTages} />
        {tag.value}</Button>)}<br />
      {hasError && <span style={{ 'fontSize': '12px', 'color': '#f44336' }}>{meta.error}</span>}
      
    </div>
  );
}
export default CheckboxGroup