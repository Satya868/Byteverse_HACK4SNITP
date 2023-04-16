import React from 'react'

const Services = () => {
  return (
    <div style={{ backgroundImage:"../../assets/skyyy.gif"}}>
    <div className='cla' style={{display:"flex", border:"black", borderRadius:"21px", minHeight:"100vh",}}>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
        <span style={{font:"bold", marginBottom: "30px", marginRight:"5%", color:" rgb(128, 5, 243)"}}><h1>Our Services</h1></span>
        <ul style={{listStyle:'none',color:"white" }}>
          <li><h4>1. One to One Chatting</h4></li>
          <li><h4>2. Resume Review</h4></li>
          <li><h4>3. Get your Zoom call Booking</h4></li>
          <li><h4>5. You can With Your Mentor Online</h4></li>
          <li><h4>6. Expand Your Network</h4></li>
        </ul>
      </div>
    </div>    
  </div>
  )
}

export default Services
