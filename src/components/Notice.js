import React from 'react'

export default props => {
  const removeNotice = key => {
    props.notice.splice(key, 1);
    props.setNotice([...props.notice]);
  }

  return props.notice.map((piece, key) => <div className={`notice ${piece.type}`} key={key} onClick={() => removeNotice(key)}>{piece.message}</div>)
}