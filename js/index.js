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
console.log(call_to_action.children)
// "cta": {
//   "h1": "DOM Is Awesome",
//   "button": "Get Started",
//   "img-src": "img/header-img.png"
// }
call_to_action.querySelector(".cta-text").children[0].innerHTML = siteContent["cta"]["h1"]
call_to_action.querySelector(".cta-text").children[1].innerHTML = siteContent["cta"]["button"]
call_to_action.children[1].setAttribute("src", siteContent["cta"]["img-src"])

let main_content = document.querySelector(".main-content")
console.log(main_content)
// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// }

let top_content = main_content.querySelector(".top-content")
let top_content_text_content_1 = top_content.children[0]
let top_content_text_content_2 = top_content.children[1]

let image = main_content.querySelector("img")
let bottom_content = main_content.querySelector(".bottom-content")
let bottom_content_text_content_1 = bottom_content.children[0]
let bottom_content_text_content_2 = bottom_content.children[1]
let bottom_content_text_content_3 = bottom_content.children[2]

console.log(top_content)
console.log(top_content_text_content_1)
console.log(top_content_text_content_1.children)
// when filling the text between tags have to use
// the .innerHTML property directly
top_content_text_content_1.children[0].innerHTML = siteContent["main-content"]["features-h4"]
top_content_text_content_1.children[1].innerHTML = siteContent["main-content"]["features-content"]


// console.log(top_content_text_content_2)
top_content_text_content_2.children[0].innerHTML = siteContent["main-content"]["about-h4"]
top_content_text_content_2.children[1].innerHTML = siteContent["main-content"]["about-content"]

// console.log(image)
image.setAttribute("src", siteContent["main-content"]["middle-img-src"])
// console.log(bottom_content)

// console.log(bottom_content_text_content_1)
bottom_content_text_content_1.children[0].innerHTML = siteContent["main-content"]["services-h4"]
bottom_content_text_content_1.children[1].innerHTML = siteContent["main-content"]["services-content"]

bottom_content_text_content_2.children[0].innerHTML = siteContent["main-content"]["product-h4"]
bottom_content_text_content_2.children[1].innerHTML = siteContent["main-content"]["product-content"]

bottom_content_text_content_3.children[0].innerHTML = siteContent["main-content"]["vision-h4"]
bottom_content_text_content_3.children[1].innerHTML = siteContent["main-content"]["vision-content"]
// console.log(bottom_content_text_content_2)
// bottom_content_text_content_2.innerHTML = siteContent["main-content"]["services-content"]
// console.log(bottom_content_text_content_3)
// console.log(bottom_content_text_content_3)
// bottom_content_text_content_3.innerHTML = siteContent["main-content"]["services-content"]

let contact = document.querySelector(".contact")
console.log(contact)
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// }
contact.querySelector("h4").innerHTML = siteContent["contact"]["contact-h4"]
contact.children[1].innerHTML = siteContent["contact"]["address"]

contact.children[2].innerHTML = siteContent["contact"]["phone"]

contact.children[3].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer")

// console.log(footer)

// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// }

footer.querySelector("p").innerHTML = siteContent["footer"]["copyright"]
