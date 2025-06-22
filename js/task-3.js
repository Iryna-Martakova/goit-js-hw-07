const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener("input", () => {
    let inputValue = nameInput.value;
    const trimValue = inputValue.trim();
    if (trimValue === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimValue;
    }
});


nameInput.addEventListener("mouseenter", () => {
    nameInput.style.border = "1px solid #000";
});

nameInput.addEventListener("mouseleave", () => {
    nameInput.style.border = "1px solid #808080";
});

nameInput.addEventListener("focus", () => {
    nameInput.style.outline = "none";
    nameInput.style.border = "1px solid #808080";
})




// Styles
nameInput.style.padding = "8px 0 8px 16px";
nameInput.style.minWidth = "360px";
nameInput.style.height = "40px";
nameInput.style.border = "1px solid #808080";
nameInput.style.borderRadius = "4px";