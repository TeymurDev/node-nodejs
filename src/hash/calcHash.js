import crypto from 'crypto';

const calculateHash = async () => {
  const directoryPath = 'src/hash/files';

  const hash = crypto.createHash('sha256');
  const data = hash.update(
    `${directoryPath}/fileToCalculateHashFor.txt`,
    'utf-8',
  );
  const generateHash = data.digest('hex');

  console.log(generateHash);
};

await calculateHash();
