document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Product slider
    const products = [
        { name: "MS High Tensile Steel Pipes", desc: "Description 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, eius. Lorem ipsum dolor sit amet consectetur adipisicing ", image: "banner1.jpg" },
        { name: "Aluminium Cheese Pipes", desc: "Description 2  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus atque dolorem accusantium nobis aliquam rerum cum vel, iusto ipsam!", image: "banner2.jpg" },
        { name: "ERW Pipes", desc: "Description 3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos.", image: "banner3.jpg" },
        { name: "Steel Tubes", desc: "Description 3   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus atque dolorem accusantium nobis aliquam rerum cum vel, iusto ipsam!", image: "banner4.jpg" }
    ];

    let currentIndex = 0;
    document.querySelector(".next-product").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % products.length;
        document.getElementById("product-name").innerText = products[currentIndex].name;
        document.getElementById("product-desc").innerText = products[currentIndex].desc;
        document.getElementById("products").style.backgroundImage = `url('./image/${products[currentIndex].image}')`;
    });

    // Smooth scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const offset = 260; // Adjust based on navbar height
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // document.querySelectorAll("a[href^='#']").forEach(anchor => {
    //     anchor.addEventListener("click", function(e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute("href")).scrollIntoView({
    //             behavior: "smooth"
    //         });
    //     });
    // });
});
