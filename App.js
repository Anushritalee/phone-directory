import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component{
render(){
  return (
    <div>
      {/* <div className="Headers">
      phone directory
    </div>
    <button> Add </button>
    <div>
      <span>Name</span><br/>
      <span>Phone</span>
  </div>*/ }
  <label htmlfor="Name">Name:</label>
  <input id="name" type="text" placeholder="type here"/>
    </div>
   

  );
}
}
export default App;
