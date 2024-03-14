import React from 'react';

const ProfileSearch = ({ handleSearch }) => {
  const [user, setUser] = React.useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(user);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a user"
            value={user}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSearch;
