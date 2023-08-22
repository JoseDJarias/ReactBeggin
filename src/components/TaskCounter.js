import React from 'react';
function TaskCounter({count}) {
    return (
        <div>
            <p>
                Task completed: {count}
            </p>
        </div>
      );
}

export default TaskCounter;