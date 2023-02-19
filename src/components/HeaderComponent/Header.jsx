import { Link, useNavigate } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';


function Header() {
  const { logOut, isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = () => {
    logOut()
    navigate('/login')
  }

  return (
    <div className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {
        isLoggedIn ?
          <>
            <Link to='/'><h1>Instag</h1></Link>
            <FiLogOut size={30} color={'#f8bbd0'} className="me-3" onClick={handleClick} />
          </>

          :
          <>
            <h1>Instag</h1>
          </>

      }

    </div>
  )
}

export default Header