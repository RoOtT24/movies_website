import React from 'react'
import styles from './Search.module.css'

const Search = ({inputs, setResults, text}) => {

    const onChange = (e)=>{
        const {value} = e.target;
        let results = []
        inputs?.map( (input)=>{
          if(input.title){
            if(input?.title?.toLowerCase().includes(value.toLowerCase()))
                results.push(input)
              }
          else if(input?.name?.toLowerCase().includes(value.toLowerCase()))
          results.push(input)
            
        } )
        setResults(results);
    }

  return (
    <div className={styles.search}>
        <i className="fa-solid fa-magnifying-glass z-3 position-absolute" style={{top:5+'px', left:5+'px'}}></i>
        <input type="search" onChange={onChange} placeholder='Search'/>
    </div>
  )
}

export default Search