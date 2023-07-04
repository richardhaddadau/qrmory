import faunadb from "faunadb";

const q = faunadb.query;

// General Functions
const updateLength = (array, length) => {};

const doesItExist = async (collection, docRef) => {};

const updateLocalStorage = async (user) => {};

// Fauna Functions
const createUser = async (userId, token) => {
  try {
    const secret = token;
    const client = new faunadb.Client({
      secret,
      keepAlive: false,
    });

    await client
      .query(
        q.Create(q.Collection("users"), {
          data: {
            userId: userId,
            codes: [],
            userTier: 0,
            codesUsed: 0,
            codesQuota: 2,
            scansUsed: 0,
            scansQuota: 25000,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        })
      )
      .then((response) => response)
      .catch((e) => {
        console.error("Error Creating User", e.name, e.message);

        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
};

const createCodes = async (shortcode, longUrl, userId, token) => {
  // Get User records: codes, codesUsed, codesQuota
  const secret = token;
  const client = new faunadb.Client({
    secret,
    keepAlive: false,
  });

  const currentCodes = [];
  let codesUsed = 0;
  let codesQuota = 0;

  try {
    await client
      .query(
        q.Create(q.Collection("codes"), {
          data: {
            shortcode,
            longUrl,
          },
        })
      )
      .then((response) => response)
      .catch((e) => {
        console.error("Error Creating Code", e.name, e.message);

        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { createUser };
