import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.locations ? profile.locations.length : 0}{' '}
                    saved location
                    {profile.locations && profile.locations.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
<<<<<<< HEAD
                  Your saved locations.
=======
                  View their locations.
>>>>>>> 790a13debc8e8cac5c2641998554471ee4b56f20
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
