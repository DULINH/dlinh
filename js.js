
const reviews = [
  {
    id: 1,
    img: './img/images1.jpg',
  },
  {
    id: 2,
    img: './img/images2.jpg',
  },
  {
    id: 3,
    img: './img/images3.jpg',
  },
  {
    id: 4,
    img: './img/images4.jpg',
  },
];
// select items
const img = document.getElementById('product-img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
});

// show based on item
function showProduct(product) {
  const item = reviews[person];
  img.src = item.img;
}
// show next 
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showProduct(currentItem);
});
// show prev 
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showProduct(currentItem);
});

// Lưu kích thước ban đầu của ảnh
var originalWidth = 350;
var originalHeight = 350;

function imgSlider(anything) {
    // Gán lại ảnh mới cho phần tử imgSlide
    document.querySelector('.imgSlide').src = anything;
    // Gán kích thước ban đầu của ảnh cho phần tử imgSlide
    let img = document.querySelector('.imgSlide');
    img.style.width = originalWidth + 'px';
    img.style.height = originalHeight + 'px';
}

window.addEventListener('scroll', function() {
  var fixedElement = document.querySelector('.fixed');
  var triggerElement = document.querySelector('#commentSection'); // Thay '#triggerElementId' bằng id của tab hoặc div mà bạn muốn dừng lại
  var triggerOffset = triggerElement.offsetTop; // Lấy vị trí top của triggerElement

  if (window.pageYOffset >= triggerOffset) { // Kiểm tra nếu cuộn xuống vị trí của triggerElement
      fixedElement.style.position = 'relative'; // Thay đổi thuộc tính position của fixedElement
  } else {
      fixedElement.style.position = 'fixed'; // Giữ nguyên position là fixed
  }
});

