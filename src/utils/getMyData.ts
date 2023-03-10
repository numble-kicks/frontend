import { IUser } from 'types';

interface ReturnProps {
  myName: string;
  myPhotoURL: string;
  myData: IUser;
}

export const getMyData = (): ReturnProps => {
  const isLoggedIn = !!sessionStorage.getItem('kicks-user');
  const myData =
    isLoggedIn && JSON.parse(sessionStorage.getItem('kicks-user') || '');
  const myName = isLoggedIn && myData.name;
  const myPhotoURL = isLoggedIn && myData.photoURL;

  return { myData, myName, myPhotoURL };
};
