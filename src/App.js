import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Counters from "./components/counters";
class App extends Component {

  state = {
    counters:[{id:1 , text:""},
    {id:1 , text:""},
    {id:1 , text:""}]
    } ; 
    
  render() {
    return (
      <div className="App">
       <Header/>
       <Counters counters={this.state.counters}  />
       <Footer/>
      </div>
    );
  }
}
export default App;