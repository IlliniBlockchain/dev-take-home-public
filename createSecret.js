const EthCrypto = require('eth-crypto');

async function main() {

  // Create a random 32 byte secret
  const secret = EthCrypto.createIdentity().privateKey;

  // Print the secret
  console.log(`Secret: ${secret.slice(2)}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});