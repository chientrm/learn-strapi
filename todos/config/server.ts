export default ({ env }) => {
  const port = 1337;
  if (process.env.GITPOD_WORKSPACE_URL) {
    const url = process.env.GITPOD_WORKSPACE_URL.replace(
      "https://",
      `https://${port}-`
    );
    return {
      host: env("HOST", "0.0.0.0"),
      url,
      port: env.int("PORT", port),
      app: {
        keys: env.array("APP_KEYS"),
      },
      admin: {
        url: `${url}/admin`,
      },
    };
  }
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
