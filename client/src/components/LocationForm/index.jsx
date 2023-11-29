import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_LOCATION } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LocationForm = ({ profileId }) => {
  const [location, setLocation] = useState('');
  const [formError, setFormError] = useState(null);

  const [addLocation, { error }] = useMutation(ADD_LOCATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if location is empty
    if (!location.trim()) {
      setFormError('Location field cannot be empty');
      return;
    }

    try {
      const data = await addLocation({
        variables: { profileId, location },
      });

      setLocation('');
      setFormError(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Save more Weather locations below</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Save this location..."
              value={location}
              className="form-input w-100"
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Save Location
            </button>
          </div>
          {formError && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {formError}
            </div>
          )}
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You&apos;ll need to be logged in to see what the weather is up to {' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default LocationForm;


//TODO: add error handling for no location entered