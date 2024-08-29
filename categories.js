const categoriesContainer = document.querySelector(".collection-list-4")

const data = window.categories
console.log(data)

data.forEach(cat => {
  const newDiv = document.createElement("div")
  newDiv.role = "listitem"
  newDiv.className = "categories-card w-dyn-item"

  const image = cat.Icon
  const name = cat.Name
  const url = `/detail_category.html#${cat.Slug}`

  // Add data to new div for each item in list
  newDiv.innerHTML = `<a
                data-w-id="c9b5fd87-1170-9703-04bf-362489eedafa"
                href="${url}"
                class="categories-card-link-block w-inline-block">
                <div class="div">
                  <img
                    src="${image}"
                    loading="lazy"
                    alt=""
                    class="categories-card-image#" />
                </div>
                <div class="categories-card-content-container">
                  <h1 class="categories-card-headline">${name}</h1>
                </div>
              </a>`
              categoriesContainer.appendChild(newDiv)
});