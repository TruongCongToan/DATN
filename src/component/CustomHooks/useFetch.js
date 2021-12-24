import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (URL = "", params = {}) =>{
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [shouldRefetch, refetch] = useState({}); 
  const refresh = () => refetch({});

  useEffect(() => {
    let isSubscribe = true;
    (async function fetchData() {
      try {
        const response = await axios.get(URL, params);
        if (isSubscribe && response.status === 200) {
          setData(response.data || null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        isSubscribe && setIsLoading(false);
      }
    })();
    return () => (isSubscribe = false);
  }, []);
  return { isLoading, data };
}

//add new user 
const handleLoginAPI = (data) => {
    
  return axios.post("https://api-truongcongtoan.herokuapp.com/api/users", {
      username:data.username,
      password:data.password,
      email:data.email,
      phonenumber:data.phonenumber,
      address:data.address,
      gender:"nam",
      role:"R3",
      image:"img",
      position:'p2',
      createat:"2001-09-21",
      updateat:"2001-09-21"
  });
};

export  {useFetch,handleLoginAPI};