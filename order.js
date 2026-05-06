const menuData = [
  { category: "열정정식", name: "(야들야들) 돼지국밥정식", price: 12000, desc: "" },
  { category: "열정정식", name: "(속풀이) 얼큰돼지국밥정식", price: 13000, desc: "" },
  { category: "열정정식", name: "(고단백질) 살코기수육국밥정식", price: 12000, desc: "" },
  { category: "열정정식", name: "(매운깔끔맛) 얼큰살코기국밥정식", price: 13000, desc: "" },
  { category: "열정정식", name: "(더감칠맛) 토종순대국밥정식", price: 12000, desc: "" },
  { category: "열정정식", name: "(칼칼한맛) 얼큰순대국밥정식", price: 13000, desc: "" },
  { category: "열정정식", name: "(모두맛있다) 모듬국밥정식", price: 12000, desc: "" },
  { category: "열정정식", name: "(매운땡김맛) 얼큰모듬국밥정식", price: 13000, desc: "" },
  { category: "열정정식", name: "(쫄깃곱창) 내장국밥정식", price: 12000, desc: "" },
  { category: "열정정식", name: "(쫄깃내장) 얼큰내장국밥정식", price: 13000, desc: "" },

  { category: "열정진국", name: "(재주문 1위) 열정충전해장국+숙주+당면", price: 13000, desc: "얼큰깔끔" },
  { category: "열정진국", name: "(순살만) 순살갈비탕+당면+육장", price: 14000, desc: "순살만살살" },
  { category: "열정진국", name: "(더깊은맛) 특설렁탕+당면+육장", price: 14000, desc: "소고기살만100g+한우육수" },
  { category: "열정진국", name: "(땡기는맛) 햄폭탄부대찌개800g+당면", price: 13000, desc: "품격높은햄" },
  { category: "열정진국", name: "(특뼈해장국) 열정2배감자탕+육장", price: 14000, desc: "감자뼈350g이상" },
  { category: "열정진국", name: "(더맛있는맛) 순살감자탕+육장", price: 15000, desc: "뼈없는순살" },
  { category: "열정진국", name: "(바르게매운맛) 순살닭볶음탕+감자+당면", price: 14000, desc: "감칠맛폭발" },
  { category: "열정진국", name: "(진한국물) 한우곱도리탕+감자+당면", price: 15000, desc: "한우대창" },
  { category: "열정진국", name: "(밥도둑) 전라도식 장터소국밥", price: 13000, desc: "가마솥육수" },
  { category: "열정진국", name: "(내장듬뿍) 전라도식 소내장탕+육장", price: 14000, desc: "내장많음" },
  { category: "열정진국", name: "(한결같은맛) 소양내장탕+육장", price: 15000, desc: "깐양+내장" },
  { category: "열정진국", name: "(원조감성) 양평양선지해장국+육장", price: 15000, desc: "선지가득" },
  { category: "열정진국", name: "(기력충전) 닭한마리삼계탕", price: 15000, desc: "100%국내산" },

  { category: "열정한상", name: "뼈다귀전골+밥2+육장2+깍두기1+무말랭이1", price: 32000, desc: "" },
  { category: "열정한상", name: "꽉찬소곱창전골+당면+밥2+육장2+깍두기1+무말랭이1", price: 29000, desc: "소곱창260g" },
  { category: "열정한상", name: "담백모듬전골+당면+밥2+육장2+깍두기1+무말랭이1", price: 29000, desc: "" },
  { category: "열정한상", name: "얼큰모듬전골+당면+밥2+육장2+깍두기1+무말랭이1", price: 29000, desc: "" },
  { category: "열정한상", name: "고급햄부대전골+당면+밥2+육장2+깍두기1+무말랭이1", price: 28000, desc: "비싼고급햄" },
  { category: "열정한상", name: "닭볶음탕전골+당면+공기밥2+육장2+깍두기1+무말랭이1", price: 29000, desc: "" },
  { category: "열정한상", name: "한우곱도리탕전골+당면+밥2+육장2+깍두기1+무말랭이1", price: 31000, desc: "" },
  { category: "열정한상", name: "(다이어트) 뽈살항정제육250g+무말랭이+육장", price: 19000, desc: "" },
  { category: "열정한상", name: "잡내없는 쫀득보쌈수육 250g+무말랭이+육장", price: 19000, desc: "국내산" },
  { category: "열정한상", name: "(시골순대) 토종순대한상300g+무말랭이", price: 10000, desc: "토종순대한상" },
  { category: "열정한상", name: "(쫄깃~탱글) 낙지젓무침", price: 5000, desc: "100g" },
  { category: "열정한상", name: "(돼지국밥함박정식) 돼지국밥1+함박스테이크2", price: 12000, desc: "돼지국밥1+함박2개" },
  { category: "열정한상", name: "(얼큰돼지국밥함박정식) 얼큰돼지국밥1+함박스테이크2", price: 12000, desc: "얼큰돼지국밥1+함박2개" },
  { category: "열정한상", name: "(순대국밥함박정식) 토종순대국밥1+함박스테이크2", price: 12000, desc: "순대국밥1+함박2개" },
  { category: "열정한상", name: "(살코기국밥함박정식) 살코기국밥1+함박스테이크2", price: 12000, desc: "살코기국밥1+함박2개" },

  { category: "사이드", name: "(도시락반찬) 함박스테이크 2개", price: 4000, desc: "" },
  { category: "사이드", name: "(도시락반찬) 함박스테이크 4개", price: 8000, desc: "" },
  { category: "사이드", name: "(동글바삭) 완자돈까스3개+육장", price: 5000, desc: "" },
  { category: "사이드", name: "(동글바삭) 완자돈까스6개+육장", price: 10000, desc: "" },
  { category: "사이드", name: "얇은피왕만두(고기)", price: 6000, desc: "4개" },
  { category: "사이드", name: "얇은피왕만두(김치)", price: 6000, desc: "4개" },
  { category: "사이드", name: "얇은피왕만두(고기2+김치2)", price: 6000, desc: "4개" },
  { category: "사이드", name: "갈비만두", price: 6000, desc: "8개" },
  { category: "사이드", name: "왕군만두(고기)", price: 6000, desc: "4개" },
  { category: "사이드", name: "왕군만두(김치)", price: 6000, desc: "4개" },
  { category: "사이드", name: "왕군만두(고기2+김치2)", price: 6000, desc: "4개" },
  { category: "사이드", name: "갈비 군만두(8개)", price: 6000, desc: "8개" },

  { category: "추가", name: "육장 추가(특제소스)", price: 1000, desc: "" },
  { category: "추가", name: "공기밥 추가", price: 1500, desc: "" },
  { category: "추가", name: "깍두기 추가", price: 1500, desc: "" },
  { category: "추가", name: "생부추 추가", price: 1000, desc: "" },
  { category: "추가", name: "무말랭이 추가", price: 1000, desc: "" },
  { category: "추가", name: "5찬 추가", price: 1500, desc: "새우젓, 다대기, 쌈장, 청양고추, 양파" },
  { category: "추가", name: "초장추가", price: 500, desc: "" },

  { category: "음료", name: "코카콜라(250ml)", price: 1500, desc: "" },
  { category: "음료", name: "코카콜라(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "코카콜라 제로(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "코카콜라(500ml)", price: 2500, desc: "" },
  { category: "음료", name: "코카콜라 제로(500ml)", price: 2500, desc: "" },
  { category: "음료", name: "코카콜라(1.25L)", price: 3000, desc: "" },
  { category: "음료", name: "칠성사이다(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "칠성사이다 제로(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "펩시(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "펩시 제로(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "닥터페퍼(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "스프라이트(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "환타 오렌지(355ml)", price: 2000, desc: "" },
  { category: "음료", name: "토레타(500ml)", price: 3000, desc: "" },
  { category: "음료", name: "헛개차(500ml)", price: 2000, desc: "" },
  { category: "음료", name: "생수(500ml)", price: 1000, desc: "" },
  { category: "음료", name: "식혜(340ml)", price: 2000, desc: "" },
  { category: "음료", name: "포카리스웨트(500ml)", price: 2500, desc: "" },
  { category: "음료", name: "쿨피스 복숭아(450ml)", price: 2500, desc: "" },
];

// Google Apps Script web app URL. Deploy apps-script.gs and paste the /exec URL here.
const ORDER_API_URL = "https://script.google.com/macros/s/AKfycbx51SpTzf7GPHpSEAReE0rhe8GJVix1mrPz70s6llbX_Xxqx9ikTOrC-aEC1Nio37kGZg/exec";

const categoryTabs = document.querySelector("#categoryTabs");
const menuList = document.querySelector("#menuList");
const cartItems = document.querySelector("#cartItems");
const subtotalEl = document.querySelector("#subtotal");
const discountEl = document.querySelector("#discount");
const grandTotalEl = document.querySelector("#grandTotal");
const couponSelect = document.querySelector("#couponSelect");
const pickupTime = document.querySelector("#pickupTime");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const requestText = document.querySelector("#requestText");
const makeOrderBtn = document.querySelector("#makeOrderBtn");
const orderSummary = document.querySelector("#orderSummary");
const summaryText = document.querySelector("#summaryText");
const copyBtn = document.querySelector("#copyBtn");

let activeCategory = "열정진국";
const cart = new Map();
const params = new URLSearchParams(window.location.search);

function won(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function categories() {
  return [...new Set(menuData.map((item) => item.category))];
}

function renderCategories() {
  categoryTabs.innerHTML = categories()
    .map((category) => `<button class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderMenu() {
  const items = menuData.filter((item) => item.category === activeCategory);
  menuList.innerHTML = items
    .map((item, index) => `
      <article class="menu-card">
        <h3>${item.name}</h3>
        <p>${item.desc || "포장 주문 가능"}</p>
        <footer>
          <strong>${won(item.price)}</strong>
          <button data-add="${index}">담기</button>
        </footer>
      </article>
    `)
    .join("");

  menuList.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items[Number(button.dataset.add)];
      addToCart(item);
    });
  });
}

function cartKey(item) {
  return `${item.category}::${item.name}`;
}

function addToCart(item) {
  const key = cartKey(item);
  const existing = cart.get(key);
  cart.set(key, existing ? { ...existing, qty: existing.qty + 1 } : { ...item, qty: 1 });
  renderCart();
}

function changeQty(key, delta) {
  const item = cart.get(key);
  if (!item) return;
  const qty = item.qty + delta;
  if (qty <= 0) {
    cart.delete(key);
  } else {
    cart.set(key, { ...item, qty });
  }
  renderCart();
}

function subtotal() {
  return [...cart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
}

function couponDiscount(total) {
  const selected = Number(couponSelect.value);
  if (selected === 3000 && total >= 30000) return 3000;
  if (selected === 2000 && total >= 20000) return 2000;
  if (selected === 1000 && total >= 10000) return 1000;
  return 0;
}

function renderCart() {
  const items = [...cart.entries()];
  if (!items.length) {
    cartItems.innerHTML = `<div class="empty-cart">메뉴를 담아주세요.</div>`;
  } else {
    cartItems.innerHTML = items
      .map(([key, item]) => `
        <div class="cart-item">
          <strong>${item.name}<br><small>${won(item.price)} x ${item.qty}</small></strong>
          <div class="qty-controls">
            <button data-minus="${key}">-</button>
            <span>${item.qty}</span>
            <button data-plus="${key}">+</button>
          </div>
        </div>
      `)
      .join("");
  }

  cartItems.querySelectorAll("[data-minus]").forEach((button) => button.addEventListener("click", () => changeQty(button.dataset.minus, -1)));
  cartItems.querySelectorAll("[data-plus]").forEach((button) => button.addEventListener("click", () => changeQty(button.dataset.plus, 1)));

  const beforeDiscount = subtotal();
  const discount = couponDiscount(beforeDiscount);
  subtotalEl.textContent = won(beforeDiscount);
  discountEl.textContent = discount ? `-${won(discount)}` : "0원";
  grandTotalEl.textContent = won(Math.max(0, beforeDiscount - discount));
}

function buildOrderPayload() {
  const items = [...cart.values()];
  if (!items.length) {
    return null;
  }

  const beforeDiscount = subtotal();
  const discount = couponDiscount(beforeDiscount);
  return {
    store: "열정국밥 관악구 봉천점",
    customerName: customerName.value.trim(),
    customerPhone: customerPhone.value.trim(),
    pickupTime: pickupTime.value,
    coupon: couponSelect.options[couponSelect.selectedIndex].text,
    couponDiscount: discount,
    subtotal: beforeDiscount,
    total: Math.max(0, beforeDiscount - discount),
    request: requestText.value.trim(),
    items: items.map((item) => ({
      category: item.category,
      name: item.name,
      price: item.price,
      qty: item.qty,
      amount: item.price * item.qty,
    })),
  };
}

function summaryLines(payload) {
  return [
    "[열정국밥 관악구 봉천점 포장 주문]",
    `포장 예정 시간: ${payload.pickupTime}`,
    `이름: ${payload.customerName || "미입력"}`,
    `연락처: ${payload.customerPhone || "미입력"}`,
    "",
    "[메뉴]",
    ...payload.items.map((item) => `- ${item.name} ${item.qty}개 / ${won(item.amount)}`),
    "",
    `메뉴 합계: ${won(payload.subtotal)}`,
    `쿠폰: ${payload.coupon}`,
    `쿠폰 할인: ${payload.couponDiscount ? `-${won(payload.couponDiscount)}` : "없음"}`,
    `방문 결제 예정: ${won(payload.total)}`,
    "",
    `요청사항: ${payload.request || "없음"}`,
    "",
    "결제는 매장 방문 시 진행합니다.",
  ];
}

async function submitOrder() {
  const payload = buildOrderPayload();
  if (!payload) {
    alert("메뉴를 먼저 담아주세요.");
    return;
  }

  if (!payload.customerPhone) {
    alert("연락처를 입력해주세요.");
    customerPhone.focus();
    return;
  }

  summaryText.textContent = summaryLines(payload).join("\n");
  orderSummary.hidden = false;

  if (!ORDER_API_URL) {
    alert("주문 내용은 만들어졌습니다. 아직 시트 저장 URL이 연결되지 않아 전화 주문용으로 사용됩니다.");
    return;
  }

  makeOrderBtn.disabled = true;
  makeOrderBtn.textContent = "접수 중...";
  try {
    await fetch(ORDER_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    summaryText.textContent = ["주문이 접수되었습니다.", "", ...summaryLines(payload)].join("\n");
    alert("주문이 접수되었습니다. 가게에서 확인 후 준비합니다.");
  } catch (error) {
    alert("주문 접수에 실패했습니다. 전화 주문을 이용해주세요.");
  } finally {
    makeOrderBtn.disabled = false;
    makeOrderBtn.textContent = "주문 접수하기";
  }
}

function makeSummary() {
  const payload = buildOrderPayload();
  if (!payload) {
    alert("메뉴를 먼저 담아주세요.");
    return;
  }

  summaryText.textContent = summaryLines(payload).join("\n");
  orderSummary.hidden = false;
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

couponSelect.addEventListener("change", renderCart);
makeOrderBtn.addEventListener("click", submitOrder);
copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(summaryText.textContent);
  copyBtn.textContent = "복사 완료";
  setTimeout(() => {
    copyBtn.textContent = "주문 내용 복사";
  }, 1200);
});

renderCategories();
renderMenu();
if (params.get("source") === "gukbap-game") {
  activeCategory = "열정진국";
  const gameCoupon = params.get("coupon");
  if (["1000", "2000", "3000"].includes(gameCoupon)) {
    couponSelect.value = gameCoupon;
  }
  const gameNote = ["1000", "2000", "3000"].includes(gameCoupon)
    ? `국밥열정 쿠폰 대시 게임 쿠폰 ${Number(gameCoupon).toLocaleString("ko-KR")}원 사용`
    : "국밥열정 쿠폰 대시에서 주문 화면 이동";
  requestText.value = [requestText.value.trim(), gameNote].filter(Boolean).join(" / ");
  renderCategories();
  renderMenu();
}
renderCart();
