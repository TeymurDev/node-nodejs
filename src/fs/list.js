import fs from 'fs';

const list = async () => {
  const directoryPath = 'src/fs/files';

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
