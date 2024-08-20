import { useState,useEffect } from "react";
export default function components(){
  const [time,setime]=useState(new Date());
useEffect(()=>{
const interval=setInterval(() => {
  setime(new Date())
}, 1000);
return()=>{
  clearInterval(interval);
}
},[])
function formattime(){
  let hours=time.getHours();
  const min=time.getMinutes();
  const sec=time.getSeconds();
  const mer=hours>=12? "AM":"PM";
  hours=hours%12||12;
  return `${padzero(hours)}:${padzero(min)}:${padzero(sec)}:${mer}`
}
function padzero(number){
  return (number<10?"0":"")+number;
}
return(<div className="container">
  <div className="clock">
    <span>{formattime()}</span>
  </div>

</div>
)

}