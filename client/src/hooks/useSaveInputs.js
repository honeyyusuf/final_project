import {useState,useEffect} from 'react';
import axios from "axios";

export default function useSaveinputs(){


  const [state, setState] = useState({}
  );

 

  const api = {
    GET_USER: "/api/",
   
  };
  useEffect(()=>{
  Promise.all([
    axios.get(api.GET_USER)
  ]).then((all)=>{
   const[users]=all;
   setState(prev=>({...prev, users:users.data}))
  }).catch((error) => console.log(error))
  
  },[]);

 //console.log(state);
// function save(email,
//   first_name,
//   last_name,
//   company,
//   title,
//   phone,
//   company_url,
//   handle,
//   description,
//   comments,
//   contact_method) {
//   if (first_name && last_name) {
//     const user_data = {
//       first_name,
//       last_name,
//       company ,
//       title,
//       email,
//       phone,
//       company_url,
//       contact_method,
//       handle,
//       description,
//       comments,
//       stage_id: 1,
//       reviewer_id: 1
//     };

    

//    console.log(user_data);
      

//   }
// }

function signUp(user_data){
  user_data.id = state.users.length+1;
  console.log(user_data)
 const users = {
      ...state.users,user_data
      
    };

   console.log(user_data);
    
    return axios
    .put(`/api/${user_data.id}`, user_data)
    .then((res) => {

      setState((prev) => ({ ...prev,users}))


    }).catch((error)=>console.log(error))


 }
return{state,signUp};
}