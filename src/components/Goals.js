import React, { useState } from 'react';
import '../index.css';

const Goals = () => {
  const [goals, setGoals] = useState([
    { text: 'Complete 30-min practice', completed: false },
    { text: 'Watch 5 technique video', completed: false },
    { text: 'Join 2 community chat', completed: true },
    { text: 'Join 5 challenges', completed: true },
  ]);

  const handleGoalToggle = (index) => {
    const newGoals = [...goals];
    newGoals[index].completed = !newGoals[index].completed;
    setGoals(newGoals);
  };

  const completedCount = goals.filter(g => g.completed).length;
  const progressPercentage = (completedCount / goals.length) * 100;

  return (
    <section className="goals-card">
      <h3 className="font-playfair" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
        Today's goals 🚀
      </h3>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-item" onClick={() => handleGoalToggle(index)}>
            <input type="checkbox" readOnly checked={goal.completed} />
            <span>{goal.text}</span>
          </div>
        ))}
      </div>
      <div className="progress-container">
        <div className="progress-labels">
          <span>Progress</span>
          <span>{completedCount}/{goals.length} completed</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Goals;