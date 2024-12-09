import React from "react";

function StatsSection() {
  return (
    <section id="stats" className="stats section light-background">
      <img src="assets/img/stats-bg.jpg" />
      <div className="container position-relative">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">12</span>
              <p>Clients</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">12</span> <p>Projects</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">12</span> <p>Hours Of Support</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">12</span> <p>Workers</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
