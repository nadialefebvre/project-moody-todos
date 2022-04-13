import React, { useEffect, useState } from "react"
import Sortable from "sortablejs"

// import Todo from './Todo'

const SortableDroppable = ({ arrayToUse }) => {

  const [droppable, setDroppable] = useState(null)

  useEffect(() => {
    if (droppable) {
      Sortable.create(droppable, {
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        handle: '.handle',
        animation: 150,
        // className: "container",
        ghostClass: "dragging",
        // scrollFn: function (offset) {
        //   console.log("i'm here scrolling", offset);
        //   return false;
        // },
        scroll: true,
        scrollSensitivity: 100,
        bubbleScroll: true
      })
    }
  }, [droppable])

  return (
    <>
      <div ref={(el) => setDroppable(el)}>
        {arrayToUse}
        {/* {pendingTodos.reverse().map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))} */}
      </div>

    </>
  )
}

export default SortableDroppable
