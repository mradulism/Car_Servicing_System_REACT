import React from 'react'

const Footer = () => {
    const style={
        position:'fixed',
        left:'0',
        bottom:'0',
        width:'100%',
        backgroundColor:'#007580',
       
      }  
  return (
    <footer className='footer' style={style} >
        <div className='container'>
           <span className='text-white'>Car Servicing @ Yash Technologies All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer