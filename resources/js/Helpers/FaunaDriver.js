import faunadb from "faunadb";

const q = faunadb.query;

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
            id: userId,
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

const createCodes = async (shortcode, longUrl) => {};

export { createUser };
