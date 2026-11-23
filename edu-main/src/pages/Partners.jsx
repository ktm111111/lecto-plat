import React from 'react';

const Partners = () => {
  return (
    <div>
      <h1 className="page-title">Партнеры</h1>
      
      <div className="partners-grid">
        
        {/* Карточка 1: ICL */}
        <div className="partner-card">
          <div className="partner-header">
            <img src="/images/icl.png" alt="ICL" className="partner-logo" />
            <a 
              href="https://icl.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-arrow"
            >
              ↗
            </a>
          </div>
          <p className="partner-description">
            ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая 
            в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, 
            проектов, решений и продуктов. Компания была основана в 1991 году на базе завода 
            ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).
          </p>
        </div>

        {/* Карточка 2: Татнефть */}
        <div className="partner-card">
          <div className="partner-header">
            <img src="/images/tatneft.png" alt="Татнефть" className="partner-logo" />
            <a 
              href="https://tatneft.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-arrow"
            >
              ↗
            </a>
          </div>
          <p className="partner-description">
            «Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, 
            в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, 
            нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и 
            производство оборудования для нефтегазовой отрасли и блок сервисных структур.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Partners;