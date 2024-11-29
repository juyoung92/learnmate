import React from 'react';
import './card-view.css';

function CardView() {
  const teachers = [
    { id: 1, name: 'John Doe', subject: 'Math', rating: 5 },
    { id: 2, name: 'Jane Smith', subject: 'English', rating: 4.5 },
    { id: 3, name: 'Michael Lee', subject: 'Physics', rating: 4.8 },
  ];

  return (
      <div className="premium-teachers">
        <h2>Premium Tutors</h2>
        <div className="teacher-list">
          {teachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <h3>{teacher.name}</h3>
                <p>Subject: {teacher.subject}</p>
                <p>Rating: {teacher.rating}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default CardView;