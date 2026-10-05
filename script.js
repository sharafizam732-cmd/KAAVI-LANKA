/* =========================================
   KAAVI LANKA — MAIN JAVASCRIPT
========================================= */

/* ---------- CONFIG: replace these when you have the real details ---------- */
const whatsappNumber = "94766176980";            // digits only, country code first (placeholder)
const brandEmail = "ushasubri15@gmail.com";       // placeholder
const socialLinks = {
    instagram: "https://www.instagram.com/kaavilanka/",     // replace with the real Kaavi Lanka profile
    facebook: "https://www.facebook.com/KaaviLanka?sfnsn=mo&mibextid=RUbZ1f"        // replace with the real Kaavi Lanka page
};
const IMG = "assets/images/";                    // swap the files in this folder for real photos


/* ---------- PRODUCT DATA ----------
   Edit names, prices and descriptions here. price: null shows "Enquire for price".
   image = main photo in assets/images/, gallery = extra photos shown in the details window. */
const products = [
    { id: 1, name: "Kaavi Classic Tote", category: "Tote Bags", isNew: true, price: "Rs. 1,600", image: "tote-lighthouse.jpg", gallery: ["totes-eye-lighthouse-pair.jpg"],
      keywords: "lighthouse blue sea coastal fringe knotted tote",
      description: "A natural linen tote with a blue lighthouse design and knotted fringe.",
      details: "A natural linen tote with long handles, a blue lighthouse artwork and a knotted fringe along the hem.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 2, name: "Heritage Linen Bag", category: "Handbags", isNew: false, price: null, image: "pouch-peacock.jpg",
      keywords: "peacock pouch zip clutch beads heritage",
      description: "A natural linen zip pouch with a peacock design and pearl-style beads.",
      details: "A zip pouch in natural linen with a bold peacock artwork, finished with small pearl-style beads on the feathers.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 3, name: "Artisan Shoulder Bag", category: "Shoulder Bags", isNew: true, price: "Rs. 1,600", image: "shoulder-butterfly-mandala.jpg",
      keywords: "butterfly mandala orange crescent fringe shoulder",
      description: "A crescent shoulder bag with a butterfly and mandala design.",
      details: "A crescent-shaped shoulder bag with a long strap, a butterfly and mandala artwork in orange and black, and a knotted fringe edge.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 4, name: "Everyday Linen Tote", category: "Tote Bags", isNew: false, price: "Rs. 1,600", image: "tote-eye-flower.jpg", gallery: ["totes-eye-lighthouse-pair.jpg"],
      keywords: "eye flower blue leaves fringe art tote",
      description: "A natural linen tote with an eye and blue flower illustration.",
      details: "A natural linen tote with long handles, an eye, leaves and blue flower illustration, and a knotted fringe hem.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 5, name: "Culture Collection Bag", category: "Shoulder Bags", isNew: true, price: null, image: "shoulder-sri-lanka-turtle.jpg",
      keywords: "sri lanka turtle sea beach pocket button culture",
      description: "A shoulder bag with a front pocket and a Sri Lanka sea turtle design.",
      details: "A roomy shoulder bag in natural fabric with a front pocket, a button closure and a sea turtle artwork with the words Sri Lanka.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 6, name: "Natural Canvas Bag", category: "Tote Bags", isNew: false, price: null, image: "tote-mountain-sunrise.jpg",
      keywords: "mountain sunrise embroidery pocket button canvas natural",
      description: "A natural tote with a front pocket and an embroidered sunrise over mountains.",
      details: "A natural tote with a button closure, a front pocket and a circular embroidered design of a sunrise over mountains.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 7, name: "Kaavi Mini Bag", category: "Shoulder Bags", isNew: true, price: "Rs. 1,600", image: "shoulder-hibiscus.jpg",
      keywords: "hibiscus flower red mini small crossbody fringe shoulder",
      description: "A small crescent shoulder bag with a red hibiscus design.",
      details: "A small crescent shoulder bag with a long strap, a red hibiscus artwork and a knotted fringe edge.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 8, name: "Signature Linen Bag", category: "Shoulder Bags", isNew: false, price: null, image: "shoulder-never-hide-your-wings.jpg", fit: "contain",
      keywords: "butterfly woman wings quote pocket signature art shoulder",
      description: "A shoulder bag with a line-art butterfly design and the words Never Hide Your Wings.",
      details: "A natural shoulder bag with a front pocket, a button closure and a line-art illustration with the words Never Hide Your Wings.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 9, name: "Sunflower Zip Pouch", category: "Handbags", isNew: false, price: null, image: "pouch-sunflower.jpg",
      keywords: "sunflower pouch zip flowers blue red leaves clutch",
      description: "A natural linen zip pouch with blue and red sunflowers.",
      details: "A natural linen zip pouch with a white zip and a sunflower artwork in blue and red with green leaves.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 10, name: "Botanical Fringe Tote", category: "Tote Bags", isNew: false, price: null, image: "tote-botanical-face.jpg",
      keywords: "botanical face leaves line art black fringe tote",
      description: "A natural tote with a botanical line drawing and knotted fringe.",
      details: "A natural tote with long handles, a black line drawing of a face with leaves and branches, and a knotted fringe hem.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 11, name: "Cowboy Hat Fringe Tote", category: "Tote Bags", isNew: false, price: null, image: "tote-cowboy-hat.jpg", fit: "contain",
      keywords: "cowboy hat flower yellow red fringe tote western",
      description: "A natural tote with a cowboy hat and flower design.",
      details: "A natural tote with long handles, a cowboy hat and flower artwork with yellow and red accents, and a knotted fringe hem.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] },
    { id: 12, name: "Meadow Butterfly Tote", category: "Tote Bags", isNew: true, price: null, image: "tote-meadow-butterfly.jpg",
      keywords: "meadow butterfly grass green lavender fringe tote",
      description: "A natural tote with a meadow and butterfly illustration.",
      details: "A natural tote with crossed handles, a meadow grass and butterfly illustration, and a knotted macramé-style fringe hem.",
      size: "Please enquire", colours: [["Natural", "#E8DCC4"]] }
];

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = text => `https://wa.me/${whatsappNumber}${text ? "?text=" + encodeURIComponent(text) : ""}`;


/* ---------- PRODUCT CARD ---------- */
function productCard(p, i) {
    return `
        <article class="product-card" style="--i:${i}">
            <div class="product-image${p.fit === "contain" ? " fit-contain" : ""}" style="--img:url('${IMG}${p.image}')">
                <img src="${IMG}${p.image}" alt="${esc(p.name)}" loading="lazy">
                ${p.isNew ? '<span class="badge-new">New</span>' : ""}
            </div>
            <div class="product-body">
                <span class="product-cat">${esc(p.category)}</span>
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.description)}</p>
                <div class="product-foot">
                    <span class="product-price${p.price ? "" : " ask"}">${esc(p.price || "Enquire for price")}</span>
                    <button class="details-btn" type="button" data-id="${p.id}">View Details</button>
                </div>
            </div>
        </article>`;
}


/* ---------- FEATURED (home page) ---------- */
const featuredGrid = document.getElementById("featuredGrid");
if (featuredGrid) {
    featuredGrid.innerHTML = products.slice(0, 4).map((p, i) => productCard(p, i)).join("");
    // On the home page "View Details" opens the product on the products page
    featuredGrid.addEventListener("click", e => {
        const btn = e.target.closest(".details-btn");
        if (btn) window.location.href = `products.html?view=${btn.dataset.id}`;
    });
}


/* ---------- PRODUCTS PAGE: render, search, filter ---------- */
const productsGrid = document.getElementById("productsGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("productSearchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
let currentCategory = "All";
let currentSearch = "";

function renderProducts() {
    if (!productsGrid) return;
    const term = currentSearch.trim().toLowerCase();

    const items = products.filter(p => {
        const inCategory = currentCategory === "All" ||
            (currentCategory === "New Arrivals" ? p.isNew : p.category === currentCategory);
        if (!inCategory) return false;
        if (!term) return true;
        return [p.name, p.category, p.keywords, p.description].join(" ").toLowerCase().includes(term);
    });

    if (!items.length) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No products found.</p>
                <button class="btn btn-primary" type="button" id="viewAllBtn">View All Products</button>
            </div>`;
        document.getElementById("viewAllBtn").addEventListener("click", resetFilters);
        return;
    }
    productsGrid.innerHTML = items.map((p, i) => productCard(p, i)).join("");
}

function resetFilters() {
    currentCategory = "All";
    currentSearch = "";
    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.hidden = true;
    categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === "All"));
    renderProducts();
}

if (productsGrid) {
    renderProducts();
    productsGrid.addEventListener("click", e => {
        const btn = e.target.closest(".details-btn");
        if (btn) openDetails(Number(btn.dataset.id));
    });
}

categoryButtons.forEach(btn => btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderProducts();
}));

if (searchInput) {
    searchInput.addEventListener("input", () => {
        currentSearch = searchInput.value;
        if (searchClearBtn) searchClearBtn.hidden = !currentSearch.length;
        renderProducts();
    });
}
if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
        currentSearch = "";
        searchInput.value = "";
        searchInput.focus();
        searchClearBtn.hidden = true;
        renderProducts();
    });
}


/* ---------- PRODUCT DETAILS MODAL ---------- */
const detailsModal = document.getElementById("detailsModal");
let lastFocus = null;

function openDetails(id) {
    const p = products.find(x => x.id === id);
    if (!detailsModal || !p) return;
    lastFocus = document.activeElement;

    const pics = [p.image, ...(p.gallery || [])];
    document.getElementById("detailsModalImage").innerHTML =
        `<div class="modal-main" style="--img:url('${IMG}${pics[0]}')"><img src="${IMG}${pics[0]}" alt="${esc(p.name)}"></div>` +
        (pics.length > 1 ? `<div class="thumbs">${pics.map((src, i) =>
            `<button type="button" class="thumb${i ? "" : " active"}" data-src="${src}" aria-label="Show photo ${i + 1}"><img src="${IMG}${src}" alt=""></button>`).join("")}</div>` : "");
    document.getElementById("detailsModalCategory").textContent = p.category;
    document.getElementById("detailsModalTitle").textContent = p.name;
    document.getElementById("detailsModalDescription").textContent = p.details;
    document.getElementById("detailsModalSize").textContent = p.size;
    document.getElementById("detailsModalPrice").textContent = p.price || "Enquire for price";
    document.getElementById("detailsModalColours").innerHTML = p.colours
        .map(c => `<span class="swatch" style="background:${c[1]}" title="${esc(c[0])}"></span>`).join("") +
        `<span>${p.colours.map(c => esc(c[0])).join(", ")}</span>`;

    const wa = document.getElementById("detailsModalWhatsapp");
    wa.href = waLink(`Hi Kaavi Lanka, I would like to enquire about the ${p.name}${p.price ? " (" + p.price + ")" : ""}.`);

    detailsModal.classList.add("show");
    document.body.classList.add("modal-open");
    document.getElementById("detailsModalClose").focus();
}

function closeDetails() {
    if (!detailsModal || !detailsModal.classList.contains("show")) return;
    detailsModal.classList.remove("show");
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
}

if (detailsModal) {
    document.getElementById("detailsModalImage").addEventListener("click", e => {
        const t = e.target.closest(".thumb");
        if (!t) return;
        const main = detailsModal.querySelector(".modal-main");
        main.style.setProperty("--img", `url('${IMG}${t.dataset.src}')`);
        main.querySelector("img").src = IMG + t.dataset.src;
        detailsModal.querySelectorAll(".thumb").forEach(b => b.classList.toggle("active", b === t));
    });
    document.getElementById("detailsModalClose").addEventListener("click", closeDetails);
    detailsModal.addEventListener("click", e => {
        if (e.target.classList.contains("modal-backdrop")) closeDetails();
    });
    // Open a product directly from a link such as products.html?view=3
    const viewId = Number(new URLSearchParams(window.location.search).get("view"));
    if (viewId) openDetails(viewId);
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetails(); });


/* ---------- WHATSAPP / EMAIL / SOCIAL LINKS (all pages) ---------- */
document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = waLink(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener";
});
document.querySelectorAll("[data-social]").forEach(el => {
    el.href = socialLinks[el.dataset.social] || "#";
    el.target = "_blank";
    el.rel = "noopener";
});
document.querySelectorAll("[data-email]").forEach(el => {
    el.href = `mailto:${brandEmail}`;
    if (el.dataset.email === "text") el.textContent = brandEmail;
});
document.querySelectorAll("[data-phone]").forEach(el => {
    el.textContent = "+" + whatsappNumber.replace(/^(\d{2})(\d{2})(\d{3})(\d{4})$/, "$1 $2 $3 $4");
});


/* ---------- MOBILE NAVIGATION ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
    navLinks.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", open);
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-xmark", open);
    icon.classList.toggle("fa-bars", !open);
}
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("active")));
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("click", e => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) setMenu(false);
    });
}


/* ---------- STICKY NAVBAR + BACK TO TOP ---------- */
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");
function onScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
} else {
    revealEls.forEach(el => el.classList.add("visible"));
}


/* ---------- CONTACT FORM ---------- */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    const enquiry = new URLSearchParams(window.location.search).get("enquiry");
    if (enquiry) document.getElementById("message").value = `I would like to enquire about ${enquiry}.`;

    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        formMessage.classList.remove("error");

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in your name, email and message.";
            formMessage.classList.add("error");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.classList.add("error");
            return;
        }
        if (phone && !/^[0-9+\-\s()]{7,}$/.test(phone)) {
            formMessage.textContent = "Please enter a valid phone number.";
            formMessage.classList.add("error");
            return;
        }

        const keyField = contactForm.querySelector("[name='access_key']");
        const accessKey = keyField ? keyField.value.trim() : "";
        const btn = contactForm.querySelector(".form-submit");

        // With a Web3Forms key the message is emailed; without one it opens WhatsApp.
        if (accessKey) {
            btn.classList.add("is-loading");
            fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(contactForm) })
                .then(r => r.json())
                .then(res => {
                    btn.classList.remove("is-loading");
                    if (res.success) {
                        formMessage.textContent = "Thank you. Your message has been sent.";
                        contactForm.reset();
                        keyField.value = accessKey;
                    } else throw new Error();
                })
                .catch(() => {
                    btn.classList.remove("is-loading");
                    formMessage.textContent = "The message could not be sent. Please try WhatsApp instead.";
                    formMessage.classList.add("error");
                });
            return;
        }

        const text = `Hello Kaavi Lanka,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`;
        window.open(waLink(text), "_blank", "noopener");
        formMessage.textContent = "Your message is open in WhatsApp. Press send there to reach us.";
    });
}


/* ---------- PRELOADER ---------- */
const preloader = document.getElementById("preloader");
if (preloader) {
    const shownAt = Date.now();
    const hide = () => {
        setTimeout(() => {
            preloader.classList.add("hide");
            document.body.classList.remove("is-loading");
            setTimeout(() => preloader.remove(), 700);
        }, Math.max(450 - (Date.now() - shownAt), 0));
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);
}
