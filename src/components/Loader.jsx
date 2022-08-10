import React from 'react'
import '../css/Loader.css'

const Loader = ({ loading }) => {
  const stylesLoading = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={stylesLoading}>
      <span className={loading && 'loader'}></span>
    </div>
  )
}

export default Loader
