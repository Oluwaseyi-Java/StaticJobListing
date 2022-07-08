
import './App.css';
import React, { useEffect, useState } from 'react';
import headerImg from "./images/bg-header-mobile.svg"
import Card from './Card';
import { JobData } from "./data"
import { FaTimes } from "react-icons/fa"

function App() {

  const [data, setData] = useState(JobData)
  const [inputValue, setInputValue] = useState("")
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setData(JobData)
    filterData.map((item) => {
      return setData(JobData.filter((value) =>
        value.languages.includes(item) || value.role === item || value.level === item)
      )
    })


  }, [filterData])

  const JobCard = data.map((items) => {

    return (<Card key={items.id} Data={items} />)
  }

  )

  const deleteFilter = (item) => {
    setFilterData(filterData.filter((itemA) => itemA !== item))
  }
  const HandleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} alt="pic" />
      </header>
      <div className='Job filter'>
        <form className='items' onSubmit={HandleSubmit} >
          {filterData.map((item, index) => {
            return (
              <div
                key={index}
                className='filterItems'>
                <span
                  className="filterItem"
                >{item}</span>
                <FaTimes className='fa times'
                  onClick={() => deleteFilter(item)}
                />
              </div>
            )
          })}
          <input
            type="text"
            value={inputValue}
            placeholder="Enter your keyword"
            onChange={(e) => {
              e.preventDefault()
              setInputValue(e.target.value)
              if (e.target.value.endsWith(" ")) {
                setFilterData([...filterData, inputValue])
                setInputValue("")


              }
            }
            }
          />
        </form>
        <p className='clear'
          onClick={() => setFilterData([])}
        >Clear</p>
      </div>

      <div className='Jobs'>
        {JobCard}
      </div>


    </div>
  );
}

export default App;
