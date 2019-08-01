import getRef from '../getRef';

export default ({ url, data }) => {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .update(data)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
};
