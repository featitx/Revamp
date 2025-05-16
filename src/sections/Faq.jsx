import React from 'react';
import '../scss/section/faq.scss';


const Faq = () => {
  const content = [
    {
      title: "Eco-Friendly Products & Gifting in India",
      paragraphs: [
        "More and more businesses are looking for ways to create a culture of inspiration, engagement, and motivation – and gifting plays a big role in that. But with shifting workforce trends, there's also a shift in how we gift. Businesses now seek responsible, value-driven gifting that aligns with their sustainability goals and leaves a positive impact on our planet. That's where we come in.",
        "At Loopify, we make earth-friendly corporate gifting effortless, helping businesses gift sustainably without compromising on quality, aesthetics, or convenience.",
        "As your gifting concierge, we curate thoughtful, impact-driven products tailored to your needs. Each gift hamper is meticulously designed, centered around a theme. From zero-plastic office essentials to electronics to stylish corporate hampers, our product selection reflects a commitment to better materials, ethical sourcing, and mindful packaging. While we're not 100% plastic-free, we ensure radical transparency – allowing you to choose between zero-plastic and almost-plastic-free hampers, clearly marked on our website.",
        "We don't believe in an all-or-nothing approach. Instead, we believe that every small switch counts. Whether you're just starting your sustainability journey or deep into it, we make it easy for you to make an impact – one thoughtful gift at a time."
      ]
    },
    {
      title: "Why choose eco-friendly gifts from Loopify?",
      paragraphs: [
        "Gifting is more than just an exchange – it's a reflection of your values. At Loopify, we make it easy for businesses to gift responsibly without compromising on quality, aesthetics, or convenience.",
        "Unlike conventional gifts, earth-friendly gifting shows your commitment to a greener future, whether for employees, clients, or business partners. That's not all – gift hampers at Loopify stand out for being unique, thoughtful, functional and designed to last – without compromising on quality or aesthetics.",
        "Plus, we take care of everything – from sourcing to customization to seamless pan-India delivery. As your gifting concierge, we handle the details so you can focus on what matters – creating a lasting impression with gifts that feel good, and do good."
      ]
    },
    {
      title: "Environmentally Friendly Products Online",
      paragraphs: [
        `Not all "eco-friendly" products are truly sustainable – many brands use greenwashing to market products as environmentally friendly when they're not. At Loopify, we believe in radical transparency so you can make informed choices.`,
        "We clearly disclose materials, packaging, and overall impact for every gift hamper. Our hampers are labelled as zero-plastic or almost-plastic-free, ensuring you always know what you're choosing. No false claims, no hidden details – just honest, earth-friendly gifting that aligns with your values."
      ]
    }
  ];

  const faqs = [
    {
      question: `1. What do you mean by "Earth-friendly"?`,
      answers: [
        `"Earth-friendly" means making gifting choices that are better for the planet without demanding perfection. At Loopify, it's about reducing waste, choosing responsible materials, and being transparent about what goes into our products.`,
        "While our gift hamper packaging remains 100% plastic-free, some of our curated products may contain recycled or necessary plastic components – but always in a way that minimizes environmental impact. That's why we clearly mark our hampers as zero-plastic or almost-plastic-free, so you can choose what aligns best with your values.",
        "For us, sustainability isn't an all-or-nothing approach—it's about making small, thoughtful changes that add up to a bigger impact over time."
      ]
    },
    {
      question: "2. Is your packaging plastic-free?",
      answers: [
        "Yes! Our gift hampers are always packed using zero-plastic, sustainable materials like shredded paper, cardboard, glass jars, kappa board – all of which can be reused."
      ]
    },
    {
      question: "3. How do Loopify's gifts help the environment?",
      answers: [
        "Our gifts come packaged in a zero-plastic gift hamper, so they're already better than most conventional gifts. Besides that, we prioritize locally made products to lower carbon footprints."
      ]
    },
    {
      question: "4. Can I customize my corporate gifts?",
      answers: [
        "Absolutely! Whether you need branded corporate gifts, custom hampers, or a unique curated selection, we'll make it happen. Think of us as your personal gifting concierge—whatever you need, we'll find it for you!"
      ]
    },
    {
      question: "5. Do you ship across India?",
      answers: [
        "Yes! We deliver pan-India through our trusted logistics partners. Some products may have location-based shipping restrictions, which you can check before placing an order."
      ]
    }
  ];

  return (
    <section>
      <div className="gf-content">
        <div className="container gf-content-container">
          {content.map((section, index) => (
            <div key={`section-${index}`}>
              <h3><span>{section.title}</span></h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={`paragraph-${index}-${pIndex}`}>{paragraph}</p>
              ))}
            </div>
          ))}

          <h2><span>Frequently Asked Questions</span></h2>
          
          {faqs.map((faq, index) => (
            <div key={`faq-${index}`}>
              <h3><span>{faq.question}</span></h3>
              {faq.answers.map((answer, aIndex) => (
                <p key={`answer-${index}-${aIndex}`}>{answer}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;