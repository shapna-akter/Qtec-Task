"use client"

import Modal from '@/components/shared/Moda';
import React, { useState } from 'react';

const TodoList = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    const editTaskHandler = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setEditTask(taskToEdit);
    };

    const updateTask = () => {
        if (editTask.text.trim() === '') return;

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === editTask.id ? { ...task, text: editTask.text, priority: editTask.priority } : task
            )
        );

        setEditTask(null);
    };

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
    const toggleTaskStatus = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
        );
    };
    const deleteTask = (taskId) => {
        console.log(taskId);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-4xl font-medium text-primary text-center mb-4">
                Todo List
            </h2>
            <div className="flex flex-wrap justify-center items-center mb-4">
                <input
                    type="text"
                    className="lg:w-2/5 w-full border border-primary p-2 text-xl mb-2 lg:mb-0 lg:rounded-l-lg"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="bg-primary lg:rounded-r-lg text-white p-2 text-xl"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            {tasks.length === 0 ? (
                <div className="flex justify-center items-center font-bold lg:text-3xl p-12 text-red-500">
                    Task not assigned
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-0 shadow-md">
                    {tasks
                        .map((task) => (
                            <div
                                key={task?.id}
                                className="border-2 text-xs"
                            >
                                <div className="text-center">
                                    <div className="text-xs font-medium border-b-2">
                                        <p>
                                            {task.id}
                                        </p>
                                    </div>
                                    <div className="card-body px-2">
                                        <div className="bg-[#3776D4] text-base-100 py-6 px-2 text-center text-2xl">
                                            <p>Task: <span className={`${task.completed ? 'line-through' : ''}`}>
                                                {task.text}
                                            </span></p>

                                            <p>Task Priority: {task?.priority}</p>
                                        </div>
                                        <div className='flex items-center justify-center gap-2'>
                                            <input
                                                type="checkbox"
                                                className='checkbox  checkbox-md checkbox-primary'
                                                checked={task.completed}
                                                onChange={() => toggleTaskStatus(task.id)}

                                            />
                                            <button
                                                className="bg-[#3776D4] text-white px-2 py-1 cursor-pointer"
                                                onClick={() => editTaskHandler(task.id)}
                                            >
                                                Edit
                                            </button>

                                            {/* <label htmlFor="task-modal" className="bg-[#3776D4] text-white px-2 py-1 cursor-pointer">
                                                Edit
                                            </label>

                                            <Modal task={task}></Modal> */}
                                            <button
                                                className="bg-red-500 text-white px-2 py-1"
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}


            {editTask && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="modal-box">
                        <h3 className="font-semibold text-lg bg-[#3776D4] text-base-100 p-2">
                            Update Task
                        </h3>
                        <div className="px-4 py-3 font-medium text-sm text-left">
                            <label className="text-[#3776D4] mb-2">Edit Task</label>
                            <input
                                type="text"
                                value={editTask.text}
                                className="border p-2 mb-2 w-full"
                                onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
                            />
                            <label className="text-[#3776D4] text-left mb-2">Priority</label>
                            <select
                                className="border p-2 mb-2 w-full"
                                value={editTask.priority}
                                onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn bg-[#3776D4] hover:bg-primary text-base-100 btn-sm"
                                onClick={updateTask}
                            >
                                Save
                            </button>

                            <button
                                className="btn btn-neutral text-base-100 btn-sm"
                                onClick={() => setEditTask(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TodoList;

