import {
  collection,
  getDocs,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot
} from 'firebase/firestore';
import { db } from 'server/firebase';
import { IVideoItem } from 'types';

export const getVideos = async () => {
  const q: Query<any> = collection(db, 'videos');
  const querySnapshot: QuerySnapshot<IVideoItem> = await getDocs(q);
  const docs: QueryDocumentSnapshot<IVideoItem>[] = querySnapshot.docs;
  const videos: IVideoItem[] = docs.map(
    (doc: QueryDocumentSnapshot<IVideoItem>) => doc.data()
  );

  return videos;
};
