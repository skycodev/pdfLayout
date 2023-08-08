import { useDrag, useDrop } from 'react-dnd'
import './DraggableItem.css'
import ImageIcon from '../../assets/icons/ImageIcon'
import TextIcon from '../../assets/icons/TextIcon'
import TableIcon from '../../assets/icons/TableIcon'

const DraggableItem = ({ name, type, index, onMoveItem, isNew }) => {
  let classNames = 'draggable-item'
  let iconComponent

  switch (name) {
    case 'text':
      classNames += ' draggable-item--text'
      iconComponent = <TextIcon />
      break
    case 'image':
      classNames += ' draggable-item--image'
      iconComponent = <ImageIcon />
      break
    case 'table':
      classNames += ' draggable-item--table'
      iconComponent = <TableIcon />
      break
    default:
      classNames += ' '
      break
  }

  const [{ isDragging }, drag] = useDrag({
    type: 'DRAGGABLE_ITEM',
    item: { name, type, isNew, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  const [, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    hover: (item, monitor) => {
      if (!drag) {
        return
      }
      if (!monitor.isOver({ shallow: true })) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }

      if (!item.isNew) {
        onMoveItem(dragIndex, hoverIndex)
        item.index = hoverIndex
      }
    }
  })

  return (
    <div ref={(node) => drag(drop(node))} className={classNames} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className='icon-container'>
        {iconComponent}
      </div>
      <div className='text-container'>
        {name}
      </div>

    </div>
  )
}

export default DraggableItem
