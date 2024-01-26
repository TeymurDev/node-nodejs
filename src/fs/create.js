import fs from 'fs';
import path from 'path';

const create = async () => {
  const directoryPath = 'src/fs/files';
  const fileName = 'fresh.txt';
  const filePath = path.join(directoryPath, fileName);

  if (fs.existsSync(filePath)) {
    throw new Error('FS operation failed');
  }

  fs.writeFile(filePath, 'I am fresh and young', (err) => {
    if (err) {
      console.error('error creating file', err);
    } else {
      console.log(`file created successfully.`);
    }
  });
};

await create();
