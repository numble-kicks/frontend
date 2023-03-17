import { storage } from 'server/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getVideoURL = async () => {
  const listRef = ref(storage, 'videos');

  // Find all video items from Firebase storage.
  await listAll(listRef).then(res => {
    res.items.forEach((itemRef, idx) => {
      // Get the download URL from each video
      getDownloadURL(itemRef)
        .then(url => {
          console.log(idx, url);
        })
        .catch(error => {
          console.log(error.message);
        });
    });
  });
};
