import { useMutation } from '@apollo/client';

import { REMOVE_LOCATION } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const LocationsList = ({ locations, isLoggedInUser = false }) => {
  const [removeLocation, { error }] = useMutation
  (REMOVE_LOCATION, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveLocation = async (location) => {
    try {
      const { data } = await removeLocation({
        variables: { location },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!locations.length) {
    return <h3>No Saved Locations Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {locations &&
          locations.map((location) => (
            <div key={location} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{location}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveLocation(location)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default LocationsList;
