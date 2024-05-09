import React from 'react'

function ErrorMessage(props) {
  return (
    <div className='flex justify-start items-center text-[#FF0808] '>
       <i class="fa-solid fa-circle-exclamation -translate-y-1"></i>
        <span className='text-[#FF0808] text-left font-medium text-sm ml-2 -translate-y-1' style={{fontFamily:"Segoe UI"}}>{props.msg}</span>
    </div>
  )
}

export default ErrorMessage