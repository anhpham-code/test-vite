import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [work, setWork] = useState('')
  const [listTask, setListTask] = useState([])
  const handleAdd = () => {
    if (listTask?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.warn("Công việc đã thêm vào rồi")
    }
    else {
      setListTask(prev => [...prev, { id: work?.replace(/\s/g, ''), work }])
      setWork("")
      toast.success("Công việc đã thêm thành công")
    }
  }
  const handleDeleteTask = (id) => {
    setListTask(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
      <div className="flex gap-8 h-screen items-center border border-red-600 justify-center">
        <div>
          <input type="text"
            value={work}
            onChange={e => setWork(e.target.value)}
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]" />
          <button
            type="button"
            onClick={handleAdd}
            className="outline-none px-4 py-2 ml-3 bg-blue-500 rounded-md text-white">
            Add task
          </button>

          <h3 className="w-full font-bold text-xl">Context:</h3>
          <ul className=" bg-blue-200 rounded-lg border-4 border-blue-500">
            {listTask?.map((item) => {
              return (
                <li className="flex items-center justify-between bg-white p-2 mb-2 rounded border-2 border-blue-300" key={item.id}>
                  <span className="mr-auto">{item.work}</span>
                  <span onClick={() => handleDeleteTask(item.id)} className="ml-auto cursor-pointer" >X</span>
                </li>

              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  )
}

export default App
