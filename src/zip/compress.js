import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
  const directoryPath = 'src/zip/files';

  const zip = zlib.createGzip();
  const read = fs.createReadStream(`${directoryPath}/fileToCompress.txt`);
  const write = fs.createWriteStream(`${directoryPath}/archive.gz`);
  read.pipe(zip).pipe(write);
  console.log('file zipped successfully');
};

await compress();
