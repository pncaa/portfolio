const descriptions = {
    "image1.png": "Sebuah kalkulator yang husus untuk menghitung sebaran peluang eksponensial. Saya membuat ini bersama kelompok saya untuk melaksanakan tugas projek mata kulih probabilitas dan statistika",
    "image2.png": "The Plant's merupakan website yang saya buat sendiri untuk projek mata kuliah webdes. website ini dapat menerima input pertanyaan mengenai tumbuhan dan akan memberikan output jawaban dari pertanyaan yang kamu tanyakan",
    "image3.png": "Ini merupakan projek website portofolio yang baru saya buat untuk mengerjakan tugas projek matkul pemweb",
    "image4.png": "Ini merupakan desain aplikasi pertama saya yaitu Goprak. Ini merupakan hasil prakerin dari kelompok prakerin saya pada SMK dahulu",
    "image5.png": "Description for Image 5"
};

function swapImage(cardNumber) {

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const desc2 = document.getElementById('desc2');

    let tempSrc;

    if (cardNumber === 1) {

        tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;
    } else if (cardNumber === 3) {

        tempSrc = img3.src;
        img3.src = img2.src;
        img2.src = tempSrc;
    } else if (cardNumber === 4) {

        tempSrc = img4.src;
        img4.src = img2.src;
        img2.src = tempSrc;
    } else if (cardNumber === 5) {

        tempSrc = img5.src;
        img5.src = img2.src;
        img2.src = tempSrc;
    }


    desc2.innerText = descriptions[img2.src.split('/').pop()];
}