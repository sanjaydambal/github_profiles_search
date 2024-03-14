import React from'react';

import ProfileSearch from './ProfileSearch';
import ProfileDisplay from './ProfileDisplay';

function App() {
  const [userData, setUserData] = React.useState(null)
const handleSearch = async (user) => {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setUserData(data)
  } catch (error) {
    console.log(error)
  }
 
}
  return (
    <div className="App">
 <h1 > GitHub Profile Search App</h1>
 <ProfileSearch handleSearch={handleSearch} />
 {userData && <ProfileDisplay data={userData} /> }
    </div>
  );
}

export default App;
