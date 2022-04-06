import "./App.css"
import ClassClick from "./components/ClassClick"
import Counter from "./components/Counter"
import EventBind from "./components/EventBind"
import FunctionClick from "./components/FunctionClick"
import { Great } from "./components/Great"
import Hello from "./components/Hello"
import Message from "./components/Message"
import ParentComponent from "./components/ParentComponent"
import PersonList from "./components/PersonList"
import StyleComponent from "./components/StyleComponent"
import UserGreating from "./components/UserGreating"
import Welcome from "./components/Welcome"
import "./components/primaryStyle.css"
import styles from "./components/primaryStyle.module.css"
import FormComponent from "./components/FormComponent"

function App() {
  return (
    <div className="App">
      <FormComponent />
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <StyleComponent /> */}
      {/* <PersonList /> */}
      {/* <UserGreating /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Great name="Bruce" heroName="Batman">
        <p>This is hero</p>
      </Great> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Message /> */}
      {/* <Great name="Bruce" heroName="Batman">
        <p>This is hero</p>
      </Great> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Hello /> */}
    </div>
  )
}

export default App
