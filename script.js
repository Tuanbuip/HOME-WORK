/**
 * Dữ liệu 16 căn hộ đúng theo thiết kế Figma: Localhost Website (Community)
 */
const listingsData = [
    {
        id: 1,
        title: "Brightwoods Cabin",
        subtitle: "Bridlepath, Ontario, Canada",
        rating: "4.9",
        price: 658,
        superhost: true,
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
        description: "Welcome to Brightwoods Cabin, a breathtaking lakeside retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin boasts rustic elegance surrounded by towering maple trees, complete with private hot tub and high-speed Wi-Fi."
    },
    {
        id: 2,
        title: "Urban Loft",
        subtitle: "Georgina Bay, Ontario, Canada",
        rating: "4.5",
        price: 410,
        superhost: false,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        description: "Modern industrial loft featuring floor-to-ceiling windows, exposed brick walls, and panoramic views of Georgina Bay."
    },
    {
        id: 3,
        title: "Forestville Cottages",
        subtitle: "Simcoe, Ontario Canada",
        rating: "5.0",
        price: 325,
        superhost: false,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
        description: "Charming woodland cottage tucked away in Simcoe. Ideal for weekend family getaways and nature trails."
    },
    {
        id: 4,
        title: "Unionville Lodge",
        subtitle: "Markham, Ontario Canada",
        rating: "4.6",
        price: 485,
        superhost: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        description: "Spacious heritage lodge in historic Unionville with a heated outdoor pool and chef's kitchen."
    },
    {
        id: 5,
        title: "Missisuaga Aistream",
        subtitle: "Missisauga, Ontario, Canada",
        rating: "4.8",
        price: 502,
        superhost: true,
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
        description: "Luxury glamping experience in a custom-renovated Airstream surrounded by private pine forest."
    },
    {
        id: 6,
        title: "Niagara Homes",
        subtitle: "Niagara, Ontario, Canada",
        rating: "4.9",
        price: 655,
        superhost: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description: "Contemporary villa minutes away from Niagara wineries and scenic lookouts."
    },
    {
        id: 7,
        title: "Sunny Estate",
        subtitle: "Barcort, Ontario, Canada",
        rating: "5.0",
        price: 320,
        superhost: true,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        description: "Sun-drenched modern estate with private dock, firepit, and wrap-around deck."
    },
    {
        id: 8,
        title: "Lawrence Hills",
        subtitle: "Lawrence, Ontario, Canada",
        rating: "5.0",
        price: 350,
        superhost: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        description: "Architectural home perched on Lawrence Hills offering serene sunset views."
    },
    {
        id: 9,
        title: "Simcoe Lake Lodge",
        subtitle: "Simcoe, Ontario, Canada",
        rating: "4.6",
        price: 395,
        superhost: false,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        description: "Direct waterfront access on Lake Simcoe with kayaks and sauna included."
    },
    {
        id: 10,
        title: "Wasaga Beach Home",
        subtitle: "Georgina Bay, Ontario, Canada",
        rating: "5.0",
        price: 385,
        superhost: true,
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
        description: "Steps away from the longest freshwater beach in the world."
    },
    {
        id: 11,
        title: "Banff Hills",
        subtitle: "Banff, Alberta, Canada",
        rating: "5.0",
        price: 385,
        superhost: true,
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
        description: "Alpine chalet with breathtaking mountain peaks right outside your bedroom window."
    },
    {
        id: 12,
        title: "Creemore Canada",
        subtitle: "Creemore, Ontario, Canada",
        rating: "5.0",
        price: 385,
        superhost: false,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
        description: "Countryside retreat in picturesque Creemore village with lush gardens."
    },
    {
        id: 13,
        title: "Kawartha Lakes",
        subtitle: "Kawartha, Alberta,  Canada",
        rating: "5.0",
        price: 385,
        superhost: false,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        description: "Peaceful lakefront cabin ideal for fishing, kayaking, and stargazing."
    },
    {
        id: 14,
        title: "Revelstoke Cabin",
        subtitle: "Revelstoke, Alberta, Canada",
        rating: "5.0",
        price: 385,
        superhost: true,
        image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
        description: "Timber-frame cabin with wood-burning fireplace and private cedar sauna."
    },
    {
        id: 15,
        title: "Brightwoods Estate",
        subtitle: "Brightwoods Estate",
        rating: "5.0",
        price: 385,
        superhost: false,
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        description: "Luxury multi-acre estate surrounded by private walking trails."
    },
    {
        id: 16,
        title: "Brightwoods Estate",
        subtitle: "Brightwoods Estate",
        rating: "5.0",
        price: 385,
        superhost: false,
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        description: "Designer residence featuring an infinity pool and outdoor entertainment pavilion."
    }
];

const listingsGrid = document.getElementById("listingsGrid");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const showMoreBtn = document.getElementById("showMoreBtn");

let showingAll = true;

/**
 * Render danh sách Card ra giao diện
 */
function renderListings(items) {
    if (!items.length) {
        listingsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px 0; color:#787878;">No stays matched your search criteria.</p>`;
        return;
    }

    listingsGrid.innerHTML = items
        .map(
            (item) => `
      <article class="listing-card" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          ${item.superhost
                    ? `<div class="superhost-badge">
                  <svg width="10" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L8.5 5H3.5L6 1ZM6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9C10 11.2091 8.20914 13 6 13Z" stroke="#00C29F" stroke-width="1.4"/>
                  </svg>
                  <span>Superhost</span>
                </div>`
                    : ""
                }
          <button type="button" class="heart-btn" aria-label="Save to wishlist" data-heart="${item.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171E1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-top">
            <div>
              <h3 class="card-title">${item.title}</h3>
              <p class="card-subtitle">${item.subtitle}</p>
            </div>
            <div class="card-rating">
              <span>${item.rating}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FAC50A" stroke="#FAC50A" stroke-width="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>

          <div class="card-bottom">
            <div class="card-price">
              <strong>$${item.price}</strong><span>/night</span>
            </div>
            <div class="price-chart-link">
              <span class="price-chart-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </span>
              <span>Price chart</span>
            </div>
          </div>
        </div>
      </article>
    `
        )
        .join("");
}

// Khởi tạo 16 cards giống Figma
renderListings(listingsData);

/**
 * Xử lý bấm nút thả tim hoặc mở Modal chi tiết phòng
 */
listingsGrid.addEventListener("click", (e) => {
    const heartBtn = e.target.closest(".heart-btn");
    if (heartBtn) {
        e.stopPropagation();
        heartBtn.classList.toggle("liked");
        return;
    }

    const card = e.target.closest(".listing-card");
    if (card) {
        const id = Number(card.dataset.id);
        const property = listingsData.find((item) => item.id === id);
        if (property) openPropertyModal(property);
    }
});

/**
 * Tìm kiếm theo tên căn hộ hoặc khu vực
 */
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = listingsData.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.subtitle.toLowerCase().includes(keyword)
    );
    renderListings(filtered);
});

/**
 * Nút Show more / Show less
 */
showMoreBtn.addEventListener("click", () => {
    showingAll = !showingAll;
    if (showingAll) {
        renderListings(listingsData);
        showMoreBtn.textContent = "Show less";
    } else {
        renderListings(listingsData.slice(0, 8));
        showMoreBtn.textContent = "Show more";
    }
});

/**
 * Chuyển đổi chế độ xem Grid / List
 */
const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

gridViewBtn.addEventListener("click", () => {
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
    listingsGrid.classList.remove("list-mode");
});

listViewBtn.addEventListener("click", () => {
    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    listingsGrid.classList.add("list-mode");
});

/**
 * Mobile Menu Toggle
 */
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

/**
 * Modal Chi tiết phòng (Property Details)
 */
const propertyModal = document.getElementById("propertyModal");
const propertyModalContent = document.getElementById("propertyModalContent");
const closePropertyModal = document.getElementById("closePropertyModal");

function openPropertyModal(property) {
    propertyModalContent.innerHTML = `
    <img src="${property.image}" alt="${property.title}" class="detail-hero-img" />
    <div class="detail-header">
      <div>
        <h2>${property.title}</h2>
        <p class="card-subtitle">${property.subtitle}</p>
      </div>
      <div class="card-rating" style="font-size:16px;">
        <span>${property.rating} (200 Reviews)</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#FAC50A" stroke="#FAC50A"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
    </div>
    <p class="detail-desc">${property.description}</p>
    <div class="detail-amenities">
      <span class="amenity-pill">🏞️ Lakeside</span>
      <span class="amenity-pill">🍳 Kitchen</span>
      <span class="amenity-pill">📶 Fast Wifi</span>
      <span class="amenity-pill">🚗 Free Parking</span>
      <span class="amenity-pill">🔥 Hot Tub</span>
    </div>
    <div class="detail-book-bar">
      <div class="card-price">
        <strong style="font-size:24px;">$${property.price}</strong><span> / night</span>
      </div>
      <button class="btn-search" onclick="alert('Booking confirmed for ${property.title}!')">Book this home</button>
    </div>
  `;
    propertyModal.classList.add("open");
}

closePropertyModal.addEventListener("click", () => propertyModal.classList.remove("open"));
propertyModal.addEventListener("click", (e) => {
    if (e.target === propertyModal) propertyModal.classList.remove("open");
});

/**
 * Modal Đăng nhập (Sign In)
 */
const authModal = document.getElementById("authModal");
const openAuthBtn = document.getElementById("openAuthBtn");
const avatarAuthBtn = document.getElementById("avatarAuthBtn");
const closeAuthModal = document.getElementById("closeAuthModal");

[openAuthBtn, avatarAuthBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        authModal.classList.add("open");
    });
});

closeAuthModal.addEventListener("click", () => authModal.classList.remove("open"));
authModal.addEventListener("click", (e) => {
    if (e.target === authModal) authModal.classList.remove("open");
});