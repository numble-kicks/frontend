import {
  collection,
  getDocs,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot
} from 'firebase/firestore';
import { db } from 'server/firebase';
import { IUser } from 'types';

export const findUser = async (username: string) => {
  const q: Query<any> = collection(db, 'users');
  const querySnapshot: QuerySnapshot<IUser> = await getDocs(q);
  const docs: QueryDocumentSnapshot<IUser>[] = querySnapshot.docs;
  const users: IUser[] = docs.map((doc: QueryDocumentSnapshot<IUser>) =>
    doc.data()
  );

  return users.filter(user => user.domain === username)[0];
};
