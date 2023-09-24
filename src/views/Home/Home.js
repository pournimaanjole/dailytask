import React, { useState } from 'react'
import './Home.css';
import Task from '../../components/Task/Task';
// first step
const Home = () => {
    const [tasklist, settasklist] = useState([
        { id: 1, tittle: 'this is first' },
        { id: 2, tittle: 'this is second' },
        { id: 3, tittle: 'this is third' },
        { id: 4, tittle: 'this is fourth' },
        { id: 5, tittle: 'this is fifth' }

    ])

    // first step
    // second step
    const [tittle, settittle] = useState('');

    // third step 
    const addtasktolist = ()=>{
        const randomid = Math.floor(Math.random() * 1000);
const obj={
    id:randomid,
    tittle:tittle
}
console.log(obj);

// settasklist([...tasklist,obj]);
settittle('');

    }

    

    return (<div>

        <div>
            <h1>daily task list (react)</h1>
            <div>
                
                <form>
                   <input type='text' value={tittle} onChange={(e)=>{
                    settittle(e.target.value)

                   }}/>
            </form>
            <button type='button' onClick={addtasktolist} >add to task list</button>
        </div>


        <div>

            {/* {
        tasklist.map((taskdetail) =>{
            const {id,tittle}=taskdetail;
            return <Task id={id} tittle={tittle} />
        })
    } */}
        </div>
    </div>




    </div >

    )
}

export default Home
