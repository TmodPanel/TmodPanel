import View from './views/view';

const TSM = `

_______  _______  __   __ 
|       ||       ||  |_|  |
|_     _||  _____||       |
  |   |  | |_____ |       |
  |   |  |_____  ||       |
  |   |   _____| || ||_|| |
  |___|  |_______||_|   |_|
                           

`;

function App() {
  console.log(TSM);

  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
