/*
  ============================================
  EDIT ONLY THIS SECTION FOR A NEW CLIENT
  ============================================
*/
const BUSINESS = {
  name: "WristWhim | Handmade Bracelets",
  category: "HANDMADE • MADE WITH CARE",

  headline: "Handmade with a little whim.",
  tagline: "one loop at a time 🌸.",
  description:
    "Handmade with a little whim.",
  about:
    "We create small-batch pieces with attention to detail, thoughtful design and a personal touch. Every order is prepared with care.",

  productsIntro:
    "Explore a few favourites from our collection.",

  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  instagram: "https://www.instagram.com/wristwhim.in?cplk=MWxscXNpazdhZ3J1Mg==",
  address: "Delhi, India",

  featured: {
    name: "Signature Collection",
    price: "From ₹499"
  },

  heroImage:
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",

  products: [
    {
      name: "Signature Piece",
      description: "A beautiful handmade piece created with care.",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Everyday Favourite",
      description: "Simple, thoughtful and made to be enjoyed.",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Custom Creation",
      description: "Made specially around your idea and style.",
      price: "Custom",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85"
    }
  ],

  reasons: [
    {
      title: "Made with care",
      text: "Every piece gets attention to the small details that make it feel special."
    },
    {
      title: "Personal touch",
      text: "We keep things personal instead of treating every order like a mass-produced product."
    },
    {
      title: "Made for you",
      text: "From ready pieces to custom requests, your idea comes first."
    }
  ]
};

/* ============================================
   YOU DON'T NEED TO EDIT BELOW THIS LINE
   ============================================ */

document.title = BUSINESS.name + " — " + BUSINESS.tagline;

document.querySelectorAll("[data-business-name]").forEach(el => {
  el.textContent = BUSINESS.name;
});

document.querySelector("[data-category]").textContent = BUSINESS.category;
document.querySelector("[data-headline]").textContent = BUSINESS.headline;
document.querySelector("[data-description]").textContent = BUSINESS.description;
document.querySelector("[data-about]").textContent = BUSINESS.about;
document.querySelector("[data-products-intro]").textContent = BUSINESS.productsIntro;
document.querySelector("[data-featured-name]").textContent = BUSINESS.featured.name;
document.querySelector("[data-featured-price]").textContent = BUSINESS.featured.price;
document.querySelector("[data-hero-image]").src = BUSINESS.heroImage;
document.querySelector("[data-address]").textContent = BUSINESS.address;
document.querySelector("[data-phone]").textContent = BUSINESS.phone;
document.querySelector("[data-footer-tagline]").textContent = BUSINESS.tagline;
document.querySelector("[data-contact-text]").textContent =
  `For orders, custom requests or any questions, send ${BUSINESS.name} a message.`;

const productGrid = document.querySelector("#productGrid");

productGrid.innerHTML = BUSINESS.products.map(product => `
  <article class="product-card reveal">
    <img class="product-image" src="${product.image}" alt="${escapeHTML(product.name)}">
    <div class="product-info">
      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.description)}</p>
      <div class="product-meta">
        <span>${escapeHTML(product.price)}</span>
        <span>Enquire →</span>
      </div>
    </div>
  </article>
`).join("");

const whyGrid = document.querySelector("#whyGrid");

whyGrid.innerHTML = BUSINESS.reasons.map((item, index) => `
  <div class="why-item reveal">
    <div class="num">0${index + 1}</div>
    <h3>${escapeHTML(item.title)}</h3>
    <p>${escapeHTML(item.text)}</p>
  </div>
`).join("");

const whatsappMessage = encodeURIComponent(
  `Hi ${BUSINESS.name}! I found your website and would like to know more.`
);

document.querySelector("#whatsappBtn").href =
  `https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`;

document.querySelector("#instagramBtn").href = BUSINESS.instagram;

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
