import React, { ReactNode } from 'react'
import RulerLines from './RulerLines';

interface ContainerProps{
    children:ReactNode;
    className?:string;
}

const Container:React.FC<ContainerProps> = ({children,className}) => {
  return (
    <div className={`max-w-400 bg-black mx-auto relative flex flex-row overflow-x-hidden ${className}`}>
      <RulerLines variant='left'/>
        {children}
      <RulerLines variant='right'/>
    </div>
  )
}

export default Container