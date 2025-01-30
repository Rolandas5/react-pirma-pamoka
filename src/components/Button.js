import { useState } from 'react';

export const Button = () => {
  // name - kintamojo pavadinimas
  // setName - funkcija, kuri keis kintamojo reiksme, set - visada naudojamas funkcijos pavadinime
  // useState() React Hook, skirtas kurti dinaminius kintamuosius
  // ('') - kintamojo default reiksme
  const [name, setName] = useState('Jurgita');
  const [count, setCount] = useState(1000);

  return (
    <>
      <h1>
        {count} {name}
      </h1>
      <button onClick={() => setName('Tomas')}>Tomas</button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
};
