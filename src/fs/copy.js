import fs from 'fs';

const copy = async () => {
  const sourceFolderPath = 'src/fs/files';
  const destinationFolderPath = 'src/fs/files_copy';

  if (fs.existsSync(destinationFolderPath)) {
    throw new Error('FS operation failed');
  }

  try {
    fs.cpSync(sourceFolderPath, destinationFolderPath, {
      recursive: true,
    });

    console.log('files successfully copied');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
