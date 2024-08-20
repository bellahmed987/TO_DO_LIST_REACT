import { useState } from "react";
import Clock from'./clock.jsx';

export default function componenet(){
  const [tasks,settasks]=useState(()=>{
    const data=localStorage.getItem("todo");
    if(!data)  return [];
  
    return JSON.parse(data);
  });
  const [newtask,setnewtask]=useState("");
function handlenewtask(event){
  setnewtask(event.target.value)

}
function handletask(){
  settasks([...tasks,newtask]);
  setnewtask("");

}
localStorage.setItem("todo",JSON.stringify(tasks));
function deltask(index){
  settasks(tasks => tasks.filter((_, i) => i !== index));
}
function moveup(index){
  if(index>0){
    const updatedtask=[...tasks];
    [updatedtask[index] ,updatedtask[index-1]]=[updatedtask[index-1] ,updatedtask[index]]
    settasks(updatedtask)
  }}
  function movedown(index){
    if(index<tasks.length){
      const updatedtask=[...tasks];
      [updatedtask[index] ,updatedtask[index+1]]=[updatedtask[index+1] ,updatedtask[index]]
      settasks(updatedtask)
    }}
    function clear(){
      settasks([""]);
      listtask="";
    }
  
let listtask=tasks.map((task,index)=>(<li key={index}>{task}<span>
  <button className="delbtn" onClick={()=>deltask(index)} ><i class="fa-solid fa-trash" style={{color:"red"}}></i></button>
  <button className="opbtn" onClick={()=>moveup(index)}><i class="fa-solid fa-arrow-up"  style={{color:"lightgreen"}}></i></button>
  <button className="opbtn" onClick={()=>movedown(index)}><i class="fa-solid fa-down-long"style={{color:"lightgreen"}}></i></button></span></li>))
  function clear(){
    settasks([]);
  
  }
  return(
    <><div className="box">
    <h1>TO_DO_LIST</h1>
    <h2><Clock/></h2>
    <div className="inpo" ><input value={newtask} onChange={handlenewtask}></input><button className="adbtn" onClick={handletask}>ADD Task</button></div>
  <div className="task">  <ul>
    {listtask}
    
    </ul></div>
    </div>
    <button className="clear" onClick={clear}>CLEAR ALL TASK</button>
    </>

  
  )

}