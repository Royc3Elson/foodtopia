import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './Book.css'

function Book() {
  let navigate = useNavigate();
  function goHome() {
    navigate("/");
}

  const handleContact = () => {
    
  }

  return (
      <div className='book'>
        <img onClick={goHome} src={logo} alt="" className='auth__Logo'/>
        <div className='about'>
            <h1>About Us</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
        </div>
        <div className='contact'>
            <h1>Contact US</h1>
            <form className='loginSignin__form' onSubmit={handleContact}>
                <h1>Add New Destination</h1>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Name</label>
                        {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Serayu Rafting' className='ls_input'/> */}
                    </div>
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Description</label>
                        {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='ls_input'/> */}
                    </div>
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Description</label>
                        {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='ls_input'/> */}
                    </div>
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
      </div>
  )
}

export default Book