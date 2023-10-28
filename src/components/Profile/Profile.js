import Header from '../Header/Header.js';
import ProfileContent from '../ProfileContent/ProfileContent.js';

export default function Profile() {
  
  return (
    <div className="profile">
      <Header sectionClass="profile__header" />
      <main>
        <ProfileContent />
      </main>
    </div>
  )
}