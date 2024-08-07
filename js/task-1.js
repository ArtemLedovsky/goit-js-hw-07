const categoriesList = document.querySelector('#categories')
console.log(`Number of categories: ${categoriesList.children.length}`);


const items = categories.querySelectorAll('.item')

items.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const categoryElements = item.querySelectorAll('.item li').length;
    console.log(`Elements: ${categoryElements}`);
})
