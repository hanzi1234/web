import React, { Component } from "react";
import Header from "./components/header";
import TaskList from "./components/taskList";
import Chat from "./components/char";
class App extends Component {
  state = {
    taskList: [],
    countNo: 1
  };

  render() {
    return (
      <div>
        <Header onAdd={this.addTask} />
        {/* <TaskList
          taskList={this.state.taskList}
          onSave={this.saveTask}
          onDelete={this.deleteTask}
        /> */}
        <Chat />
      </div>
    );
  }

  addTask = text => {
    const task = { id: this.state.countNo, text };
    this.setState({ countNo: this.state.countNo + 1 });
    this.state.taskList.push(task);
  };
  saveTask = (id, text) => {
    const index = this.state.taskList.findIndex(t => t.id === id);
    const newTask = { id, text };
    const newList = [...this.state.taskList];
    newList[index] = { ...newTask };
    this.setState({ taskList: newList });
  };

  deleteTask = id => {
    let newList = [...this.state.taskList];
    newList = newList.filter(t => t.id !== id);
    this.setState({ taskList: newList });
  };
}

export default App;
