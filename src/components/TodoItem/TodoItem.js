import React from 'react';

const TodoItem = (props) => {
    const todoItem = props.todoItemData;
    return(
            <div>
                    <>
                    <input type="checkbox" 
                    onChange={(e) => {
                        todoItem.isDone = !todoItem.isDone;
                    }}
                    value={todoItem.isDone}
                    />
                    <label style={
                        todoItem.isDone ?
                        {textDecoration: "line-through"}
                        : {}
                    }>
                        {todoItem.itemName}
                    </label>
                    </>
            </div>);
};

export default TodoItem;