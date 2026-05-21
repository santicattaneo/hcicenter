const form = document.getElementById("contact-form");

const thanks = document.querySelector(".thanks");
const error = document.querySelector(".error");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    thanks.style.display = "none";
    error.style.display = "none";

    try {

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyH0O62Aax3fr9Q1H7i1isouKcxnELlz3BeWWLB-3hOVe5yF7qyATtGOKAj7EPdcKBWFA/exec",
        {
            method: "POST",
            body: new FormData(form)
        }
    );

    const text = await response.text();

    if (text === "ok") {

      thanks.style.display = "block";

      form.reset();

    } else {

        error.style.display = "block";

    }

    } catch(err) {

    error.style.display = "block";

    console.error(err);

    }

});