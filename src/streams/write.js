import fs from 'fs';

const write = async () => {
  const directoryPath = 'src/streams/files';

  const writeStream = fs.createWriteStream(`${directoryPath}/fileToWrite.txt`);

  writeStream.write('Hello there');
};

await write();
