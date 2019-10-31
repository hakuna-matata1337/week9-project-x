import React from 'react'

export default props => {
  return (
    <header className="header" style={props.area && { gridArea: 'header' }}>
      Welcome to da bomb <span role="img" aria-label="a bomb">💣</span>
    </header>
  )
}
