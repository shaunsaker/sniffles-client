import getRef from '../getRef';

export default ({ url, queries }, callback) => {
  return new Promise(async (resolve) => {
    let ref = await getRef(url);

    if (queries) {
      const { orderByChild, equalTo } = queries;

      ref = ref.orderByChild(orderByChild).equalTo(equalTo);
    }

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
