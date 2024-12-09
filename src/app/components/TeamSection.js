import React from 'react'

function TeamSection() {
  return (
    <section id="team" className="team section">
  {/* Section Title */}
  <div className="container section-title" >
    <h2>Team</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-3 col-md-6" >
        <div className="member">
          <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-3 col-md-6" >
        <div className="member">
          <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-3 col-md-6" >
        <div className="member">
          <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-3 col-md-6" >
        <div className="member">
          <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
    </div>
  </div>
</section>

  )
}

export default TeamSection