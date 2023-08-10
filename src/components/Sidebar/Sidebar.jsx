import DraggableItem from '../DraggableItem/DraggableItem'
import './Sidebar.css'

function Sidebar () {
  return (
    <section className='sidebar-container'>
      <div className='sidebar-title'>Elements</div>
      <nav className='sidebar'>
        <div className='item-container'>
          <DraggableItem id='image' type='IMAGE' name='image' isNew />
        </div>
        <div className='item-container'>
          <DraggableItem id='text' type='TEXT' name='text' isNew />
        </div>
        <div className='item-container'>
          <DraggableItem id='table' type='TABLE' name='table' isNew />
        </div>
      </nav>

    </section>
  )
}

export default Sidebar
