import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

// import 

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Four-Castors
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>

<<<<<<< HEAD
          Weather you waiting for? Hurricane and login/signup.🌞
=======
          Weather you waiting for? Hurrican and login/signup.🌞
>>>>>>> c5d40b9618ea413d040c68c27a2843eb33d57dc7

        </p>

        {/* <div>
      <button className="btn btn-lg btn-primary m-2" onClick={promptForLocation}>Get Weather</button>
    </div> */}

        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
