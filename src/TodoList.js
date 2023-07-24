import React from 'react';
import { useState } from 'react';

const TodoList = () => {

  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity(){
    //setlistData([...listData,activity])
    //console.log(listData)
    setlistData((listData)=>{const updatedList=[...listData,activity]
                            console.log(updatedList)
                            setActivity('')
                            return updatedList})
    }
    function removeActivity(i){
      const updatedListData = listData.filter((ele,id)=>{
        return i!=id;
      })
    
    setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([])
  }

  return (
    <>
    <div className="container">
      <div className="Header">TODO LIST</div>
      <input onChange={(e)=>setActivity(e.target.value)} type="text" placeholder="Add your activity" value={activity}/>
      <button onClick={addActivity}>Add</button>
      <p>Here is your list :{")"}</p>
      {listData!=[] && listData.map((data,i)=>{
        return(
          <>
            <p key={i}>
              <div>{data}</div>
              <div><button onClick={()=>removeActivity(i)}>Remove</button></div>
            </p>
          </>
        )
      })}
      {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>

  )
}

export default TodoList;