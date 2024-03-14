import React from 'react'

const ProfileDisplay = ({ data }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
    <img src={data.avatar_url} alt="user avatar" style={{ width: '200px', height: '200px' }} />
    <h3 className="mt-3">{data.name}</h3>
    <a href={data.html_url}>View Profile</a>
  </div>
  )
}

export default ProfileDisplay
