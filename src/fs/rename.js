import fs from 'fs';

const rename = async () => {
  const directoryPath = 'src/fs/files';

  if (fs.existsSync(`${directoryPath}/properFilename.md`)) {
    throw new Error('FS operation failed');
  }

  fs.rename(
    `${directoryPath}/wrongFilename.txt`,
    `${directoryPath}/properFilename.md`,
    (err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      console.log('file successfully renamed');
    },
  );
};

await rename();
