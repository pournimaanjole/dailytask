import React, { useEffect, useState } from 'react'
import './Home.css';
import Task from '../../components/Task/Task';
// first step
const Home = () => {
    const [tasklist, settasklist] = useState([
        { id: 1, tittle: 'this is first' }
        

    ])

    // first step
    // second step
    const [id, setid]= useState()
    const [tittle, settittle] = useState('');
    const [iseddit, seteddit] = useState(false);

    // third step 
    const addtasktolist = () => {
        const randomid = Math.floor(Math.random() * 1000);
        const obj = {
            id: randomid,
            tittle: tittle
        }
        // console.log(obj);
let newarray = [...tasklist, obj];
        settasklist(newarray);
        settittle('');

        savetasklisttolocalstorage(newarray);

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

savetasklisttolocalstorage(temerray);
}
//    now we also delete object using id also 


//    fourth step finished

// fifth save tasklist to local storage
// save to local storage
const savetasklisttolocalstorage = (tasks) =>{
    localStorage.setItem('list' , JSON.stringify(tasks))

}

// load to local storage in web page

useEffect(() =>{
const lists = JSON.parse(localStorage.getItem('list'))
if( lists && lists.lenght>0) {
    settasklist(lists);
}


},[])

// sisth steps  update our list
 const upadatetaskinlist= (id) =>{
    seteddit(true);
    setid(id);
    let updatevar;
    tasklist.forEach((task) => {
if(task.id === id){
    updatevar = task;
}
    })
    settittle(updatevar.tittle);
 }

//  

const upadatedelist= () => {

    let indextoupdate;
    tasklist.forEach((task,i) => {
if(task.id === id){
    indextoupdate=i;
}
    })
const temparryaray=tasklist;
temparryaray[indextoupdate] ={
    id:id,
    tittle:tittle
}
settasklist([...temparryaray]);
setid('')
settittle('');
}

    return (

        <div>

            <div className='main-contanier'>
            <p className='daily-task-heading'>daily task list </p>
            <div className='forms-container'>

                <form>
                    <input type='text' value={tittle} onChange={(e) => {
                        settittle(e.target.value)

                    }} placeholder='serch-here' 
                    className='sear-term' />
                </form>
                <div>
                   { iseddit?  <button type='button' className='btn' onClick={upadatedelist} >update list</button>:
                <button type='button' className='btn' onClick={addtasktolist} >add to task list</button>
                }
                </div>
               
            </div>


            <div>

                {
                    tasklist.map((taskdetail, index) => {
                        const { id, tittle } = taskdetail;
                        return <Task id={id} tittle={tittle} key={index} removetasklists={removetasklists} obj={taskdetail} upadatetaskinlist={upadatetaskinlist}  />
                    })
                }
            </div> 


            </div>
        </div>





    )
}

export default Home
