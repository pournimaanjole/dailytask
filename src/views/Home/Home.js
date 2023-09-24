import React, { useState } from 'react'
import './Home.css';
import Task from '../../components/Task/Task';
// first step
const Home = () => {
    const [tasklist, settasklist] = useState([
        { id: 1, tittle: 'this is first' }
        

    ])

    // first step
    // second step
    const [tittle, settittle] = useState('');

    // third step 
    const addtasktolist = () => {
        const randomid = Math.floor(Math.random() * 1000);
        const obj = {
            id: randomid,
            tittle: tittle
        }
        // console.log(obj);

        settasklist([...tasklist, obj]);
        settittle('');

    }
    // third step

    // fourth step
//    const removetasklists = (obj) =>{
// const index = tasklist.indexOf(obj);
// const temerray = tasklist ;
// temerray.splice(index,1);
// settasklist([...temerray]);
//    }

//    now we also delete object using id also 

const removetasklists = (id) =>{
    let index;
    tasklist.forEach((task,i) =>{
        if(task.id===id){
            index=i;
        }
    })
    const temerray = tasklist ;
temerray.splice(index,1);
settasklist([...temerray]);
}
//    now we also delete object using id also 


//    fourth step finished
    return (

        <div>
            <h1>daily task list (react)</h1>
            <div>

                <form>
                    <input type='text' value={tittle} onChange={(e) => {
                        settittle(e.target.value)

                    }} />
                </form>
                <button type='button' onClick={addtasktolist} >add to task list</button>
            </div>


            <div>

                {
                    tasklist.map((taskdetail, index) => {
                        const { id, tittle } = taskdetail;
                        return <Task id={id} tittle={tittle} key={index} removetasklists={removetasklists} obj={taskdetail}  />
                    })
                }
            </div>
        </div>





    )
}

export default Home
