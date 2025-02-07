import { useState } from "react"

const Authenticate = (props) => {
  const [username, setUserName] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

 
  const authenticate = async(event) => {
    event.preventDefault();
   try {
    
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      }
    });
    const goodToken = await response.json();
    console.log(goodToken);
   
    setSuccessMessage(goodToken.message);
    setUserName(goodToken.data.username);
   } catch(error){
    setError(error.message);
   }
  } 

  return (
    <section>
      <h2>Authenticate</h2>
      { error && <p>{ error }</p> }
      { successMessage && <p>{ successMessage }</p> }
      { username && <p> { username }</p> }
      <button onClick={ authenticate }>Authenticate</button>
    </section>
  )
}

export default Authenticate