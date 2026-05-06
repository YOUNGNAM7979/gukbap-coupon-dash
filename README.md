# 국밥열정 쿠폰 대시

GitHub Pages 배포용 폴더입니다.

## 파일

- `index.html`: 쿠폰 게임
- `order.html`: 포장 주문 화면
- `order.css`: 주문 화면 스타일
- `order.js`: 주문 화면 메뉴/쿠폰/주문 처리

## GitHub Pages에 올리는 방법

1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더 안의 파일 전체를 repository 루트에 업로드합니다.
3. repository의 `Settings` > `Pages`로 갑니다.
4. `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, folder는 `/root`로 저장합니다.
6. 잠시 후 표시되는 `https://...github.io/.../` 주소를 네이버 공지에 붙입니다.

게임에서 주문 화면으로 넘어갈 때는 `./order.html?coupon=1000&source=gukbap-game` 형식으로 이동합니다.
