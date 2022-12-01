const defaults = {
  team: null,
  user_level: 0,
  used_quota: 0,
  free_quota: 10,
  verified: false,
  activated: false,
  deleted: false,
};

const userConfig = {
  teamId: defaults.team,
  user_level: defaults.user_level,
  codes_used: defaults.used_quota,
  codes_quota: defaults.free_quota,
  verified: defaults.verified,
  activated: defaults.activated,
  deleted: defaults.deleted,
};

export { userConfig };
