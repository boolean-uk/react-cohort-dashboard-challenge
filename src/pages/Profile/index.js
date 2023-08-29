import { useContext } from 'react';
import '../../styles/profile.css'
import ProfileContent from './components/ProfileContent';
import DataContext from '../../DataContext';

export default function Profile() {
  const { user } = useContext(DataContext)

  return (
    <main className='main profile'>
      <h1 className='profile-title'>Profile</h1>
      <ProfileContent />
    </main>
  )
}