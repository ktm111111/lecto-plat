import React, { useEffect, useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ lecturer, tariff, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [status, setStatus] = useState('idle');

  // Закрытие по Esc + блокировка скролла под модалкой
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = {
      ...form,
      lecturerId: lecturer.id,
      lecturerName: lecturer.name,
      tariff,
    };

    try {
      // Замени на реальный API:
      // await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });
      console.log('Заявка:', payload);
      await new Promise(r => setTimeout(r, 600));
      setStatus('success');
      setTimeout(onClose, 1500);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        {status === 'success' ? (
          <div className="booking-success">
            <div className="booking-success-icon">✓</div>
            <h3>Заявка отправлена!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h2 className="modal-title">Запись на занятие</h2>
            <div className="booking-meta">
              <div><span>Лектор:</span> <strong>{lecturer.name}</strong></div>
              <div><span>Тариф:</span> <strong>{tariff}</strong></div>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <label className="form-field">
                <span>Имя *</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                />
              </label>

              <label className="form-field">
                <span>Телефон *</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>

              <label className="form-field">
                <span>Комментарий</span>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Удобное время, вопросы и т.п."
                />
              </label>

              {status === 'error' && (
                <p className="form-error">Не удалось отправить. Попробуйте позже.</p>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Отправка…' : 'Отправить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;