import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Home from './Home';
import SideBarToggleButton from './SideBarToggleButton';
import CapturesList from './CapturesList';
import UserList from './UserList';

function MainContent({ activeMenuItem, collapsible, onToggleSidebar }) {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const formattedUserName = userInfo.name
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ');

  return (
    <div
      className={`bg-indigo-600 h-screen ${
        collapsible ? 'w-10/12' : 'w-full'
      } transition-width duration-300 ease-in-out p-10`}
    >
      <SideBarToggleButton onClick={onToggleSidebar} isOpen={collapsible} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-bold">
          Welcome to Admin Panel {formattedUserName}!
        </h1>
        {activeMenuItem === 'Home' && <Home />}
        {activeMenuItem === 'Users' && <UserList />}
        {activeMenuItem === 'Captures' && <CapturesList />}
      </div>
    </div>
  );
}

MainContent.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  collapsible: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

export default MainContent;
