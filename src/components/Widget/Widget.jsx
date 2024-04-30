import { useEffect, useState } from 'react';
import Memory from '../Memory/Memory';
import Info from '../Info/Info';
import Cpu from '../Cpu/Cpu';
import socket from '../../utils/socketConnection';
import './Widget.css';

const Widget = ({ data }) => {
  const [isAlive, setIsAlive] = useState(true);
  const {
    freeMem,
    totalMem,
    usedMem,
    memUsage,
    osType,
    upTime,
    cpuType,
    numCors,
    cpuSpeed,
    cpuLoad,
    macA,
  } = data;

  const cpuData = { cpuLoad };
  const memData = { freeMem, totalMem, usedMem, memUsage };
  const infoData = { osType, upTime, macA, cpuSpeed, cpuType, numCors };

  useEffect(() => {
    socket.on('isConnected', ({ isAlive, machineMacAddress }) => {
      if (machineMacAddress === macA) {
        setIsAlive(isAlive);
      }
    });
  }, []);

  return (
    <div className="widget row justify-content-evenly">
      {!isAlive && <div className="not-active">Offline</div>}
      <Cpu data={cpuData} />
      <Memory data={memData} />
      <Info data={infoData} />
    </div>
  );
}

export default Widget;
