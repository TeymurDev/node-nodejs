import fs from 'fs';

const read = async () => {
  const directoryPath = 'src/streams/files';

  const readStream = fs.createReadStream(
    `${directoryPath}/fileToRead.txt`,
    'utf8',
  );

  readStream.on('data', (chunk) => {
    console.log(chunk);
  });
};

await read();
