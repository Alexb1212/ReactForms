import { useState } from "react"

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const signup = await response.json();
      
      props.setToken(signup.token)
    } catch (err) {
      setError(error.message);
    }
  }

  


  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)} />
        </label>

        <label>
          Password: <input
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)} />
        </label>

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm