import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import * as S from './styles';

export const GoogleLogin = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      if (res) {
        // Property 'accessToken' does not exist on type 'User'.
        // const accessToken = res.user.accessToken;
        const profile = {
          name: res.user.displayName,
          photoURL: res.user.photoURL
        };

        // sessionStorage.setItem('kicks-token', accessToken);
        sessionStorage.setItem('kicks-user', JSON.stringify(profile));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.GoogleButton onClick={login}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="icon"
      />
      <p>Sign in with Google</p>
    </S.GoogleButton>
  );
};
