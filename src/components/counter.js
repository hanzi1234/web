import React, { Component } from 'react';
import '../App.css';
class counter extends Component {
state={
data:"",
editmode:false
};

render() { 
    return ( 
        <div className="counter">
    <h3>  Task {this.props.no}: </h3>

{this.state.editmode?
<input type="text"
  value={this.state.data}
  onChange={a=>this.setState({data:a.target.value})}
  />:<span>{this.props.txt}</span>}

{this.state.editmode?<button onClick={() =>this.handleSave()}>Save</button>
:<button onClick={() =>this.handleEdit(true)}>Edit</button>
}
 {/* <button onClick={this.props.delete(thhis.props.no)}>Delete</button> */}

            </div>
         );
         
        }
             handleEdit=mode=>{
              this.setState({editmode:mode});
                 };
             
              handleSave=()=>
              {
             this.handleEdit(false);
             this.props.onSave(this.props.no,this.state.data);
             }   
    }
    
    export default counter;