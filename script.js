// ================= MUA NGAY =================

function goToCheckout(name, price, image){

    // Lưu dữ liệu vào localStorage

    localStorage.setItem("productName", name);

    localStorage.setItem("productPrice", price);

    localStorage.setItem("productImage", image);

    // Chuyển trang

    window.location.href = "checkout.html";

}
// ================= TÌM KIẾM =================

function searchProduct(){

    const keyword =
    document.querySelector(".search-box input").value;

    if(keyword === ""){

        alert("Vui lòng nhập tên sản phẩm");

    }else{

        alert("Đang tìm kiếm: " + keyword);

    }

}

// ================= LIÊN HỆ =================

function sendMessage(event){

    event.preventDefault();

    alert("Gửi liên hệ thành công!");

}

// ================= MENU ACTIVE =================

const menuLinks =
document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {

    link.addEventListener("click", function(){

        menuLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

// ================= HIỆU ỨNG CARD =================

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});