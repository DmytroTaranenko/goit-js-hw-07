const counterCategories = document.querySelector('#categories');

const counterItems = counterCategories.querySelectorAll('.item')

console.log(`Number of categories: ${counterItems.length}`);


counterItems.forEach(item => {

    const nameTitle = item.querySelector('h2').textContent
    console.log(`Category: ${nameTitle}`);
    const countElem = item.querySelectorAll('li')
    console.log(`Elements: ${countElem.length}`);
    
});

