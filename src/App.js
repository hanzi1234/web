import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Counters from "./components/counters";
class App extends Component {

  state = {
    counters:[ ],
    index:1
    } ; 

    addCounter=(text)=>
    {
const counter  = { index: this.state.index,text};
this.setState({index:this.state.index+1});
this.state.counters.push(counter);
    };    
    onSavefunction=(id,text)=> 
    {
      const index = this.state.counters.findIndex(e=>e.id === id);
      const newTask = {id , text};
      const newList = [...this.state.counters];
      newList[index]={...newTask};
      this.setState({counters: newList});

    };
    
    handlDelete=(index)=>
    {
let newList = [...this.state.counters];
newList = newList.filter(t=>t.index !== index);
this.setState({counters:newList});
    };

  render() {
    return (
      <div className="App">
       <Header addTask={this.addCounter}/>
       <Counters counters={this.state.counters} 
       onSavefunction={this.onSavefunction}
       delete={this.handlDelete}  />
       <Footer/>
      </div>
    );
  }
}
export default App;