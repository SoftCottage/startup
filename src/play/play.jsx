import React from 'react';
import Button from 'react-bootstrap/Button';
import './play.css';

export function Play({ userName }) {
  const [playing, setPlaying] = React.useState(false);
  const [score, setScore] = React.useState(0);

  function startGame() {
    setScore(0);
    setPlaying(true);

    setTimeout(() => {
      setPlaying(false);
      submitScore(score);
    }, 1000);
  }

  function handleClick() {
    if (playing) {
      setScore((prev) => prev + 1);
    }
  }

  async function submitScore(finalScore) {
    try {
      await fetch('/api/score', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userName,
          score: finalScore,
          time: Date.now(),
        }),
      });
    } catch {
      // Offline or server unavailable
    }
  }

  return (
    <main className="bg-secondary text-center pt-5">
      <div className="game">
        <h2>OneSecond</h2>

        <div className="score">
          Clicks: <strong>{score}</strong>
        </div>

        {!playing ? (
          <Button variant="primary" onClick={startGame}>
            Start
          </Button>
        ) : (
          <Button variant="danger" onClick={handleClick}>
            CLICK!
          </Button>
        )}

        <small className="d-block mt-3">
          Click as many times as you can in one second
        </small>
      </div>
    </main>
  );
}
