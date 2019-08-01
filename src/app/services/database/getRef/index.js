import firebase from '../../firebase';

// Takes a string of url format
// and returns a firestore ref
export default (url) => {
  return new Promise(async (resolve) => {
    const fb = await firebase();

    const ref = fb.database().ref(url);

    resolve(ref);
  });
};
