# 2019-KAIST-kOOk-hackathon 

해커톤 주제 : [무쓸모톤] 쓸모없는 것의 가치

TEAM DDD – 김영민 송민재

주제 : 당신에게 가장 쓸모 없는 책을 추천해드리는 Web 서비스 

### 1. Inittial State :　User 로그인 페이지, 

![InitialState](https://user-images.githubusercontent.com/52192602/68075470-8f9bb900-fdeb-11e9-9943-97d03d5031ca.PNG)

#### 2. Personal Book Repository : 유저가 여태까지 읽었던 책 input으로 받아 리스트뷰로 보여줌, 밑에는 추천 도서 목록 또한 리스트뷰로 보여줌

![Personalpage](https://user-images.githubusercontent.com/52192602/68075437-3af83e00-fdeb-11e9-9ceb-aab5320f0f4e.png)

 유저가 새로운 책을 입력할 때 마다 입력한 책과 동떨어진 카테고리의 책을 랜덤하게 추천해줌. 카태고리의 책은 각 카테고리 별로 교보문구 bestseller를 web crawling을 통해 db에 저장함.
 
![update](https://user-images.githubusercontent.com/52192602/68075439-3fbcf200-fdeb-11e9-862b-8e41da1f4d8b.png)

used : JavaScript, HTML, MongoDB, Node.JS, BeautifulSoup, Angular.JS
