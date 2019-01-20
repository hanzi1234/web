import React from "react";
import Task from "./task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <span>list will be here </span>
        {this.props.taskList.map(t =>
          <Task
            key={t.id}
            task={t}
            onSave={this.props.onSave}
            onDelete={this.props.onDelete}
          />
        )}
      </div>
    );
  }
}
export default TaskList;
