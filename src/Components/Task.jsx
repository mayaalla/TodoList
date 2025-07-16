
import React from 'react'
import { useState } from 'react'
const Task = () => {
    const[tasks, setTasks] = useState([])
    const[newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        
    }
    function deleteTask(index){
        let updatedTasks = tasks.filter((_, i) => i !==  index);
        setTasks(updatedTasks);

    }

    function handleTaskChange(event){



      let updated = tasks.map((value, index) => {
        if (index === event.target.id) {
          value = event.target.value
        }


    })
    setTasks(updated)
  }
  function focus(index){
    document.getElementById(index).disabled = false
    document.getElementById(index).focus()

    



  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-violet-200">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
        <h1 className="text-3xl font-bold text-violet-700 mb-6 text-center tracking-tight">To-Do List</h1>
        <div className="flex gap-4 mb-8">
          <input
            className="flex-1 outline-none border border-slate-300 rounded-xl px-4 py-3 text-lg bg-slate-50 focus:ring-2 focus:ring-violet-300 transition-all shadow-sm"
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Type your task..."
          />
          <button
            onClick={addTask}
            className="rounded-xl cursor-pointer bg-gradient-to-r from-indigo-400 to-violet-500 hover:from-indigo-500 hover:to-violet-600 text-white font-semibold px-6 py-3 shadow-md transition-all text-lg"
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {tasks.length === 0 && (
            <div className="text-center text-slate-400 text-lg mt-8">No tasks yet. Add your first task!</div>
          )}
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-2xl p-4 shadow border border-slate-200 transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg"
            >
              <input
                id={index}
                disabled
                type="text"
                value={task}
                onChange={handleTaskChange}
                className="text-slate-800 p-2 rounded-lg mr-2 flex-1 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-violet-300 outline-none transition-all text-base"
              />
              <div className="flex gap-2 items-center ml-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-transparent hover:bg-red-100 text-red-500 hover:text-red-700 px-3 py-1 rounded-full transition-all flex items-center gap-1 text-base border border-transparent hover:border-red-200 focus:ring-2 focus:ring-red-200"
                  title="Delete"
                >
                  <span role="img" aria-label="delete">🗑️</span>
                </button>
                <button
                  className="bg-transparent hover:bg-yellow-100 text-yellow-500 hover:text-yellow-700 px-3 py-1 rounded-full transition-all flex items-center gap-1 text-base border border-transparent hover:border-yellow-200 focus:ring-2 focus:ring-yellow-200"
                  title="Modify"
                  onClick={() => focus(index)}
                >
                  <span role="img" aria-label="edit">✏️</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Task


// import React, { useState } from 'react'

// const Task = ({ tasks, deleteTask, modifyTask, reorderTasks }) => {
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState("");
//   const [draggedIdx, setDraggedIdx] = useState(null);

//   const handleDragStart = (idx) => {
//     setDraggedIdx(idx);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   };

//   const handleDrop = (idx) => {
//     if (draggedIdx === null || draggedIdx === idx) return;
//     reorderTasks(draggedIdx, idx);
//     setDraggedIdx(null);
//   };

//   return (
//     <div className="flex flex-col gap-4 w-full max-w-xl font-sans">
//       {tasks.map((task, idx) => (
//         <div
//           key={task.id}
//           className="flex items-center justify-between bg-white rounded-2xl p-4 mb-2 shadow border border-slate-200 transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg"
//           draggable
//           onDragStart={() => handleDragStart(idx)}
//           onDragOver={handleDragOver}
//           onDrop={() => handleDrop(idx)}
//         >
//           {editId === task.id ? (
//             <input
//               className="text-slate-800 p-2 rounded-lg mr-2 flex-1 bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-violet-300 outline-none transition-all text-base"
//               value={editValue}
//               onChange={e => setEditValue(e.target.value)}
//               onBlur={() => {
//                 modifyTask(task.id, editValue);
//                 setEditId(null);
//               }}
//               onKeyDown={e => {
//                 if (e.key === 'Enter') {
//                   modifyTask(task.id, editValue);
//                   setEditId(null);
//                 }
//               }}
//               autoFocus
//             />
//           ) : (
//             <span
//               className="flex-1 text-base text-slate-800 font-medium cursor-pointer select-none px-2"
//               onDoubleClick={() => { setEditId(task.id); setEditValue(task.content); }}
//             >
//               {task.content}
//             </span>
//           )}
//           <div className="flex gap-2 items-center ml-2">
//             <button
//               className="bg-transparent hover:bg-red-100 text-red-500 hover:text-red-700 px-3 py-1 rounded-full transition-all flex items-center gap-1 text-base border border-transparent hover:border-red-200 focus:ring-2 focus:ring-red-200"
//               onClick={() => deleteTask(task.id)}
//               title="Delete"
//             >
//               <span role="img" aria-label="delete">🗑️</span>
//             </button>
//             <button
//               className="bg-transparent hover:bg-yellow-100 text-yellow-500 hover:text-yellow-700 px-3 py-1 rounded-full transition-all flex items-center gap-1 text-base border border-transparent hover:border-yellow-200 focus:ring-2 focus:ring-yellow-200"
//               onClick={() => { setEditId(task.id); setEditValue(task.content); }}
//               title="Modify"
//             >
//               <span role="img" aria-label="edit">✏️</span>
//             </button>
//             <span
//               className="cursor-grab ml-2 text-2xl select-none text-slate-400 hover:text-violet-400 transition-colors"
//               title="Drag to reorder"
//               role="img"
//               aria-label="drag"
//             >
//               🟰
//             </span>
//           </div>
//         </div>
//       ))}
//       {tasks.length === 0 && (
//         <div className="text-center text-slate-400 text-lg mt-8">No tasks yet. Add your first task!</div>
//       )}
//     </div>
//   )
// }

// export default Task
