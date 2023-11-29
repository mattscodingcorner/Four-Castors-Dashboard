import { useQuery } from '@apollo/client';
import WeatherComponent from '../components/Weather';
import { QUERY_PROFILES } from '../utils/queries';

import MapComponent from '../components/Map';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>The sun is warming up...</div>
          ) : (
            <>
              <WeatherComponent />
              {/* <WeatherForecast /> */}
              {/* <ProfileList profiles={profiles} /> */}
              <MapComponent /> 
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
