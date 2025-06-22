const items = document.querySelectorAll(".item");
const itemQuantity = `Number of categories: ${items.length}`;
console.log(itemQuantity);

items.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li").length;

    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${elements}`)
});





// Styles

items.forEach(item => {
    item.style.listStyleType = "none";
    item.style.boxSizing = "border-box";
    item.style.borderRadius = "8px";
    item.style.backgroundColor = "#f6f6fe";
    
    item.style.width = "392px";
    item.style.height = "auto";
    
    item.style.padding = "16px";
    item.style.marginBottom = "24px";

    const itemUl = item.querySelector("ul");
    itemUl.style.listStyleType = "none";
    itemUl.style.paddingLeft = "0";

    const title = item.querySelector("h2");
    title.style.margin = "0 0 16px 0";
});


const itemLi = document.querySelectorAll(".item ul li");
itemLi.forEach(li => {
    li.style.border = "1px solid #808080";
    li.style.borderRadius = "4px";
    itemLi.width = "360px";
    itemLi.height = "40px";
    li.style.padding = "8px 0 8px 16px";
    li.style.paddingBottom = "8px";
    li.style.paddingLeft = "16px";
    li.style.marginBottom = "8px";
})