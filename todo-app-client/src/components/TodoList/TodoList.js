import React, { Component } from "react";
import Button from "reactstrap/lib/Button";
import TodoItem from "../TodoItem/TodoItem";
import Switch from '@material-ui/core/Switch';

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDataFilter: false,
        }
    }
    render() {
    const {
      showTaskData,
      clearList,
      handleDelete,
      todoDeleteMsg,
      editTodo,
        handleComplete,
    } = this.props;
    let taskData = [];
    let taskDatafilter = [];

    if (showTaskData.length) {
      taskData = showTaskData.map((task) => {
        return (
          <TodoItem
            key={task.id}
            title={task.title}
            description={task.description}
            handleComplete={() => {
              handleComplete(task.id);
            }}
            handleDelete={() => {
              handleDelete(task.id);
            }}
            todoDeleteMsg={todoDeleteMsg}
            editTodo={() => {
              editTodo(task.id, task.title, task.description);
            }}
          />
        );
      });
        taskDatafilter = showTaskData.filter((value)=> value.completed === 1).map((task) => {
            return (
                <TodoItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    handleDelete={() => {
                        handleDelete(task.id);
                    }}
                    todoDeleteMsg={todoDeleteMsg}
                    editTodo={() => {
                        editTodo(task.id, task.title, task.description);
                    }}
                />
            );
        });
    }
    return (
      <ul className="list-group my-2">
        <h3 className="text-capitalize">Todo List </h3>
        <div className="d-flex justify-content-between mb-5">
          Task and Description
            <Switch value="on"
                    onChange={(event) =>
                        (event.target.value === 'on')? this.setState({showDataFilter:true}):this.setState({showDataFilter:false}) }
            />
        </div>
          {(this.state.showDataFilter)?  taskDatafilter: taskData  }
        <Button color="danger" onClick={clearList}>
          Clear all
        </Button>
        <p className="text-danger">{todoDeleteMsg}</p>
      </ul>
    );
  }
}
