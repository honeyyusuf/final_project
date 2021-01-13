import { useState, useEffect } from 'react';
import axios from "axios";

export default function useSaveinputs() {


  const [state, setState] = useState({}
  );



  const api = {
    GET_USER: "/api/",

  };
  useEffect(() => {
    Promise.all([
      axios.get(api.GET_USER)
    ]).then((all) => {
      const [users] = all;
      setState(prev => ({ ...prev, users: users.data }))
    }).catch((error) => console.log(error))

  }, []);



  function signUp(user_data) {

    const users = {
      ...state.users, user_data

    };



    return axios
      .post(`/api/`, user_data)
      .then((res) => {

        setState((prev) => ({ ...prev, user_data }));


      }).catch((error) => console.log(error))


  }
  return { state, signUp };
}