import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
  const directoryPath = 'src/zip/files';

  const unzip = zlib.createUnzip();
  const read = fs.createReadStream(`${directoryPath}/archive.gz`);
  const write = fs.createWriteStream(`${directoryPath}/fileToCompress.txt`);
  read.pipe(unzip).pipe(write);
  console.log('file unzipped successfully');
};

await decompress();
