import React, { useState, useEffect } from "react";
import "../scss/section/contactform.scss";

const ContactPage = () => {
 
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userCompany: "",
    userPhone: "",
    userGift: "Help me find the perfect gift",
    userQty: "",
    userBudget: "",
    userMessage: "",
    reference_URL: "",
    Utm_Campaign: "",
    Utm_D: "",
    Utm_KD: "",
    UTM_Content: "",
    Utm_Loc: "",
    Utm_Gclid: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Clone the logos slide for continuous animation
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);


  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Please enter your name";
      valid = false;
    }

    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Please enter your email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = "Please enter a valid email";
      valid = false;
    }

    if (!formData.userCompany.trim()) {
      newErrors.userCompany = "Please enter your company name";
      valid = false;
    }

    if (!formData.userPhone.trim()) {
      newErrors.userPhone = "Please enter your phone number";
      valid = false;
    }

    if (!formData.userQty) {
      newErrors.userQty = "Please select a quantity";
      valid = false;
    }

    if (!formData.userBudget.trim()) {
      newErrors.userBudget = "Please enter your budget";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setShowSuccessMessage(true);
        setFormSubmitted(true);
      }, 1500);
    }
  };

  const companyLogos = [

  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },

  ];

  return (
    <div className="contact-page-bg">
      <div className="header-wrapper">
        <div className="container">
          {!formSubmitted ? (
            <section className="contact-wrap" id="pre">
              <div className="content">
                <div className="heading-text" id="contact-page">
                  <h1>Looking for gifting services?</h1>
                  <p>
                    Drop us a note and we'll get back to you within 24 hours.
                  </p>
                  <p>
                    We look forward to curating something amazing for your team!
                  </p>
                </div>
                <div className="heading-text d-none" id="flexigift-page">
                  <h1>Looking for a smarter way to gift?</h1>
                  <p>
                    Drop us a note, and we'll set up a personalized demo for
                    you!
                  </p>
                  <p>
                    We'll show you how FlexiGift makes corporate gifting
                    seamless, stress-free, and truly special.
                  </p>
                </div>
                <div className="ticker">
                  <p>Our conscious clientele</p>
                  <div className="logos">
                    <div className="logos-slide">
                      {companyLogos.map((logo, index) => (
                        <img src={logo.src} alt={logo.alt} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-content">
                <div className="form-wrapper">
                  {showSuccessMessage ? (
                    <div className="success-msg" style={{ display: "block" }}>
                      <h2>Your form has been submitted.</h2>
                    </div>
                  ) : (
                    <form id="loopify-contact-form">
                      <h2>Request a call back</h2>
                      <div className="form-group">
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          placeholder=" "
                          value={formData.userName}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="userName">Name</label>
                        {errors.userName && (
                          <span className="info">{errors.userName}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="userEmail"
                          name="userEmail"
                          placeholder=" "
                          value={formData.userEmail}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="userEmail">Email</label>
                        {errors.userEmail && (
                          <span className="info">{errors.userEmail}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="userCompany"
                          name="userCompany"
                          placeholder=" "
                          value={formData.userCompany}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="userCompany">Company name</label>
                        {errors.userCompany && (
                          <span className="info">{errors.userCompany}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="userPhone"
                          name="userPhone"
                          placeholder=" "
                          value={formData.userPhone}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="userPhone">Phone number</label>
                        {errors.userPhone && (
                          <span className="info">{errors.userPhone}</span>
                        )}
                      </div>
                      <div
                        className="form-group select"
                        style={{ display: "none" }}
                      >
                        <select
                          id="userGift"
                          name="userGift"
                          required
                          value={formData.userGift}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Choose a gift hamper
                          </option>
                          <option value="Help me find the perfect gift">
                            Help me find the perfect gift
                          </option>
                          <option value="Food and beverages">
                            Food and beverages
                          </option>
                          <option value="Personal care">Personal care</option>
                          <option value="Stationery">Stationery</option>
                          <option value="Office essentials">
                            Office essentials
                          </option>
                        </select>
                        {errors.userGift && (
                          <span className="info">{errors.userGift}</span>
                        )}
                      </div>
                      <div className="form-group select">
                        <select
                          id="userQty"
                          name="userQty"
                          required
                          value={formData.userQty}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Quantity
                          </option>
                          <option value="0 - 100">0 - 100</option>
                          <option value="100 - 500">100 - 500</option>
                          <option value="500 - 1000">500 - 1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                        {errors.userQty && (
                          <span className="info">{errors.userQty}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          id="userBudget"
                          name="userBudget"
                          placeholder=" "
                          value={formData.userBudget}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="userBudget">Budget</label>
                        {errors.userBudget && (
                          <span className="info">{errors.userBudget}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <textarea
                          id="userMessage"
                          name="userMessage"
                          rows="4"
                          placeholder=" "
                          value={formData.userMessage}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="userMessage">Message</label>
                        {errors.userMessage && (
                          <span className="info">{errors.userMessage}</span>
                        )}
                      </div>
                      <input
                        name="reference_URL"
                        id="reference_URL"
                        type="hidden"
                        value=""
                      />
                      <input
                        name="Utm_Campaign"
                        id="Utm_Campaign"
                        type="hidden"
                        value=""
                      />
                      <input name="Utm_D" id="Utm_D" type="hidden" value="" />
                      <input name="Utm_KD" id="Utm_KD" type="hidden" value="" />
                      <input
                        name="UTM_Content"
                        id="UTM_Content"
                        type="hidden"
                        value=""
                      />
                      <input
                        name="Utm_Loc"
                        id="Utm_Loc"
                        type="hidden"
                        value=""
                      />
                      <input
                        name="Utm_Gclid"
                        id="Utm_Gclid"
                        type="hidden"
                        value=""
                      />

                      <button
                        type="button"
                        onClick={handleSubmit}
                        id="FormSubmitBtn"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Send"}
                      </button>

                      <p className="infotxt">
                        Or just drop us an email{" "}
                        <a href="mailto:hello@loopify.world">
                          <strong>hello@loopify.world</strong>
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </section>
          ) : (
            <section className="contact-wrap flexnone" id="post">
              <div className="content center">
                <h1>Thanks for reaching out!</h1>
                <p>Our team will get back to you within 24 hours.</p>
                <p>We can't wait to curate something amazing for you!</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
