import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        {/* isim */}
        <div className="header-name">
            <h1>Selman Aktaş</h1>
        </div>
        {/* meslek */}
        <div className="header-job">
            <h1>Software Developer</h1>
        </div>
    </div>
  )
}

export default Header