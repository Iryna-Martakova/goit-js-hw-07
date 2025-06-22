const form = document.querySelector(".login-form");

form.addEventListener("submit", evt => {
    evt.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (emailValue === "" || passwordValue === "") {
        alert('All form fields must be filled in');
        return;
    } 

    const data = {
        email: emailValue,
        password: passwordValue
    }

    console.log(data);

    form.reset();
})




// Styles
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.maxWidth = "360px";

const labels = document.querySelectorAll("label");
labels.forEach(label => {
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.gap = "8px";

    const input = label.querySelector("input");
    input.style.padding = "8px 0 8px 16px";
    input.style.borderRadius = "4px";

    input.addEventListener("mouseenter", () => {
        input.style.border = "1px solid #000";
    });
    
    input.addEventListener("mouseleave", () => {
        input.style.border = "1px solid #808080";
    });

    input.addEventListener("focus", () => {
        input.style.border = "1px solid #808080";
        input.style.outline = "none";
    })

})

const button = document.querySelector("button");
button.style.marginTop = "16px";
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.width = "86px";
button.style.height = "40px";
button.style.background = "#4e75ff";
button.style.color = "#fff";
button.style.borderColor = "transparent";

button.addEventListener("mouseenter", () => {
    button.style.background = "#6c8cff";
});
  
button.addEventListener("mouseleave", () => {
    button.style.background = "#4e75ff";
})