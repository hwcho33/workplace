## Types

<br />

| Name                  |  Description                                             
| --------------------- |  ----------------------------------------------
| `FEAT`(feature)       |  신규 기능 추가
| `FIX`(fix)            |  코드 수정
| `CLN`(clean up)       |  코드 정리 / 리팩토링
| `DOC`(documentation)  |  문서 작업
| `TST`(test)           |  테스트 추가/수정
| `BLD`(build)          |  빌드 프로세스 관련 수정(yml)
| `PERF`(performance)   |  속도/성능 개선

<br />

---

<br />

## Example

<br />

✅ 신규 기능 추가
```bash
FEAT: 전시템플릿 그룹 등록 API 적용
```

<br />

✅ 버그 수정
```bash
BUG: 템플릿 조회 누락 파라미터 추가
```

<br />

✅ 리팩토링
```bash
CLN: DI 변경 (Field -> Constructor)
```

<br />

✅ 성능 개선
```bash
PERF: 소나큐브 적용
```