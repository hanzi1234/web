import React, { Component } from 'react';
import '../App.css';
class header extends Component {
    state = { 
        data:"write here.."
     }
    
         addData=()=>{
         
            this.props.addTask(this.state.data);
            this.setState({data:""});
         }


    render() { 
        return ( 

       <div className="App-header">
   <input type="text"
value={this.state.data}
onChange={a=> this.setState({data:a.target.value})}/>

 <button onClick={()=>this.addData()}>ADD</button>
       </div>
     
          );
    }
}
 
export default header ;