
let carts = document.getElementById('carts');
let openbar = document.getElementById('open-bar');

function openmenu(){
    openbar.style.right = "0";
}

function closemenu(){
    openbar.style.right = '-100%'
}


function order(fun) {
    carts.innerHTML = '';



    fun.map(item => {
        carts.innerHTML += `
        <div class=" cart  w-[300px] p-4 shadow-xl rounded-lg " style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
            border-radius: 10px; padding: 20px;">
                <img src="${item.image}" class="w-full h-60  object-contain m-auto"
                    alt="" >
                <div >
                    <h5 class="text-xs text-slate-600 font-semibold mt-2">${item.category}</h5>
                    <h2 class="text-lg font-semibold mt-3">${item.title.substring(0, 50)}</h2>
                    <p class="text-sm text-slate-600 font-semibold mt-2">${item.description.substring(0, 70)}</p>
                    <div class="flex items-center justify-between" >
                        <h4 class="text-2xl font-bold mt-3">${item.price}</h4>

                        <button onclick="addcart(${item.id})" class="mt-4 bg-sky-700 w-36 py-3 rounded-lg text-white"><i
                                class="fa-solid fa-cart-shopping "></i> Elave et</button>
                    </div>
                </div>
            </div>
        `
    })
}

order(data);


function btn1() {
    order(data);
}

function btn2() {
    const filtered = data.filter(x => x.category === "women's clothing");
    order(filtered)
}

function btn3() {
    const filtered = data.filter(x => x.category === "men's clothing");
    order(filtered)
}

function btn4() {
    const filtered = data.filter(x => x.category === "electronics");
    order(filtered)
}

function btn5() {
    const filtered = data.filter(x => x.category === "jewelery");
    order(filtered)
}


let shopingcart  = document.getElementById('shopingcart');

let cartarr = [];

function addcart(id){
let cartall = data.find(item=>item.id == id);
if(cartall && !cartarr.some(item=>item.id === cartall.id)) {
    cartarr.push(cartall);
}
sebetgoster()
}

function sebetgoster(){
    shopingcart.innerHTML='';
    cartarr.map(item=>{
        shopingcart.innerHTML+=`
         <div class=" cart  bg-white w-[150px] p-4 shadow-xl rounded-lg " style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
            border-radius: 10px; padding: 20px;">
                <img src="${item.image}" class="w-full h-32  object-contain m-auto"
                    alt="" >
                <div >
                    <h5 class="text-xs text-slate-600 font-semibold mt-2">${item.category}</h5>
                    <h2 class="text-sm font-semibold mt-3">${item.title.substring(0, 17)}</h2>
                    <div class="flex items-center justify-between" >
                        <h4 class="text-sm font-bold mt-1">${item.price}$</h4>

                        <button onclick="addcart(${item.id})" class="mt-1 bg-sky-700 w-20 p-2 py-2 text-sm  text-white"> sil</button>
                    </div>
                </div>
            </div>
        `

    })
}

/*const btns = document.querySelectorAll('.btn button');

btns[0].addEventListener('click', () => order(data)); // Hamısı

btns[1].addEventListener('click', () => {
    const filtered = data.filter(x => x.category === "women's clothing");
    order(filtered);
});

btns[2].addEventListener('click', () => {
    const filtered = data.filter(x => x.category === "men's clothing");
    order(filtered);
});

btns[3].addEventListener('click', () => {
    const filtered = data.filter(x => x.category === "electronics");
    order(filtered);
});

btns[4].addEventListener('click', () => {
    const filtered = data.filter(x => x.category === "jewelery");
    order(filtered);
});*/



