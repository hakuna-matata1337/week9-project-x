import React from 'react'

export default ({ passed: { notice, setNotice } }) => {
  const removeNotice = () => setNotice(null);

  return <div className={`notice ${notice.type}`} key={notice.id} onClick={() => removeNotice()}>{notice.title}</div>;
};
