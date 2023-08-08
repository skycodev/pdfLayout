import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DroppableArea from './components/DroppableArea/DroppableArea'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App () {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main-app'>
        <Sidebar />
        <section className='droppable-areas'>
          {/* <h2>Header Area (Accepts only Image elements)</h2> */}
          <DroppableArea id='header' type='header' acceptedTypes={['IMAGE']} />
          {/* <h2>Body Area (Accepts any element type)</h2> */}
          <DroppableArea id='body' type='body' acceptedTypes={['TEXT', 'IMAGE', 'TABLE']} />
          {/* <h2>Footer Area (Accepts only Text elements)</h2> */}
          <DroppableArea id='footer' type='footer' acceptedTypes={['TEXT']} />
        </section>
        <ToastContainer />

      </main>
    </DndProvider>
  )
}

export default App
