import React, { useState } from 'react';
import styled from 'styled-components';

const Beamer = styled.input`
  color: #25ccf7;
  border: 2px solid #25ccf7;
  font-size: 18px;
  background: none;
  padding: 10px;
  font-family: 'Righteous', cursive;
  border-radius: 2;
  margin: 2px 4px;
  margin-right: 20px;
  align-self: center;
`;

export default function useBeamer(initialBeam) {
  const [beam, set] = useState(initialBeam);
  const setBeam = e => set(e.target.value);
  return [
    beam,
    <Beamer type="range" value={beam} min="1" max="5" onChange={setBeam} />,
  ];
}
