import React ,{useState}from "react"
import "../App.css"
import Data from "../Component/Data"
 const Review=()=>{
    const [index,setindex]=useState(0);
    console.log(Data);
     const {name,job,image,text}=Data[index];
    const checkNumber =(number)=>{
         if(number>Data.length-1)
         {
             return 0;
         }
         if(number<0)
         {
            return Data.length-1;
         }
         return number;

     }
     const nextPerson=()=>{
         setindex((index)=>{
             let newIndex= index+1;
             return checkNumber(newIndex); })
         }
     const previousPerson=()=>{
       setindex((index)=>{
            let newIndex= index-1;
            return checkNumber(newIndex);
        })
    }

     const Random=()=>{
         let randomNo=Math.floor(Math.random()*Data.length);
         if(randomNo===index)
         {
             randomNo=index+1;
         }
         setindex(checkNumber(randomNo));
     }
     
   return(
  <article className="review">
      <div className="img-container">
   <img src={image} alt="" className="person-img"></img>
   </div>
   <h4 className="author">{name}</h4>
   <p className="job">job is {job}</p>  
   <p className="info">{text}</p>
   <div className="button-container">
   <button className="prev-btn" onClick={previousPerson}><i class="fas fa-chevron-left"></i></button>
<button  className="next-btn" onClick={nextPerson}><i class="fas fa-chevron-right"></i></button>
</div>
<button className="random-btn"onClick={Random}>Surprise Me</button>
</article>
   )
 }
 export default Review