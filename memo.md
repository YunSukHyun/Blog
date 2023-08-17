## 페이지 레이아웃

### NextJS는 React를 기반으로한 프레임워크이기 때문에 React에서 권장하는 component를 작은 단위로 분리하는게 좋다.

### -> Header Footer는 server component로 분리했어야한다.

### Footer하단 고정 시키키 main을 화면을 가득채우게하면 된다. height 100vh로 꼭 설정하자

## 프로필 컴포넌트

### div 남발하지 말고 h2 h3 등의 태그를 활용하자

### flex가 만능은 아니다. 가운데 정렬을 위해 반드시 flex를 써야하는것은 아님

### Image를 먼저가져오기 위해 Image에 priority 속성을 넣을 수 있다.

### 단계별로 나눠서 생각하기 메인화면 포스트는 포스트 데이터를 읽어오고 포스트데이터를 보여준다. 2단계로

### 비지니스 로직은 컴포넌트와 분리하자

### tailwindcss truncate는 w-full일 때만 적용된다.

### OtherPost에서는 react-multi-Carousel을 쓰는 부분에 client 컴포넌트를 사용했다.

### 상태를 가지기 위해선 컴포넌트는 client 컴포넌가 되어야한다.
