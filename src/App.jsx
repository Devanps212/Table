import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import './App.css';

const generateRandomData = (numRows) => {
  return Array.from({ length: numRows }, (_, index) => ({
    id: index,
    name: `Name ${index}`,
    value: Math.random().toFixed(2),
  }));
};

const rowHeight = 35;
const numRows = 10000;

const data = generateRandomData(numRows);

const Row = ({ index, style }) => {
  const rowData = data[index] || {};

  return (
    <div style={style} className="row">
      <span className="name">{rowData.name}</span>
      <span className="value">{rowData.value}</span>
    </div>
  );
};

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const VirtualizedTable = () => (
  <div className="table-container">
    <List
      height={window.innerHeight * 0.6}
      itemCount={numRows}
      itemSize={rowHeight}
      width={window.innerWidth * 0.9}
    >
      {Row}
    </List>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <h1>Virtualized Table</h1>
      <VirtualizedTable />
    </div>
  );
};

export default App;
