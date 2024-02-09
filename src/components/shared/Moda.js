import React from 'react';

const Modal = ({ task }) => {
    return (
        <>
            <input type="checkbox" id="task-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-lg bg-[#3776D4] text-base-100 p-2">
                        Update Task
                    </h3>
                    <div className="px-4 py-3 font-medium text-[#3776D4] text-sm text-left">
                        <label className=" mb-2">Edit Task</label>
                        <input
                            type="text"
                            className="border p-2 mb-2 w-full"
                            value={task?.text}
                        />
                        <label className="text-left mb-2">Priority</label>
                        <select
                            className="border p-2 mb-2 w-full"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="modal-action">
                        <button
                            className="btn bg-[#3776D4] hover:bg-primary text-base-100 btn-sm"
                        >
                            Save
                        </button>
                        <label htmlFor="task-modal" className="btn btn-neutral text-base-100 btn-sm">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;