const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

/***************NAVBar******************************************************** */

//Get the HTML element and assign it a name.
const navLink = document.querySelectorAll("header nav a");
// querySelectorAll returns a nodeList with an index.
// I use each index to assign it to their desired values

navLink[0].textContent = siteContent.nav["nav-item-1"];
navLink[1].textContent = siteContent.nav["nav-item-2"];
navLink[2].textContent = siteContent.nav["nav-item-3"];
navLink[3].textContent = siteContent.nav["nav-item-4"];
navLink[4].textContent = siteContent.nav["nav-item-5"];
navLink[5].textContent = siteContent.nav["nav-item-6"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Use for each method to set links to 18px and coler to green.

navLink.forEach(link => {
  link.style.color = "#44a91c";
  link.style.fontSize = "18px";
});

//Use prepend to attach "Home" tag to the begining of the navbar.

let newNavLink = document.querySelector("nav");
let newAnchTag = document.createElement("a");
newAnchTag.textContent = "Home";
newNavLink.prepend(newAnchTag);
newAnchTag.style.color = "#44a91c";
newAnchTag.style.fontSize = "18px";

//Use append to attach "Our Story" to the end of the navbar.

let lNavLink = document.querySelector("nav");
let lAnchTag = document.createElement("a");
lAnchTag.textContent = "Our Story";
lNavLink.appendChild(lAnchTag);
lAnchTag.style.color = "#44a91c";
lAnchTag.style.fontSize = "18px";

/*****************CTA****************************** */

let headerText = document.querySelector('.cta h1').innerHTML = 'Dom<br>Is<br>Awesome';

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"])
ctaImg.style.width = "350px";
ctaImg.style.height = "250px";
ctaImg.style.marginLeft = "5%";
ctaImg.style.marginRight = "3%";

/********************MainContent************************/

const h4 = document.querySelectorAll(".text-content h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

// stretch challenge aim to style h4
h4.forEach(currentVal => {
  currentVal.style.color = "#1e90ff";
  currentVal.style.fontSize = "20px";
  currentVal.style.marginLeft = "15px";
});


const para = document.querySelectorAll(".text-content p");
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


/**************************Contact********************************************* */
const contact = document.querySelector(".contact")
contact.style.display = "flex";
contact.style.flexDirection = "column";

// contact h4
const contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent.contact["contact-h4"];

// contact p
const contP = document.querySelectorAll(".contact p")
let contactText = document.querySelector('.contact p').innerHTML =
  '123 Way 456 Street <br> Somewhere, USA';

//contact styles
contP[0].style.fontSize = "16px";
contP[0].style.marginBottom = "10px";
contP[1].textContent = siteContent.contact.phone;
contP[1].style.fontSize = "16px";
contP[1].style.marginBottom = "10px";
contP[2].textContent = siteContent.contact.email;
contP[2].style.fontSize = "14px";
// /**************************Footer*********************************/
const footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;