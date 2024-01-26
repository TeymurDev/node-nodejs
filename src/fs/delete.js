import fs from 'fs';

const remove = async () => {
  const directoryPath = 'src/fs/files';

  fs.unlink(`${directoryPath}/fileToRemove.txt`, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log('file successfully deleted');
    }
  });
};

await remove();
