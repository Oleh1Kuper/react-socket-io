import io from 'socket.io-client';

const options = {
  auth: {
    token: 'reactClientToken',
  },
};

// const socket = io.connect('https://rose-spiritual-poultry.glitch.me', options);
const socket = io.connect('https://scintillating-relic-patient.glitch.me', options);

export default socket;
