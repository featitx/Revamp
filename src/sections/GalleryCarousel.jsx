import  "../scss/section/gallerycarousel.scss";
import Gallery from "../components/Gallery"


export default function GalleryCarousel() {
    
    const demoItems = [
      {
        title: "Diwali Snacking Sojourn",
        description: "Because Diwali is about all things bright, beautiful and indulgent!",
        imageSrc: "../public/images/gallery-carousel/gallery-carousel-1.svg",
        link: "/products/diwali-snacking"
      },
      {
        title: "Signature Collection III - Ocean Guardian's Treasure",
        description: "In collaboration with Aravind & Tharagaai, the amazing father-daughter duo",
        imageSrc: "../public/images/gallery-carousel/gallery-carousel-2.svg",
        link: "/products/ocean-guardian"
      },
      {
        title: "The Luxe Wellness Gift Set",
        description: "A Women's Day gift hamper that women at the workplace will TRULY appreciate!",
        imageSrc: "../public/images/gallery-carousel/gallery-carousel-3.svg",
        link: "/products/luxe-wellness"
      },
      {
        title: "Signature Collection II - Project Tiger Hamper",
        description: "A zero-plastic hamper that celebrates the Royal Bengal Tiger, in collaboration with Sanctuary Asia",
        imageSrc: "../public/images/gallery-carousel/gallery-carousel-4.svg",
        link: "/products/project-tiger"
      },
      {
        title: "Daily Delights Gift Hamper",
        description: "This zero-plastic gift hamper is perfect for every occassion!",
        imageSrc: "../public/images/gallery-carousel/gallery-carousel-5.svg",
        link: "/products/daily-delights"
      }
    ];
  
    return (
        <Gallery
          title="Our gift hampers are stunning. See for yourself!"
          items={demoItems}
        />
    );
  }


