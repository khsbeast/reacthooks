import React,{useState} from 'react'

const Hook1 = () =>{
    const [count,setcount] = useState(0);
    const changecount = () => {
        setcount(prevcount => prevcount+1)
    }
    return (
        <div>
            {count}
            <button onClick={changecount}>click me</button>
        </div>
    )
}

export default Hook1
