"use client"

import React, { useState } from 'react';

const TodoList = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    console.log(tasks);

    const addTask = () => {
        if (newTask.trim() === '') return;

        const taskToAdd = {
            id: Date.now(),
            text: newTask,
            completed: false,
            priority: 'medium',
        };
        console.log(taskToAdd);

        setTasks((prevTasks) => [...prevTasks, taskToAdd]);
        setNewTask('');
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-4xl font-medium text-primary text-center mb-4">
                Todo List
            </h2>
            <div className="flex flex-wrap justify-center items-center mb-4">
                <input
                    type="text"
                    className="lg:w-2/5 w-full border border-primary p-2 text-xl mb-2 lg:mb-0"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="bg-primary text-white p-2 text-xl"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default TodoList;

