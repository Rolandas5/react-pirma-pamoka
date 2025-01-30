import { Button } from './Button';

export const Heading = () => {
  const name = 'Cia mano komponentas';
  return (
    <div className="main-heading">
      <h1 className="mano-heading">{name}</h1>
      <Button />
      <Button />
    </div>
  );
};
