import faunadb from "faunadb";
import { userConfig } from "../../config/database.js";

const q = faunadb.query;
const { Create, Collection, CurrentIdentity, Get, Let, Select, Update, Var } =
  q;

const CreateUser = (name) => {
  return Create(Collection("users"), {
    data: {
      name: name,
      teamId: userConfig.teamId,
      user_level: userConfig.user_level,
      codes_used: userConfig.codes_used,
      codes_quota: userConfig.codes_quota,
      verified: userConfig.verified,
      activated: userConfig.activated,
      deleted: userConfig.deleted,
    },
  });
};

const UpdateUser = (updateObject) => {
  return Let(
    {
      accountRef: CurrentIdentity(),
      userRef: Select(["data", "user"], Get(Var("accountRef"))),
    },
    Update(Var("userRef"), {
      data: updateObject,
    })
  );
};

export { CreateUser, UpdateUser };
