import React from 'react'

type ContainerProps = {
  as: 'div' | 'section' | 'main' | 'footer'
  children: React.ReactNode
  className?: string
  id?: string
}

const Container = ({ as = 'div', children, className, id }: ContainerProps) => {
  const Component = as || 'div'

  return (
    <Component
      className={`container mx-auto px-5 pt-8 md:px-16 lg:px-20 ${className}`}
      id={id}
    >
      {children}
    </Component>
  )
}

export default Container
