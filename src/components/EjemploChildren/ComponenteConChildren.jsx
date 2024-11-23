import React from 'react'

const ComponenteConChildren = ({children}) => {
  return (
    <div>
        <p>ComponenteConChildren</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default ComponenteConChildren