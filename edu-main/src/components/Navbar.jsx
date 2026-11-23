import React from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'lecturers', label: 'Лекторы' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Логотип */}
        <div className="nav-logo" onClick={() => setCurrentPage('home')}>
          Lecto
        </div>

        {/* Кнопки меню */}
        <div className="navButtons">
          {links.map(link => (
            <button
              key={link.id}
              className={`nav-btn ${currentPage === link.id ? 'nav-btn-active' : ''}`}
              onClick={() => setCurrentPage(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;