<<<<<<< HEAD
import React, { useState } from 'react';
import { lecturersData } from '../data/mockData';
import BookingModal from './BookingModal';
import './Lecturers.css';

const Lecturers = () => {
  const [booking, setBooking] = useState(null);

  const openBooking = (lecturer, tariff) => setBooking({ lecturer, tariff });
  const closeBooking = () => setBooking(null);

=======
import React from 'react';
import { lecturersData } from '../data/mockData';

const Lecturers = () => {
>>>>>>> 187f6b524bee40fddc28f339e1f3f26974cd2fb6
  return (
    <div className="lecturers-page">
      <h1 className="page-title">Лекторы</h1>
      <div className="lecturers-list">
        {lecturersData.map(lecturer => (
          <div key={lecturer.id} className="lecturer-card-horizontal">
            <div className="lecturer-photo-wrapper">
              {lecturer.photo ? (
                <img src={lecturer.photo} alt={lecturer.name} className="lecturer-photo" />
              ) : (
                <div className="photo-placeholder">
                  <span>место для фото<br/>преподавателя</span>
                </div>
              )}
              <div className="photo-underline"></div>
            </div>

            <div className="lecturer-info">
              <h2 className="lecturer-name">{lecturer.name}</h2>
              <p className="lecturer-details">
                <strong>Образование:</strong> {lecturer.education}<br/>
                <strong>Стаж:</strong> {lecturer.experience}<br/>
                <strong>Учёная степень:</strong> {lecturer.degree}
              </p>

              <div className="subjects-list">
                <h4>Преподаваемые дисциплины:</h4>
                {lecturer.subjects.map((subj, idx) => (
                  <div key={idx} className="subject-item">
                    <p className="subject-title">{subj.title}</p>
                    <ul className="topics-list">
                      {subj.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="custom-block">
                <h4>Тарифы:</h4>
<<<<<<< HEAD
                <ul className="tariffs-list">
                  {lecturer.tariffs.map((tariff, idx) => (
                    <li key={idx} className="tariff-item">
                      <span className="tariff-name">{tariff}</span>
                      <button
                        type="button"
                        className="btn-book-small"
                        onClick={() => openBooking(lecturer, tariff)}
                      >
                        Записаться
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn-book"
                  onClick={() => openBooking(lecturer, lecturer.tariffs[0])}
                >
                  Записаться на занятие
                </button>
=======
                <ul>
                  {lecturer.tariffs.map((tariff, idx) => (
                    <li key={idx}>{tariff}</li>
                  ))}
                </ul>
                <button className="btn-book">Записаться на занятие</button>
>>>>>>> 187f6b524bee40fddc28f339e1f3f26974cd2fb6
              </div>
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      {booking && (
        <BookingModal
          lecturer={booking.lecturer}
          tariff={booking.tariff}
          onClose={closeBooking}
        />
      )}
=======
>>>>>>> 187f6b524bee40fddc28f339e1f3f26974cd2fb6
    </div>
  );
};

export default Lecturers;