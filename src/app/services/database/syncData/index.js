import getRef from '../getRef';

export default ({ url, queries }, callback) => {
  return new Promise(async (resolve) => {
    let ref = await getRef(url);

    if (queries) {
      const { orderByChild, equalTo, limit } = queries;

      if (orderByChild) {
        ref = ref.orderByChild(orderByChild);
      }

      if (equalTo) {
        ref = ref.equalTo(equalTo);
      }

      if (limit) {
        ref = ref.limitToLast(limit);
      }
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
