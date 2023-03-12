const uploadImg = document.querySelector("#uploadImg");
const preview = document.querySelector(".preview");

const imgPreview = () => {
    preview.innerHTML = '';
    let imgs = uploadImg.files;

    for (let i = 0; i < imgs.length; i++) {
        let preImg = imgs[i];

        const fileReader = new FileReader();

        fileReader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", fileReader.result);
            preview.appendChild(img);
        }
        fileReader.readAsDataURL(preImg);
    }
};

uploadImg.addEventListener('change', imgPreview);