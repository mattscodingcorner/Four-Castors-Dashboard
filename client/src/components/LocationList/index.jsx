import { useState } from 'react';
import { useMutation } from '@apollo/client';
import WeatherComponent from '../Weather' // Import your WeatherComponent

import { REMOVE_LOCATION } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const LocationsList = ({ locations, isLoggedInUser = false }) => {
  const [removeLocation, { error }] = useMutation(REMOVE_LOCATION, {
    refetchQueries: [QUERY_ME, 'me'],
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleRemoveLocation = async (location) => {
    try {
      const { data } = await removeLocation({
        variables: { location },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
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
                  <span onClick={() => handleLocationClick(location)}>{location}</span>
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
      {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
      {selectedLocation && <WeatherComponent location={selectedLocation} setSelectedLocation={setSelectedLocation} />}
    </div>
  );
};

export default LocationsList;

// the spans that contain the location names are clickable links that will take the user to the /weather/:location route, where :location is the name of the location. This route will display the weather data for the location.