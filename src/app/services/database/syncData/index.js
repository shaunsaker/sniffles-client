import getRef from '../getRef';

export default ({ url }, callback) => {
  return new Promise(async (resolve) => {
    const ref = await getRef(url);

    // TODO: Queries

    const unsubscribe = ref.on(
      'value',
      (snapshot) => {
        const data = snapshot.val();

        callback({ data });
      },
      (error) => {
        callback({ error });
      },
    );

    resolve(unsubscribe);
  });
};
