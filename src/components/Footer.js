import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        
        <a
                    role='button'
                    className='btn btn-link'
                    href='mailto:carbfixer@gmail.com'
                >
                    <i className='fa fa-envelope-o' /> Carbfixer@gmail.com
                </a> |
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+15094815800'
                >
                    <i className='fa fa-phone' /> (509) 481-5800
                </a>|

                <a
                    role='button'
                    className='btn btn-link'
                    href='https://linkedin.com/in/d-altermatt-motivated-user'
                >
                    <i className="fa fa-linkedin-square" /> d-altermatt-motivated-user
                </a> |
                <a
                    role='button'
                    className='btn btn-link'
                    href='https://www.google.com/maps/place/Newman+Lake'
                >
                    <i className='fa fa-location-arrow' />
                    Newman Lake, WA 99025
                </a>
                <br />
    </div>
  )
}

export default Footer