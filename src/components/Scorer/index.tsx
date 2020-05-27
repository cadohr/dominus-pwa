import React, { useState } from "react";
import Modal from "react-modal";

import { defaultStones, StoneType } from "../../config/stones";

import { Stone } from "./styles";

Modal.setAppElement("#root");

const Scorer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ourPoints, setOurPoints] = useState<number[]>([0]);
  const [theirPoints, setTheirPoints] = useState<number[]>([0]);
  const [pointsTo, setPointsTo] = useState<string>("");
  const [turns, setTurns] = useState<number>(0);
  const [stones, setStones] = useState<Array<StoneType>>(defaultStones);

  function openModal(to: string) {
    setPointsTo(to);
    setIsModalOpen(!isModalOpen);
  }

  function selectStone(stone: StoneType) {
    setStones(
      stones.map((s) =>
        s.name === stone.name ? { ...stone, selected: !stone.selected } : s
      )
    );
  }

  function addPoints() {
    setIsModalOpen(!isModalOpen);

    let points: number = 0;

    stones.forEach((s) => (s.selected ? (points += s.value) : 0));

    if (points > 0) {
      setTurns(turns + 1);
    }

    if (pointsTo === "our") {
      setOurPoints([...ourPoints, points]);
    } else if (pointsTo === "their") {
      setTheirPoints([...theirPoints, points]);
    }

    setStones(stones.map((s) => ({ ...s, selected: false })));
  }

  function newScoreboard() {
    setOurPoints([0]);
    setTheirPoints([0]);
    setTurns(0);
  }

  return (
    <div className="container">
      <button className="row" onClick={() => openModal("our")}>
        <div className="point-list">
          <h1>NOS</h1>
          <ul>
            {ourPoints.map((p, index) => p > 0 && <li key={index}>{p}</li>)}
          </ul>
        </div>
        <span className="total">
          {ourPoints.reduce((acc, value) => acc + value)}
        </span>
      </button>
      <button className="reset-button" onClick={newScoreboard}>
        Rodadas: {turns}
      </button>
      <button className="row" onClick={() => openModal("their")}>
        <div className="point-list">
          <h1>ELES</h1>
          <ul>
            {theirPoints.map((p, index) => p > 0 && <li key={index}>{p}</li>)}
          </ul>
        </div>
        <span className="total">
          {theirPoints.reduce((acc, value) => acc + value)}
        </span>
      </button>
      <Modal isOpen={isModalOpen} className="Modal" overlayClassName="Overlay">
        {stones.map((stone) => (
          <button
            key={stone.name}
            onClick={() => selectStone(stone)}
            style={{ opacity: stone.selected ? 1 : 0.4 }}
            // selected={stone.selected}
          >
            <img src={stone.logo} alt={stone.name} />
          </button>
        ))}
        <button onClick={() => addPoints()}>ADICIONAR</button>
      </Modal>
    </div>
  );
};

export default Scorer;
