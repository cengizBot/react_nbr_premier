import React, { useState } from 'react';
import NumberInput from './NumberInput/NumberInput';
import IsPrime from './IsPrime/IsPrime';
import EventChange from './EventChange/EventChange';
import './Main.css';

function Main() {
  /**
   * Sauvegarde locale du nombre à tester
   */
  const [number, setNumber] = useState(0);

  return (
    <main className="Main">
      <p>Entrez un nombre...</p>
      <NumberInput setNumber={setNumber} />
      <IsPrime number={number} />
      <div>
        <p>Vos dernières recherches</p>
        <EventChange number={number} />
      </div>
    </main>
  );
}

export default Main;
