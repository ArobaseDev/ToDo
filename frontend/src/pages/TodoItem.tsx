import react from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <>
    
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>


    </>
    
  );
};

export default TodoItem;