import React, { Component } from 'react';
import Counter from "./counter";

class counters extends Component{ 
    


// addCounters(e)
// {
// const counters = [...this.state.counters];
// counters.push({id:this.state.counters});
// this.setState(counters);
// var _id = this.state.counters;
// _id++;
// this.setState({id=_id});
// }

   render() { 
return ( 
<div>
<h1>list</h1>

{this.props.counters.map((counter)=>
<Counter  />)}

</div>  );
    }
}
 
export default counters;