
var item = [
    {cat:"Books", Product:["html", "css", "bootstrap", "javascript"] },

    {cat:"Laptop", Product:["Dell", "HP", "Lenovo"] },

    {cat:"Cloths", Product:["For Summer", "For Winter"] },
];

console.log("Total Elements : ", item.length);
item.map((iteminfo, index) =>{
    console.log(iteminfo.cat);

    iteminfo.Product.map((name, index2)=>{
        console.log("\t", index2, name);
    })
    console.log("-----------------------------");
})