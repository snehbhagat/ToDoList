import React from "react";
function ToDoHero({todos_completed,total_todos}){
    return(
        <div>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed/total_todos}
            </div>
        </div>
    );
}
export default ToDoHero;