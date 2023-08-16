import PropTypes from 'prop-types';

function Profile({ user }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-32 h-32 rounded-full"
      />

      <p className="text-gray-600">
        Welcome back, <span className="font-bold">{user.name}</span>
      </p>
      <p className="text-gray-600">
        Your email is{' '}
        <span className="font-bold">
          <a
            href={`mailto:${user.email}`}
            className="text-indigo-500 hover:text-indigo-600"
          >
            {user.email}
          </a>
        </span>
      </p>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
