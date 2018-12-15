import React, { useState } from 'react';

export default function useBeamer(initialBeam) {
  const [beam, set] = useState(initialBeam);
  const setBeam = e => set(e.target.value);
  return [
    beam,
	<input className="beamer" type="range" value={beam} min="1" max="5" list="tickmarks" onChange={setBeam} />,
  ];
}
