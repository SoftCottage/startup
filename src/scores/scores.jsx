import React from 'react';
import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      })
      .catch(() => {
        // Offline or service unavailable
      });
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.user}</td>
          <td>{score.score}</td>
          <td>{new Date(score.time).toLocaleDateString()}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key="0">
        <td colSpan="4">Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid bg-secondary text-center pt-5">
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Clicks</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores">{scoreRows}</tbody>
      </table>
    </main>
  );
}
