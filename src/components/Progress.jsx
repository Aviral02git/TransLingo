import React from 'react';
import './Progress.css'; // Make sure this CSS file exists

const Progress = () => {
  // Dummy data (replace with real user data from Firebase later)
  const userProgress = {
    wordsLearned: 75,
    quizzesCompleted: 5,
    streakDays: 4,
  };

  return (
    <div className="progress-container">
      <h3 className="progress-title"> Your Progress</h3>
      <div className="progress-grid">
        <div className="progress-card">
          <p className="progress-number blue">{userProgress.wordsLearned}</p>
          <p className="progress-label">Words Learned</p>
        </div>
        <div className="progress-card">
          <p className="progress-number green">{userProgress.quizzesCompleted}</p>
          <p className="progress-label">Quizzes Completed</p>
        </div>
        <div className="progress-card">
          <p className="progress-number red">{userProgress.streakDays} </p>
          <p className="progress-label">Day Streak</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
