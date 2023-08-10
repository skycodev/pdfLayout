import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DroppableArea from './components/DroppableArea/DroppableArea'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function isTouchDevice () {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}

function App () {
  const isTouch = isTouchDevice()

  return (
    <DndProvider backend={isTouch ? TouchBackend : HTML5Backend}>
      <main className='main-app'>
        <Sidebar />
        <section className='droppable-areas'>

          <DroppableArea name='header' type='header' acceptedTypes={['IMAGE']} />

          <DroppableArea name='body' type='body' acceptedTypes={['TEXT', 'IMAGE', 'TABLE']} />

          <DroppableArea name='footer' type='footer' acceptedTypes={['TEXT']} />

        </section>
        <ToastContainer />

      </main>
    </DndProvider>
  )
}

export default App
