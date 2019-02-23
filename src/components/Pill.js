import React from 'react'

export default ({ title, iconSrc, disabled, onClick }) => (
    <div className={`inline-flex items-center pill-btn ${iconSrc ? '' : 'justify-center content-center flex-col'}`} onClick={disabled ? null : onClick}>
        {iconSrc ? <img className='pill-btn-img' alt={iconSrc} src={iconSrc} /> : null}
        <span className='pill-btn-title'>{title}</span>
    </div>
)