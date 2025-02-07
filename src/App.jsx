import { useState } from "react";

import SignUpForm from "./SignUpForm.jsx"
import Authenticate from "./Authenticate.jsx";

const App = () => {
  const [ token , setToken] = useState(null);

  return (
    <>
      <h1>React Forms</h1>

      <SignUpForm token= {token} setToken= {setToken}/>
      <Authenticate token= {token} setToken= {setToken}/>
    </>
  )
}

export default App
