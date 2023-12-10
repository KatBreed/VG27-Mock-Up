
document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector("select");
    const yearly = document.getElementById("yearly_price")
    const monthly = document.getElementById("monthly_price")

    select.addEventListener("change", setCurrency)

    function setCurrency() {
        const choice = select.value

        if (choice === "USD") {
            yearly.innerHTML = "USD$29.99/year";
            monthly.innerHTML = "USD$2.99/month";
        } else {
            yearly.innerHTML = "GBP&pound;29.99/year";
            monthly.innerHTML = "GBP&pound;2.99/month";
        }
    }
});