import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import FileList from '../../components/FileManager/FileList/FileList';
import NavigationBar from '../../components/FileManager/navbar/navbar';

// name, type, size, date
function createData(
  name: string,
  type: string,
  size: string,
  date: string,
  action?: string,
) {
  return { name, type, size, date, action };
}

let rawData = [
  createData('Videos', 'Folder', '-', '01/03/2021'),
  createData('README.md', 'File', '1 KB', '01/04/2021'),
  createData('LICENSE', 'File', '2 KB', '01/05/2021'),
  createData('package.json', 'File', '3 KB', '01/06/2021'),
  createData('package-lock.json', 'File', '4 KB', '01/07/2021'),
  createData('tsconfig.json', 'File', '5 KB', '01/08/2021'),
  createData('webpack.config.js', 'File', '6 KB', '01/09/2021'),
  createData('yarn.lock', 'File', '7 KB', '01/10/2021'),
  createData('.gitignore', 'File', '8 KB', '01/11/2021'),
  createData('.eslintrc.json', 'File', '9 KB', '01/12/2021'),
];

// imdb top 250 movies
let Videos = [
  createData(
    'The Shawshank Redemption Redemption',
    'file',
    '2.2 GB',
    '01/03/2021',
  ),
  createData('The Godfather', 'file', '2.2 GB', '01/04/2021'),
  createData('The Godfather: Part II', 'file', '2.2 GB', '01/05/2021'),
  createData('The Dark Knight', 'file', '2.2 GB', '01/06/2021'),
];

export default function FileContent() {
  const [hidden, setHidden] = useState(false);

  const [rows, setRows] = useState(rawData);

  const [path, setPath] = useState(['home', 'user']);


  // work in process
  useEffect(() => {
    if (hidden) {
      setRows(rawData);
    } else {
      // without hidden files
      setRows(rawData.filter((row) => !row.name.startsWith('.')));
    }
  }, [hidden]);

  const onFileDelete = (id: string) => {
    rawData = rawData.filter((row) => row.name !== id);
    setRows((prev) => prev.filter((row) => row.name !== id));
  };

  const onFileClick = (id: string) => {
    // change the rows
    if (id === 'Videos') {
      setRows(Videos);
    } else {
      setRows(rawData);
    }
    // change the path
    setPath((prev) => [...prev, id]);
  };

  return (
    <div>
      {/* <NavigationBar hidden={hidden} setHidden={setHidden} path={path} /> */}
      {/* <NavigationBar hidden={hidden} setHidden={setHidden}/> */}
      <NavigationBar />
      <br />
      <Paper elevation={0} style={{ minHeight: '100px' }}>
        <FileList
          files={rows}
          onFileDelete={onFileDelete}
          onFileClick={onFileClick}
        />
      </Paper>
    </div>
  );
}

