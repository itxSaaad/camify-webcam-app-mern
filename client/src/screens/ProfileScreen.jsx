import ImageGalleryCard from '../components/ui/Profile/ImageGalleryCard';
import ProfileCard from '../components/ui/Profile/ProfileCard';

function ProfileScreen() {
  const user = {
    avatar: 'https://avatars.dicebear.com/api/avataaars/1.svg',
    name: 'Jane Doe',
    email: 'jane@example.com',
  };

  const gallery = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
  ];
  return (
    <section className="bg-indigo-500 flex flex-row justify-center items-center h-screen p-10">
      <ProfileCard user={user} />
      <ImageGalleryCard gallery={gallery} />
    </section>
  );
}

export default ProfileScreen;
