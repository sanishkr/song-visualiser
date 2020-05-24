const templates = {
  default: {
    height: 200,
    width: 500,
    capColor: 'red',
    capHeight: 2,
    meterWidth: 1,
    meterCount: 512,
    meterColor: [
      { stop: 0, color: '#f00' },
      { stop: 0.5, color: '#0CD7FD' },
      { stop: 1, color: 'red' },
    ],
    gap: 4,
  },
  neon: {
    height: 100,
    width: 500,
    capColor: 'aqua',
    capHeight: 2,
    meterWidth: 1,
    meterCount: 512,
    meterColor: [
      { stop: 0, color: '#00f9ff' },
      { stop: 0.3, color: '#8ffcff' },
      { stop: 1, color: '#000000' },
    ],
    gap: 1,
  },
  wave: {
    height: 20,
    width: 500,
    capColor: '#fff',
    capHeight: 2,
    meterWidth: 1,
    meterCount: 912,
    meterColor: [
      { stop: 0, color: 'transparent' },
      { stop: 0.1, color: 'transparent' },
      { stop: 1, color: 'transparent' },
    ],
    gap: 0.2,
  },
  orange: {
    height: 200,
    width: 500,
    capColor: 'red',
    capHeight: 2,
    meterWidth: 10,
    meterCount: 512,
    meterColor: [
      { stop: 0, color: 'orange' },
      { stop: 0.5, color: 'red' },
      { stop: 1, color: '#fff' },
    ],
    gap: 4,
  },
  pink: {
    height: 200,
    width: 500,
    capColor: 'red',
    capHeight: 2,
    meterWidth: 2,
    meterCount: 512,
    meterColor: [
      { stop: 0, color: 'pink' },
      { stop: 1, color: 'red' },
    ],
    gap: 4,
  },
  green: {
    height: 150,
    width: 500,
    capColor: '#92BF3F',
    capHeight: 10,
    meterWidth: 10,
    meterCount: 40,
    meterColor: '#41BF3F',
    gap: 10,
  },
  white: {
    height: 200,
    width: 500,
    capColor: 'azure',
    capHeight: 2,
    meterWidth: 2,
    meterCount: 912,
    meterColor: [
      { stop: 0, color: 'black' },
      { stop: 1, color: 'white' },
    ],
    gap: 1,
  },
};

export { templates };
