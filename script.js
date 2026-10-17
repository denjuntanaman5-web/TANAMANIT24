
/* =====================================================================
   ✏️ EDIT HERE — PRODUCTS
   category: 'basketball' | 'jersey' | 'shoes'
   bestSeller: true = Display this product on the Home page
   image: Optional (e.g., 'images/ball1.jpg'). If no image is provided,
          an emoji will be displayed instead.
   ===================================================================== */

const CATEGORIES = {
  basketball: { label: 'Basketballs', emoji: '🏀' },
  jersey:     { label: 'Jerseys',     emoji: '👕' },
  shoes:      { label: 'Shoes',       emoji: '👟' }
};

const PRODUCTS = [
  // ---- BASKETBALLS ----
  {
    id: 1,
    name: 'Pro Indoor Ball',
    category: 'basketball',
    price: 1899,
    bestSeller: true,
    image: 'basketball.jpg',
    desc: 'Premium composite leather with a soft touch and excellent grip. Designed for indoor courts.'
  },
  {
    id: 2,
    name: 'Street Outdoor Ball',
    category: 'basketball',
    price: 1299,
    bestSeller: false,
    image: 'streetball.jpg',
    desc: 'Durable rubber construction designed to withstand concrete and asphalt courts.'
  },
  {
    id: 3,
    name: 'Training Ball',
    category: 'basketball',
    price: 999,
    bestSeller: false,
    image: 'training.jpg',
    desc: 'Lightweight practice ball, perfect for training drills and beginners.'
  },
  {
    id: 4,
    name: 'Championship Ball',
    category: 'basketball',
    price: 2499,
    bestSeller: true,
    image: 'championship.jpg',
    desc: 'Game-quality basketball with deep channels for superior ball control.'
  },

  // ---- JERSEYS ----
  {
    id: 5,
    name: 'Classic Team Jersey',
    category: 'jersey',
    price: 1199,
    bestSeller: true,
    image: 'jersey.jpg',
    desc: 'Breathable mesh fabric with a classic fit. Available in multiple colors.'
  },
  {
    id: 6,
    name: 'Pro Dri-Fit Jersey',
    category: 'jersey',
    price: 500,
    bestSeller: false,
    image: 'dry-fit.jpg',
    desc: 'Moisture-wicking fabric that helps keep you cool throughout the game.'
  },
  {
    id: 7,
    name: 'Custom Name Jersey',
    category: 'jersey',
    price: 700,
    bestSeller: true,
    image: 'costumjersey.jpg',
    desc: 'Customize your jersey with your own name and number. Perfect for teams and groups of friends.'
  },
  {
    id: 8,
    name: 'Practice Shorts Set',
    category: 'jersey',
    price: 1100,
    bestSeller: false,
    image: 'practiceshortset.jpg',
    desc: 'Matching shorts and top set, ideal for training sessions.'
  },

  // ---- SHOES ----
  {
    id: 9,
    name: 'Court Runner High',
    category: 'shoes',
    price: 3999,
    bestSeller: true,
    image: 'shoes.jpg',
    desc: 'High-top basketball shoes with added ankle support and cushioned soles for explosive jumps.'
  },
  {
    id: 10,
    name: 'Speed Low Elite',
    category: 'shoes',
    price: 3499,
    bestSeller: false,
    image: 'speedlowelite.jpg',
    desc: 'Lightweight, low-cut basketball shoes designed for speed and quick movement.'
  },
  {
    id: 11,
    name: 'Grip Master',
    category: 'shoes',
    price: 800,
    bestSeller: false,
    image: 'gripmaster.jpg',
    desc: 'Features multidirectional traction for sharp cuts, quick turns, and sudden stops.'
  },
  {
    id: 12,
    name: 'Street Ballers',
    category: 'shoes',
    price: 2499,
    bestSeller: false,
    image: 'streetballers.jpg',
    desc: 'Durable outsoles designed for outdoor courts, with all-day comfort.'
  }
];

/* =====================================================================
   ✏️ EDIT HERE — DEVELOPMENT TEAM (About Us)
   ===================================================================== */

const TEAM = [
  {
    name: 'Dennjun Dave A. Tanaman',
    role: 'Project Leader / Developer',
    bio: '',
    photo: 'opaw2.png'
  },
  {
    name: 'Kim Salazar',
    role: 'Assistant Developer',
    bio: '',
    photo: 'kim.jpg'
  }
];

/* =====================================================================
   ✏️ EDIT HERE — STORE LOCATION (About Us)
   ===================================================================== */


const LOCATION = {
  address: 'HoopZone, Balay ni Kenneth, Lingion, Bukidnon, Philippines',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM · Sun: 10:00 AM – 6:00 PM',
  phone: '09538052445',
  email: 'hello@hoopszone.com',
  mapQuery: 'Balay ni Kenneth, Lingion, Bukidnon, Philippines',
  
};


/* ===================== APPLICATION LOGIC ===================== */

// Format prices using the Philippine peso symbol.
const peso = n => '₱' + n.toLocaleString('en-PH');

/* ---- RENDER PRODUCTS (display only; no functional cart yet) ---- */

function productCard(p) {
  const img = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : CATEGORIES[p.category].emoji;

  return `
    <div class="product">
      <div class="img">
        ${img}
        ${p.bestSeller ? '<span class="badge">Best Seller</span>' : ''}
      </div>
      <div class="body">
        <span class="cat-tag">${CATEGORIES[p.category].label}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="row">
          <span class="price">${peso(p.price)}</span>
          <button class="add">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// Display best-selling products on the Home page.
function renderHome() {
  document.getElementById('bestGrid').innerHTML =
    PRODUCTS.filter(p => p.bestSeller).map(productCard).join('');
}

// Display all products on the Shop page.
function renderShop() {
  document.getElementById('shopGrid').innerHTML =
    PRODUCTS.map(productCard).join('');
}

// Display the development team and store information on the About Us page.
function renderAbout() {
  document.getElementById('team').innerHTML = TEAM.map(m => {
    const initials = m.name
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const av = m.photo
      ? `<img src="${m.photo}" alt="${m.name}">`
      : initials;

    return `
      <div class="member">
        <div class="avatar">${av}</div>
        <h3>${m.name}</h3>
        <div class="role">${m.role}</div>
        <div class="bio">${m.bio}</div>
      </div>
    `;
  }).join('');

  // Display store contact information.
  document.getElementById('locAddress').textContent = LOCATION.address;
  document.getElementById('locHours').textContent = LOCATION.hours;
  document.getElementById('locPhone').textContent = LOCATION.phone;
  document.getElementById('locEmail').textContent = LOCATION.email;

  // Embed Google Maps using the configured store location.
  document.getElementById('mapFrame').src =
    'https://www.google.com/maps?q=' +
    encodeURIComponent(LOCATION.mapQuery) +
    '&output=embed';
}

/* ---- NAVIGATION: HOME, SHOP ALL, ABOUT US ---- */

function go(page) {
  ['home', 'shop', 'about'].forEach(p =>
    document.getElementById('page-' + p)
      .classList.toggle('hidden', p !== page)
  );

  document.querySelectorAll('nav button').forEach(b =>
    b.classList.toggle('active', b.dataset.page === page)
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Set up navigation buttons.
document.querySelectorAll('[data-page]').forEach(b =>
  b.addEventListener('click', () => go(b.dataset.page))
);

// Return to the Home page when the brand logo is clicked.
document.querySelector('.brand').addEventListener('click', () => go('home'));

/* ---- WELCOME PAGE: ENTER THE MAIN WEBSITE ---- */

document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('site').classList.remove('hidden');
  go('home');
});

/* ---- INITIALIZE THE WEBSITE ---- */

// Render the Home, Shop, and About Us pages.
renderHome();
renderShop();
renderAbout();
