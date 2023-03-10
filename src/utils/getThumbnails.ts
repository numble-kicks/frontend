import {
  collection,
  getDocs,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot
} from 'firebase/firestore';
import { db } from 'server/firebase';
import { IVideoListItem } from 'types';

export const getThumbnails = async () => {
  const q: Query<any> = collection(db, 'thumbnails');
  const querySnapshot: QuerySnapshot<IVideoListItem> = await getDocs(q);
  const docs: QueryDocumentSnapshot<IVideoListItem>[] = querySnapshot.docs;
  const videos: IVideoListItem[] = docs.map(
    (doc: QueryDocumentSnapshot<IVideoListItem>) => doc.data()
  );

  return videos;
};
