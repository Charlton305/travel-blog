const hash = location.hash.substring(1)
const postName = processHash(hash)
const pageHeading = document.querySelector(".blog-heading")
const line = document.querySelector("#blog-post-heading-underline")
const pageImage = document.querySelector("#blog-image")
const pageContent = document.querySelector(".blog-rich-text")
const blog = window.posts.find((post) => post.Slug === hash);


if (!blog) {
  pageHeading.textContent = "Cannot find blog post"
  pageImage.style.display = "none"
  line.style.display = "none"
} else {
  // Set blog heading
  line.style.display = "block"
  pageHeading.textContent = postName
  
  // Set blog image
  pageImage.style.display = "inline-block"
  pageImage.src = blog["Main Image"]

  // Set blog content
  pageContent.innerHTML = blog["Post Body"]
}

