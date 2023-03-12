// 수량 업데이트 함수
function updateCartItemQuantity(input) {
  const itemId = input.getAttribute('data-item-id');
  const itemPrice = input.getAttribute('data-item-price');
  const quantity = input.value;
  const totalPrice = itemPrice * quantity;

  // 서버로 업데이트 요청 보내기 (axios를 사용한 예시)
  axios.post('/mycart/update', { itemId, quantity })
    .then(() => {
      // 성공적으로 업데이트되면 합계 가격 업데이트
      const totalEl = input.parentNode.parentNode.nextElementSibling;
      totalEl.textContent = totalPrice;
      calculateTotalPrice();
    })
    .catch((error) => {
      console.error(error);
    });
}

// 장바구니에서 선택된 상품 주문 함수
function orderSelectedItems() {
  const checkboxes = document.querySelectorAll('input[name="selected-items"]:checked');
  const itemIds = Array.from(checkboxes).map((checkbox) => checkbox.value);

  // 서버로 주문 요청 보내기
  axios.post('/cartOrder', { itemIds })
    .then(() => {
      // 결제페이지로 이동
      window.location.href = '/payment';
    })
    .catch((error) => {
      console.error(error);
    });
}

// 장바구니 전체 상품 주문 함수
function orderAllItems() {
  const checkboxes = document.querySelectorAll('input[name="selected-items"]');
  const itemIds = Array.from(checkboxes).map((checkbox) => checkbox.value);

  // 서버로 주문 요청
  axios.post('/cartOrder', { itemIds })
    .then(() => {
      // 결제페이지로 이동
      window.location.href = '/checkout';
    })
    .catch((error) => {
      console.error(error);
    });
}

// 합계 가격 계산 함수
function calculateTotalPrice() {
  const checkboxes = document.querySelectorAll('input[name="selected-items"]:checked');
  let totalPrice = 0;

  checkboxes.forEach((checkbox) => {
    const itemRow = checkbox.parentNode.parentNode;
    const productEaInput = itemRow.querySelector('.shoppingCartProductEa');
    const price = quantityInput.getAttribute('data-item-price');
    const productEa = quantityInput.value;
    const itemTotalPrice = price * productEa;
    totalPrice += itemTotalPrice;
  });

  document.querySelector('#totalPrice').textContent = totalPrice;
}