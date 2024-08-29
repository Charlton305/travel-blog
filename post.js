const hash = location.hash.substring(1)
const postName = processHash(hash)
const pageHeading = document.querySelector(".blog-heading")
const pageImage = document.querySelector("#blog-image")
const pageContent = document.querySelector(".blog-rich-text")
const blog = window.posts.find((post) => post.Slug === hash);

// Set blog heading
pageHeading.textContent = postName

// Set blog image
pageImage.src = blog["Main Image"]

// Set blog content
pageContent.innerHTML = blog["Post Body"]