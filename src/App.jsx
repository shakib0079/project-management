import Form from "./components/Form"
// import Home from "./components/Home"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <>
      <div className="h-screen flex gap-6 items-center">
        <Sidebar />
        <div className="border border-red-500 h-3/4 w-3/4">
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
