import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="Лектор" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          <button className="btn-link" onClick={() => setCurrentPage('lecturers')}>
            НАЙТИ ЛЕКТОРА
          </button>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">О нас</h2>
        <p className="about-text">
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора,
          бронирования и организации лекций, помогая находить экспертов, которые не просто
          делятся знаниями, но и вдохновляют аудиторию.
        </p>
        {/* текст */}
        <p className="about-text">
          Мы верим, что качественное образование и обмен опытом — это ключ к развитию 
          как отдельных специалистов, так и целых организаций. На нашей платформе вы найдете 
          экспертов из самых разных сфер: от IT и маркетинга до психологии и искусства. 
          Каждый лектор проходит тщательную проверку, чтобы гарантировать высокий уровень 
          материалов и интересную подачу.
        </p>
        <p className="about-text">
          Присоединяйтесь к нашему сообществу, чтобы сделать процесс обучения максимально 
          удобным, эффективным и вдохновляющим!
        </p>
      </section>
    </div>
  );
};

export default Home;