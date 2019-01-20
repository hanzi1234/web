import React, { Component } from 'react';
import Counter from "./counter";

class counters extends Component{ 
   render() { 
return ( 
<div>
<center><h1>Tasks list</h1></center>
{this.props.counters.map((counter)=>
<Counter 
key={counter.id}
txt={counter.text}
no={counter.index}
onSave={this.props.onSavefunction}
delete={this.props.delete}
/>)}
</div>  );
    }
}
export default counters;