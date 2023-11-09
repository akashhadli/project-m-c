import React from 'react'
import './Admindashboard.css'
import background from '../images/Desktop.png';
import gr from '../images/gr.png';
import mc from '../images/mc.png';
import mu from '../images/mu.png';
import mv from '../images/mv.png';
import mi from '../images/mi.png';
import ms from '../images/ms.png';
import ad from '../images/ad.png';
import vs from '../images/vs.png';
function Admindashboard() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
     <div className='admin-dashboard'>
        <h1 className='admin-dashboard-title' 
      style={{
text-align:'center',
      }}
      >MAIN MENU</h1>
          <div className='admin-dashboard-buttons'>
            <div className='admin-dashboard-buttons-row'>
              <button className='admin-dashboard-button'>
                <img src={gr} alt='gr' className='admin-dashboard-button-icon' />
                GENERATE REPORTS
                </button>
              <button className='admin-dashboard-button'>
                <img src={mu} alt='mu' className='admin-dashboard-button-icon' />
                MANAGE USERS
                </button>
              <button className='admin-dashboard-button'>
                <img src={mi} alt='ms' className='admin-dashboard-button-icon' />
                MANAGE INVOICE
                </button>
            </div>
            <div className='admin-dashboard-buttons-row'>
              <button className='admin-dashboard-button'>
                <img src={vs} alt='' className='admin-dashboard-button-icon' />
                MANAGE VECHICLES
                </button>
              <button className='admin-dashboard-button'>
                <img src={mc} alt='mc' className='admin-dashboard-button-icon' />
                MANAGE CLIENT
                </button> 
                <button className='admin-dashboard-button'>
                <img src={mu} alt='mi' className='admin-dashboard-button-icon' />
                MANAGE STAFF
                </button>
            </div>
            <div className='admin-dashboard-buttons-row'>
              <button className='admin-dashboard-button'>
                <img src={mv} alt='mv' className='admin-dashboard-button-icon' />
                MANAGE SELLERS
                </button>
              <button className='admin-dashboard-button'>
                <img src={ms} alt='mi' className='admin-dashboard-button-icon' />
                MANAGE BUYERS
                </button>
              <button className='admin-dashboard-button'>
                <img src={ad} alt='mc' className='admin-dashboard-button-icon' />
                MANAGE CONSIGNMENT
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Admindashboard
