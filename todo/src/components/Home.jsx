import React, { useState } from 'react'

const Home = () => {
    const [task, setTask] = useState(""); //for input field
    const [tasks, setTasks] = useState([]); // for the list of tasks

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]); //for adding the list of tasks in array 
        setTask(""); //for clearing the task inputs 
    }

    const toggle = (index) => {
        const newTasks = [...tasks]; //giving all new tasks to the newTasks for fliping its state
        newTasks[index].completed = !newTasks[index].completed; //just fliping the states
        setTasks(newTasks) // add new tasks with completed switching states
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }
    return (

        <div className='flex flex-col items-center mt-20'>
            <h1 className='text-4xl mb-6'>ToDo list</h1>



            <form onSubmit={addTask} className='flex gap-2 mb-6'>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter the task you wanna complete today.' className='border w-100 p-2 rounded' />
                <button type='submit' className='bg-blue-400 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-600'>Add</button>
            </form>


            <table className="w-full max-w-lg border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">Checkbox</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Task</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            {/* Checkbox column */}
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <input
                                    type="checkbox"
                                    checked={t.completed}
                                    onChange={() => toggle(index)}
                                />
                            </td>

                            {/* Task column */}
                            <td className="border border-gray-300 px-4 py-2">
                                <span className={t.completed ? "text-green-500 line-through" : ""}>
                                    {t.text}
                                </span>
                            </td>

                            {/* Delete button column */}
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <button
                                    onClick={() => removeTask(index)}
                                    className="bg-red-500 px-3 py-1 rounded-full text-white text-sm cursor-pointer hover:bg-red-400"
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default Home