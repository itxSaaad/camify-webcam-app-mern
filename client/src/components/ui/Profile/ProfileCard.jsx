import PropTypes from 'prop-types';
import React, { useState, Suspense } from 'react';

import Button from '../Button';
import Loader from '../Loader';

const Profile = React.lazy(() => import('./Profile'));
const EditProfileForm = React.lazy(() => import('./EditProfileForm'));

function ProfileCard({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <aside className="bg-white h-full w-1/4 flex flex-col items-center justify-between rounded-lg shadow-lg p-4">
      <Suspense fallback={<Loader />}>
        <h2 className="text-2xl font-bold">
          {isEditing ? 'Edit Profile' : 'Your Profile'}
        </h2>
        {isEditing ? (
          <EditProfileForm user={user} setIsEditing={setIsEditing} />
        ) : (
          <Profile user={user} />
        )}
        {!isEditing && (
          <Button
            variant="primary"
            className="rounded-lg"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit Profile
          </Button>
        )}
      </Suspense>
    </aside>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileCard;
