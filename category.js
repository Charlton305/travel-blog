const heroImage = document.querySelector(".heading-section")
const pageHeading = document.querySelector(".hero-heading")
const underline = document.querySelector("#category-heading-underline")
const postsContainer = document.querySelector(".collection-list-5")
const itemDiv = document.querySelector(".category-collection-item")
const categoryButtons = document.querySelectorAll(".category-link")
const postsData = window.posts
const categoriesData = window.categories

let category = ""

const renderPage = (pageCategory) => {
  postsContainer.innerHTML = ""
  category = processHash(pageCategory)
  const categoryData = categoriesData.filter(cat => cat.Name === category)
  console.log(categoryData)
  if (categoryData.length < 1) {
    pageHeading.textContent = "No posts to show"
    underline.style.display = "none"
  } else {
    const pageHeroImage = categoryData[0]["hero image"]
    heroImage.style.backgroundImage = `url(${pageHeroImage})`
    pageHeading.textContent = category
    underline.style.display = "display"

    // Display blog posts in list
    const filteredArray = postsData.filter(item => item.Category === pageCategory)

    const newArr = filteredArray.map(post => {
      const newDiv = document.createElement("div")
      newDiv.className = "category-collection-item w-dyn-item"
      newDiv.role = "listitem"

      const image = post["Main Image"]
      const name = post["Name"]
      const body = post["Post Body"]
      const url = `/detail_post.html#${post.Slug}`
      newDiv.innerHTML = `<div
    data-w-id="46907aad-f010-d1dd-fc4f-755c73aa2c08"
    class="category-collection-card">
    <div class="category-collection-card-container">
    <div class="category-collection-card-image-div">
    <img
    src="${image}"
    loading="lazy"
    width="2736"
    alt=""
    class="image"/>
    </div>
    <div class="category-collection-card-text-div">
    <h3
    class="category-collection-heading">${name}</h3>
    <div class="category-rich-text-container">
    <div class="rich-text w-richtext">${body}</div>
    </div>
    <div class="category-card-info-container">
    <div class="category-card-author-info-container">
    <img
    src="images/avatar.png"
    loading="lazy"
    alt=""
    class="image-2" />
    <div class="category-card-info">Sarah Smith</div>
    </div>
    <div class="category-card-info w-embed">
    <p style="margin-bottom: 0"></p>
    <!--  -->
    </div>
    </div>
    </div>
    </div>
    <a href="${url}" class="link-block-2 w-inline-block"></a>
    </div>`
      postsContainer.appendChild(newDiv)
    })
  }
}

renderPage(location.hash.substring(1))

// Re-render on category click to load new data
categoryButtons.forEach(link => {
  link.addEventListener("click", (e) => {
    const buttonCategory = e.target.textContent
    if (buttonCategory === category) {
      return
    } else {
      renderPage(link.href.split("#")[1])
    }
  })
})