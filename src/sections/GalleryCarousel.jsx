import  "../scss/section/gallerycarousel.scss";
import Gallery from "../components/Gallery"


export default function GalleryCarousel() {
    
    const demoItems = [
      {
        title: "Diwali Snacking Sojourn",
        description: "Because Diwali is about all things bright, beautiful and indulgent!",
        imageSrc: "https://loopify.world/cdn/shop/files/diwali_snacking_sojourn_85f277a9-d002-4004-8ae2-f73697f69353.webp?v=1744021695&width=990",
        link: "/products/diwali-snacking"
      },
      {
        title: "Signature Collection III - Ocean Guardian's Treasure",
        description: "In collaboration with Aravind & Tharagaai, the amazing father-daughter duo",
        imageSrc: "https://loopify.world/cdn/shop/files/24-0211-wd-i-01_1_5a7ba725-9550-4b14-90e3-a4c628bc4de3.webp?v=1744021697&width=990",
        link: "/products/ocean-guardian"
      },
      {
        title: "The Luxe Wellness Gift Set",
        description: "A Women's Day gift hamper that women at the workplace will TRULY appreciate!",
        imageSrc: "https://loopify.world/cdn/shop/files/24-0168-sc-i-01_1_0367b401-a9c5-4329-840b-8848b343719f.webp?v=1744021694&width=990",
        link: "/products/luxe-wellness"
      },
      {
        title: "Signature Collection II - Project Tiger Hamper",
        description: "A zero-plastic hamper that celebrates the Royal Bengal Tiger, in collaboration with Sanctuary Asia",
        imageSrc: "https://loopify.world/cdn/shop/files/23-0090-ny-i-01_a1_1_0920ba15-2232-42c1-9ded-7c29e52aef4a.webp?v=1744021688&width=990",
        link: "/products/project-tiger"
      },
      {
        title: "Daily Delights Gift Hamper",
        description: "This zero-plastic gift hamper is perfect for every occassion!",
        imageSrc: "https://loopify.world/cdn/shop/files/24-0187-ny-i-01_01_1_2fbb1a6f-9afb-45b8-92f6-92826922b234.webp?v=1744021695&width=990",
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


