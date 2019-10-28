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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector("nav")
console.log(nav)
nav.children[0].innerHTML = "dd"
console.log(nav.children)
let nav_items = Object.keys(siteContent["nav"]).filter(item => item.includes("nav-item"))
console.log(nav_items)

// for some reason we can introduce an extra parameter to map and it doesn't complain
let set_nav_stuff = (arr1, arr2) => {
  arr1.forEach((k, i) => {
      k.innerHTML = siteContent["nav"][arr2[i]]
})

};
console.log("here")
set_nav_stuff(Array.from(nav.children), nav_items)

// let nav_item_names = []
// nav_items.forEach(nav_item => {
//   nav_item_names.push(siteContent["nav"][nav_item])
// })
// console.log(nav_item_names)

// nav.children.forEach(link => {
//   link.innerHTML = 
// })
let call_to_action = document.querySelector(".cta")
// console.log(call_to_action)
// "cta": {
//   "h1": "DOM Is Awesome",
//   "button": "Get Started",
//   "img-src": "img/header-img.png"
// }

let main_content = document.querySelector(".main-content")
// console.log(main_content)

let contact = document.querySelector(".contact")
// console.log(contact)

let footer = document.querySelector("footer")

// console.log(footer)