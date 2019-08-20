function showModal(ele) {
    var modal = document.getElementById("modal");
    var modal_img = document.getElementById("modal-image");
    var modal_title = document.getElementById("modal-title");
    var modal_des = document.getElementById("modal-description");
    var modal_link = document.getElementById("modal-link");
    var img = ele.getElementsByTagName("img")[0]
    modal.style.display = "block";
    modal_img.src = img.src;
    modal_des.innerHTML = img.alt;
    modal_title.innerHTML = ele.getElementsByTagName("div")[0].innerHTML;
    modal_link.href = ele.getElementsByTagName("a")[0].href;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}