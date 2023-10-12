const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

async function fetchSecret(secretName) {
  // Create a client to interact with Google Cloud Secret Manager
  const client = new SecretManagerServiceClient();

  try {
    // Construct the resource name of the latest version of the secret
    const versionName = client.secretVersionPath(
      "ecommerce-376614", // Replace with your project ID
      secretName,
      "latest"
    );

    // Access the secret version
    const [version] = await client.accessSecretVersion({
      name: versionName,
    });

    // Get the payload as a string
    const secretValue = version.payload.data.toString("utf8");

    return secretValue;
  } catch (error) {
    console.error(`Error fetching secret ${secretName}:`);
    return null;
  }
}

module.exports = {
  fetchSecret,
};
