 document.addEventListener('DOMContentLoaded', ()=>{
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
 })
 function profileDrop() {
    var profileDrop = document.getElementById('profile-drop');
    if(profileDrop.style.display !=='block'){
        profileDrop.style.display='block';
    }else{
        profileDrop.style.display='none';
    }
    
};
function profileWrap(){
     var profileDrop = document.getElementById('profile-drop');
    if(profileDrop.style.display ==='block'){
         profileDrop.style.display='none';
    }
}
 function cartDrop() {
    var cartDrop = document.getElementById('cart-drop');
    var homeDrop = document.getElementById('home');
    if(cartDrop.style.display !=='block'){
        cartDrop.style.display='block';
        homeDrop.style.display='none';

    }else{
        cartDrop.style.display='none';
        homeDrop.style.display='block';
    }
}
function addToCart1(){
    const img1= document.getElementById('img1');
    const cartImg1= document.getElementById('cart-img1')
    cartImg1.src=img1.src
    const p1Name= document.getElementById('p1-name')
    const cartP1Name= document.getElementById('cartp1-name')
    cartP1Name.textContent=p1Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p1Price= document.getElementById('p1-price')
    const cartP1Price= document.getElementById('cartp1-price')
    cartP1Price.textContent=p1Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p1PriceVal=parseInt(p1Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p1PriceVal
    initialTotalPrice.textContent='\u20A6'+sum
    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    alert("successfully added to cart")
    let quantity=document.getElementById('quantity1')
    quantity.textContent=parseInt(quantity.textContent)+1;
}
function addToCart2(){
     const img2= document.getElementById('img2');
    const cartImg2= document.getElementById('cart-img2')
    cartImg2.src=img2.src
    const p2Name= document.getElementById('p2-name')
    const cartP2Name= document.getElementById('cartp2-name')
    cartP2Name.textContent=p2Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p2Price= document.getElementById('p2-price')
    const cartP2Price= document.getElementById('cartp2-price')
    cartP2Price.textContent=p2Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p2PriceVal=parseInt(p2Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p2PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity2')
    quantity.textContent=parseInt(quantity.textContent)+1;
}
function addToCart3(){
    const img3= document.getElementById('img3');
    const cartImg3= document.getElementById('cart-img3')
    cartImg3.src=img3.src
    const p3Name= document.getElementById('p3-name')
    const cartP3Name= document.getElementById('cartp3-name')
    cartP3Name.textContent=p3Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p3Price= document.getElementById('p3-price')
    const cartP3Price= document.getElementById('cartp3-price')
    cartP3Price.textContent=p3Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p3PriceVal=parseInt(p3Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p3PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity3')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}
function addToCart4(){
    const img4= document.getElementById('img4');
    const cartImg4= document.getElementById('cart-img4')
    cartImg4.src=img4.src
    const p4Name= document.getElementById('p4-name')
    const cartP4Name= document.getElementById('cartp4-name')
    cartP4Name.textContent=p4Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p4Price= document.getElementById('p4-price')
    const cartP4Price= document.getElementById('cartp4-price')
    cartP4Price.textContent=p4Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p4PriceVal=parseInt(p4Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p4PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity4')
    quantity.textContent=parseInt(quantity.textContent)+1;
   alert("successfully added to cart") 
}
function addToCart5(){
    const img5= document.getElementById('img5');
    const cartImg5= document.getElementById('cart-img5')
    cartImg5.src=img5.src
    const p5Name= document.getElementById('p5-name')
    const cartP5Name= document.getElementById('cartp5-name')
    cartP5Name.textContent=p5Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p5Price= document.getElementById('p5-price')
    const cartP5Price= document.getElementById('cartp5-price')
    cartP5Price.textContent=p5Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p5PriceVal=parseInt(p5Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p5PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity5')
    quantity.textContent=parseInt(quantity.textContent)+1;
  alert("successfully added to cart")  
}
function addToCart6(){
    const img6= document.getElementById('img6');
    const cartImg6= document.getElementById('cart-img6')
    cartImg6.src=img6.src
    const p6Name= document.getElementById('p6-name')
    const cartP6Name= document.getElementById('cartp6-name')
    cartP6Name.textContent=p6Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p6Price= document.getElementById('p6-price')
    const cartP6Price= document.getElementById('cartp6-price')
    cartP6Price.textContent=p6Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p6PriceVal=parseInt(p6Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p6PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity6')
    quantity.textContent=parseInt(quantity.textContent)+1;
  alert("successfully added to cart")  
}
function addToCart7(){
    const img7= document.getElementById('img7');
    const cartImg7= document.getElementById('cart-img7')
    cartImg7.src=img7.src
    const p7Name= document.getElementById('p7-name')
    const cartP7Name= document.getElementById('cartp7-name')
    cartP7Name.textContent=p7Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p7Price= document.getElementById('p7-price')
    const cartP7Price= document.getElementById('cartp7-price')
    cartP7Price.textContent=p7Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p7PriceVal=parseInt(p7Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p7PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity7')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}
function addToCart8(){
    const img8= document.getElementById('img8');
    const cartImg8= document.getElementById('cart-img8')
    cartImg8.src=img8.src
    const p8Name= document.getElementById('p8-name')
    const cartP8Name= document.getElementById('cartp8-name')
    cartP8Name.textContent=p8Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p8Price= document.getElementById('p8-price')
    const cartP8Price= document.getElementById('cartp8-price')
    cartP8Price.textContent=p8Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p8PriceVal=parseInt(p8Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p8PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity8')
    quantity.textContent=parseInt(quantity.textContent)+1;
   alert("successfully added to cart") 
}
function addToCart9(){
    const img9= document.getElementById('img9');
    const cartImg9= document.getElementById('cart-img9')
    cartImg9.src=img9.src
    const p9Name= document.getElementById('p9-name')
    const cartP9Name= document.getElementById('cartp9-name')
    cartP9Name.textContent=p9Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p9Price= document.getElementById('p9-price')
    const cartP9Price= document.getElementById('cartp9-price')
    cartP9Price.textContent=p9Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p9PriceVal=parseInt(p9Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p9PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity9')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}
function addToCart10(){
    const img10= document.getElementById('img10');
    const cartImg10= document.getElementById('cart-img10')
    cartImg10.src=img10.src
    const p10Name= document.getElementById('p10-name')
    const cartP10Name= document.getElementById('cartp10-name')
    cartP10Name.textContent=p10Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p10Price= document.getElementById('p10-price')
    const cartP10Price= document.getElementById('cartp10-price')
    cartP10Price.textContent=p10Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p10PriceVal=parseInt(p10Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p10PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity10')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}
function addToCart11(){
    const img11= document.getElementById('img11');
    const cartImg11= document.getElementById('cart-img11')
    cartImg11.src=img11.src
    const p11Name= document.getElementById('p11-name')
    const cartP11Name= document.getElementById('cartp11-name')
    cartP11Name.textContent=p11Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p11Price= document.getElementById('p11-price')
    const cartP11Price= document.getElementById('cartp11-price')
    cartP11Price.textContent=p11Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p11PriceVal=parseInt(p11Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p11PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity11')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}
function addToCart12(){
    const img12= document.getElementById('img12');
    const cartImg12= document.getElementById('cart-img12')
    cartImg12.src=img12.src
    const p12Name= document.getElementById('p12-name')
    const cartP12Name= document.getElementById('cartp12-name')
    cartP12Name.textContent=p12Name.textContent
    var initialTotalPrice=document.getElementById("total-price")
    var p12Price= document.getElementById('p12-price')
    const cartP12Price= document.getElementById('cartp12-price')
    cartP12Price.textContent=p12Price.textContent
    const initialVal=parseInt(initialTotalPrice.textContent.replace(/[^0-9]/g, ''))||0;
    const p12PriceVal=parseInt(p12Price.textContent.replace(/[^0-9]/g, ''))||0;
    var sum=initialVal+p12PriceVal
    initialTotalPrice.textContent='\u20A6'+sum

    alert("successfully added to cart")
    const img=document.querySelectorAll('div img').forEach(img => {
        if(img.src !== '' || img.getAttribute('src') !== ''){
            img.parentElement.parentElement.style.display='block';
        }
        if(img.src === '' || img.getAttribute('src') === ''){
            img.parentElement.parentElement.style.display='none';
        }
    })
    let quantity=document.getElementById('quantity12')
    quantity.textContent=parseInt(quantity.textContent)+1;
    alert("successfully added to cart")
}

function search(){
const input=document.getElementById('search-bar');
const button=document.getElementById('search-btn')
const listItems=document.querySelectorAll('.product');


    const inputValue=input.value.toLowerCase().trim();
    
    listItems.forEach((item) => {
        const itemText=item.querySelector('p').textContent.toLowerCase().trim();
        console.log(`INPUT: ${inputValue}, Item text: ${itemText}`);
        if(inputValue === ''){
            item.parentElement.style.display='';
        }
        else if((itemText.includes(inputValue))){
            item.parentElement.style.display='';
        }else{
            item.parentElement.style.display='none';
        }
    });

}
document.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        search();
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.key === 'Backspace'){

        console.log('backspace pressed')
        setTimeout(search, 50);
    }
})


const input = document.getElementById('search-bar');
const products =document.querySelectorAll('.product');

input.addEventListener('input', () => {
    const inputValue=input.value.toLowerCase().trim();

    if (inputValue === ''){
        products.forEach((product) =>{
            product.style.display='';
        });
    }else{
        products.forEach((product) => {
             const itemText=product.querySelector('p').textContent.toLowerCase().trim();
        console.log(`INPUT: ${inputValue}, Item text: ${itemText}`);
        if(inputValue === ''){
            product.parentElement.style.display='';
        }
        else if((itemText.includes(inputValue))){
            product.parentElement.style.display='';
        }else{
            product.parentElement.style.display='none';
        }
        })
    }
})