import fs from 'fs';

const read = async () => {
  const directoryPath = 'src/fs/files';

  fs.readFile(`${directoryPath}/fileToRead.txt`, (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    console.log(data.toString());
  });
};

await read();
