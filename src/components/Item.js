import React from 'react';

function Item({task, completed, onToggle}) {
    return (
        <div className='task-item'>
            <input type='checkbox' checked={completed} onChange={onToggle}
            />
            <span>{task}</span>
        </div>
      );
}

export default Item;