import React from 'react';
import '../scss/section/warehouse.scss' 

export default function Warehouse() {
  return (
    <section className="warehouse">
      {/* Mobile Text Block */}
      <div className="text-warehouse">
        <div className="container">
          <div className="image-text-wrapper-sm">
            <h2>You’re in good hands (and so are your gifts)</h2>
            <p>
              Our stringent Zero-Defect Quality Check Framework safeguards the innate beauty of materials while eliminating
              all defective products, guaranteeing they are perfect for gifting.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image Block */}
      <div className="image-banner">
        <div className="container">
          <div className="image-text-wrapper-lg">
            <h2 className="warehouse-heading">You’re in good hands (and so are your gifts)</h2>
            <p className="warehouse-para">
              Our stringent Zero-Defect Quality Check Framework safeguards the innate beauty of materials while eliminating
              all defective products, guaranteeing they are perfect for gifting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}