import React from 'react'

function ServiceSection() {
  return (
    <section id="services" className="services section light-background">
  {/* Section Title */}
  <div className="container section-title">
    <h2>Services</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6" >
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-cash-stack" style={{color: '#0dcaf0'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Nesciunt Mete</h3>
          </a>
          <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-calendar4-week" style={{color: '#fd7e14'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Eosle Commodi</h3>
          </a>
          <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-chat-text" style={{color: '#20c997'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Ledo Markt</h3>
          </a>
          <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-credit-card-2-front" style={{color: '#df1529'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Asperiores Commodit</h3>
          </a>
          <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
          <a href="service-details.html" className="stretched-link" />
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-globe" style={{color: '#6610f2'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Velit Doloremque</h3>
          </a>
          <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
          <a href="service-details.html" className="stretched-link" />
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-clock" style={{color: '#f3268c'}} />
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Dolori Architecto</h3>
          </a>
          <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
          <a href="service-details.html" className="stretched-link" />
        </div>
      </div>{/* End Service Item */}
    </div>
  </div>
</section>

  )
}

export default ServiceSection