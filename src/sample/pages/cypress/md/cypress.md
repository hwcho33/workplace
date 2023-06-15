<div class="mb-15 pa-3">
AS-IS 시스템에서 사용한 `Mocha` 의 경우 `headless` 방식으로 테스트를 진행하는 방식이었습니다.

`Cypress` 의 경우 자체 제공하는 `GUI` 를 통해 좀 더 시각화하여 테스트를 진행할 수 있기 때문에 두가지 모두 가이드 작성하였습니다.

단위 혹은 통합이 아닌 `End to End` 사용자 관점에서 테스트를 할 수 있도록 `e2e` 테스트에 대해 가이드합니다.

자세한 사용법은 **공식 홈페이지**를 참고바랍니다. [Cypress 공식 홈페이지](https://docs.cypress.io/guides/overview/why-cypress)
</div>

<div class="pa-3">

#### Cypress App(GUI)

- 모듈 설치

```
npm install
```

- cypress App open

```
npm run e2e:open
```
`Command` 를 실행하게 되면 신규 브라우저 창이 열립니다.

![image](https://user-images.githubusercontent.com/56063287/190058159-d3599a45-3175-4367-b861-640c21a96f30.png)

- E2E Testing 선택

![image](https://user-images.githubusercontent.com/56063287/190058255-902d5fe1-145e-4dfb-9533-ea4112a8d6d0.png)

- Continue 선택

![image](https://user-images.githubusercontent.com/56063287/190058389-5ba0e9aa-abc2-42b0-ade9-dee0b9844acf.png)

- Chrome 브라우저 선택 후 start 클릭

![image](https://user-images.githubusercontent.com/56063287/190058460-80c2ee0d-1fcc-417c-9bc8-4c9ca185756a.png)

-  create new empty spec 선택(신규일 경우) 후 파일 생성

#### 사용법

1. 시작


시작은 **describe** 함수를 사용하고 첫번째 인자로 **테스트 명**, 두번째 인자로 **CallBack** 함수를 작성한다.

**CallBack** 내부 함수에는 테스트 명에 속하는 **테스트 코드** 를 작성한다.

위예시는 총 2개의 **테스트 항목** 을 가진다.

첫번째로, 

```ts
describe('Axios 페이지 Title 체크', () => {
  const mainTitleList = ['Axios 모듈 사용 방법', 'Options 설정']

  it('Main Page Redirect Success', () => {
    cy.visit('/sample/axios')
    cy.url().should('eq', 'http://localhost:3030/sample/axios')
    mainTitleList.forEach((title: string) => {
      cy.get('[data-name="title"]').contains(title).and('be.visible')
    })
  })
})
```

페이지를 접근하였을 때, 정상적으로 페이지가 노출되는지에 대한 간단한 체크이다.

두번째로,

```ts
describe('Axios Request 호출 및 status 체크', () => {
  beforeEach(() => {
    cy.visit('/sample/component/higher-order-component')
  })
  it('Axios Call Get Test', () => {
    cy.intercept('GET', '/api/users*').as('getUsers')
    cy.get('[data-name="get"]').click()
    cy.wait('@getUsers').then(interception => {
      expect(interception.response).to.have.property('body')
      expect(interception.response).to.have.property('statusCode')
      expect(interception.response.statusCode).equal(200)
    })
  })

  it('Axios Call Post Test', () => {
    cy.intercept('POST', '/api/users').as('postUsers')
    cy.get('[data-name="post"]').click()
    cy.wait('@postUsers').then(interception => {
      expect(interception.response).to.have.property('body')
      expect(interception.response).to.have.property('statusCode')
      expect(interception.response.statusCode).equal(201)
    })
  })
  it(
    'Axios Call Put Test',
    {
      retries: {
        runMode: 2,
        openMode: 2
      }
    },
    () => {
      cy.intercept('PUT', '/api/users/*').as('putUsers')
      cy.get('[data-name="put"]').click()
      cy.wait('@putUsers').then(interception => {
        expect(interception.response).to.have.property('body')
        expect(interception.response).to.have.property('statusCode')
        expect(interception.response.statusCode).equal(200)
      })
    }
  )

  it('Axios Call Delete Test', () => {
    cy.intercept('DELETE', '/api/users/*').as('deleteUsers')
    cy.get('[data-name="delete"]').click()
    cy.wait('@deleteUsers').then(interception => {
      expect(interception.response).to.have.property('body')
      expect(interception.response).to.have.property('statusCode')
      expect(interception.response.statusCode).equal(204)
      expect(interception.response.headers['content-length']).equal('0')
    })
  })
})
```

두번째는 Axios Request 에 대한 응답이 적절하게 오는가? 에 대한 테스트 코드이다.

코드를 보면 **CallBack 함수** 첫째줄에 아래와 같은 코드가 존재한다.

```ts
  beforeEach(() => {
    cy.visit('/sample/component/higher-order-component')
  })
```

이는 이후 여러개의 **it** 을 활용한 유닛 테스트를 진행할때 각 항목마다 대상이 되는 페이지를 동일하게 가져간다는 의미로 이해하면 된다.

**axios** 를 요청할때 요청하는 **Network** 를 **intercept** 하기 위한 함수와 wait 함수를 통해 응답에 대한 정합성을 테스트 하는 코드이다.

이 외 자세한 코드는 공식홈페이지를 통해 학습하여 코드를 작성하도록 한다.
</div>