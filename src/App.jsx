import Greetings from "./component/Greetings"
import NavBar from "./component/NavBar"
import State from "./component/State"

function App () {

  const popUp = (name) => {
    alert(`My name is ${name}`)
  }

  return (
    <div>
      <NavBar/>
      <Greetings name = {"Ayomide Pupkin"} occupation = {"Enginner"} alert={popUp}/>
      <child>GMC</child>
      <State/>

    </div>

  )
}


export default App;