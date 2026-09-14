import React, { Children, ReactNode } from 'react'

export default function layout(
  {
    Children
  }:{
      Children: ReactNode
    }
) {
    
  return (
    <div> 
      {Children}
    </div>
  )
}
