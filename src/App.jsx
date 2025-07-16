import React from 'react'
import Task from './Components/Task'

const App = () => {
  return (
    <div>
      <Task />
    </div>
  )
}

export default App



// import React, { useState, useEffect } from 'react'
// import Task from './Components/Task'

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");

//   // Load tasks from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem('tasks');
//     if (stored) setTasks(JSON.parse(stored));
//   }, []);

//   // Save tasks to localStorage on change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   function add() {
//     if (input.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), content: input }]);
//     setInput("");
//   }

//   function deleteTask(id) {
//     setTasks(tasks.filter(t => t.id !== id));
//   }

//   function modifyTask(id, newContent) {
//     setTasks(tasks.map(t => t.id === id ? { ...t, content: newContent } : t));
//   }

//   function reorderTasks(startIdx, endIdx) {
//     const updated = [...tasks];
//     const [removed] = updated.splice(startIdx, 1);
//     updated.splice(endIdx, 0, removed);
//     setTasks(updated);
//   }

//   return (
//     <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-violet-100">
//       <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-3xl shadow-2xl border border-slate-200">
//         <div className="flex flex-row w-full gap-4 mb-8">
//           <input
//             id='tsk'
//             type='text'
//             className="flex-1 outline-none border border-slate-300 rounded-xl px-4 py-3 text-lg bg-slate-50 focus:ring-2 focus:ring-violet-300 transition-all shadow-sm"
//             placeholder='Type your tasks...'
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => { if (e.key === 'Enter') add(); }}
//           />
//           <button
//             onClick={add}
//             className="rounded-xl cursor-pointer bg-gradient-to-r from-indigo-400 to-violet-500 hover:from-indigo-500 hover:to-violet-600 text-white font-semibold px-6 py-3 shadow-md transition-all text-lg"
//           >
//             Add Task
//           </button>
//         </div>
//         <div id='content' className='w-full flex flex-col items-center'>
//           <Task
//             tasks={tasks}
//             deleteTask={deleteTask}
//             modifyTask={modifyTask}
//             reorderTasks={reorderTasks}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
