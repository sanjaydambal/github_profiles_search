import React from'react';

import ProfileSearch from './ProfileSearch';
import ProfileDisplay from './ProfileDisplay';

function App() {
  const [userData, setUserData] = React.useState(null)
const handleSearch = async (user) => {
  const res = await fetch(`https://api.github.com/users/${user}`)
  const data = await res.json()
  setUserData(data)
}
  return (
    <div className="App">
 <h1 className="d-flex justify-content-center"> GitHub Profile Search App</h1>
 <ProfileSearch handleSearch={handleSearch} />
 {userData && <ProfileDisplay data={userData} /> }
    </div>
  );
}

export default App;
