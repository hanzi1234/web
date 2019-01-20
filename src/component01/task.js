import React from "react";

class Task extends React.Component {
  componentWillMount() {
    this.setState({ data: this.props.task.text });
  }

  state = {
    data: "",
    editingMode: false
  };

  render() {
    const { task } = this.props;

    return (
      <div>
        {/* conditional rendring for text box and span  */}
        {this.state.editingMode
          ? <input
              type="text"
              value={this.state.data}
              onChange={e => this.setState({ data: e.target.value })}
            />
          : <span>
              {task.text}
            </span>}

        {this.state.editingMode
          ? <button onClick={() => this.saveChanges()}>Save</button>
          : <button onClick={() => this.editingMode(true)}>Edit</button>}

        <button onClick={() => this.props.onDelete(this.props.task.id)}>
          delete
        </button>
      </div>
    );
  }

  editingMode = mode => {
    this.setState({ editingMode: mode });
  };

  saveChanges = () => {
    this.editingMode(false);
    this.props.onSave(this.props.task.id, this.state.data);
  };
}
export default Task;
