async function getdetiles(){
    const urlParms = new URLSearchParams(window.location.search);
    const pid = urlParms.get('id');
    const respone =  await axios.get(`https://dummyjson.com/products/${pid}`);
    const data = respone.data;
    let{title , description , brand , price , category , thumbnail} = data;

    document.querySelector(".detiles-product").innerHTML = 
    `<h2 class="title"> ${title}</h2>
    <p class="description"><span>discrption :</span> ${description}</p>
    <span class="catagory"> <span>catagory : </span> ${category}</span>
    <span class="brand"><span>brand : </span> ${brand}</span>
    <span class="price"> ${price}$</span>
    <img src="${thumbnail}" alt="product image"/>
    `;
}

getdetiles();