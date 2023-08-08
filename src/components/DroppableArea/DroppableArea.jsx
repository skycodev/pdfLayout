import { useState } from 'react'
import { useDrop } from 'react-dnd'
import DraggableItem from '../DraggableItem/DraggableItem'
import './DroppableArea.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DroppableArea = ({ acceptedTypes }) => {
  const [droppedItems, setDroppedItems] = useState([])
  const handleDrop = (item, monitor) => {
    const itemType = monitor.getItemType()

    if (!acceptedTypes.includes(item.type)) {
      (item.type !== 'DRAGGABLE_ITEM') &&
        toast.error(`Only ${acceptedTypes.join(', ')} are accepted`, { autoClose: 2000 })
      return
    }

    const itemData = {
      id: item.isNew ? `${item.name}-${Date.now()}` : item.id,
      name: item.name,
      type: itemType,
      isNew: false
    }

    setDroppedItems((prevItems) => [...prevItems, itemData])
  }

  const handleItemMove = (dragIndex, hoverIndex) => {
    if (dragIndex >= 0 && dragIndex < droppedItems.length &&
      hoverIndex >= 0 && hoverIndex < droppedItems.length) {
      const draggedItem = droppedItems[dragIndex]
      const updatedItems = [...droppedItems]
      updatedItems.splice(dragIndex, 1)
      updatedItems.splice(hoverIndex, 0, draggedItem)
      setDroppedItems(updatedItems)
    }
  }

  const [{ isOver }, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    drop: (item, monitor) => {
      handleDrop(item, monitor)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true })
    })
  })

  return (
    <div ref={drop} className={`droppable-area ${(isOver) ? 'droppable-area--over' : ''}`}>
      {droppedItems.length > 0
        ? (
            droppedItems.map((item, index) => (
              item && (
                <DraggableItem
                  key={item?.id}
                  id={item?.id}
                  index={index}
                  name={item?.name}
                  type={item?.type}
                  onMoveItem={handleItemMove}
                />
              )
            ))
          )
        : (
          <p key='fallback'>Drag and drop items here</p>
          )}
    </div>
  )
}

export default DroppableArea
