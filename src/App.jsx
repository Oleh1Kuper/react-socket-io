import { useEffect, useState } from 'react';
import socket from './utils/socketConnection';
import Widget from './components/Widget/Widget';

function App() {
  const [perfomanceData, setPerfomanceData] = useState({});

  useEffect(() => {
    socket.on('perfData', (data) => {
      setPerfomanceData((prevData) => {
        return { ...prevData, [data.macA]: data };
      });
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit('requestPerfData');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const widgets = Object.values(perfomanceData);

  return (
    <div className="container">
      {widgets.map((data) => (
        <Widget key={data.macA} data={data} />
      ))}
    </div>
  );
}

export default App;
