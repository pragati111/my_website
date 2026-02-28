import React from "react";

const FeatureCard = ({ number, title, icon, description }) => {
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
      data-aos="fade-zoom-in"
      data-aos-group="features"
    >
      <div className="listar-feature-item">
        <button
          type="button"
          className="listar-feature-link-button"
        >
          <div className="listar-feature-item-inner">
            <div className="listar-feature-right-border"></div>

            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                <div className="listar-feature-icon-inner">
                  <div>
                    <img src={icon} alt={title} className="listar-image-icon" />
                  </div>
                </div>
              </div>

              <div className="listar-feature-content-wrapper">
                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span>
                    <span>{number}</span>
                    {title}
                  </span>
                </div>

                <div className="listar-feature-item-excerpt">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
    </div>
  );
};

export default FeatureCard;