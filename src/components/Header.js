import React from 'react'

export default props => {
  return (
    <header className="header" style={props.area && { gridArea: 'header' }}>
      Welcome to da bomb
    </header>
  )
}
