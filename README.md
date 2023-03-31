[![DOCS_CI](https://github.com/kode15333/morerepo-setting/actions/workflows/docs_ci.yml/badge.svg)](https://github.com/kode15333/morerepo-setting/actions/workflows/docs_ci.yml)
[![WEB_CI](https://github.com/kode15333/morerepo-setting/actions/workflows/web_ci.yml/badge.svg)](https://github.com/kode15333/morerepo-setting/actions/workflows/web_ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kode15333_morerepo-setting&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kode15333_morerepo-setting)
### package manager
- yarn berry
- node-linker: node-modules
- pnp 지원을 100% 지원하지 않아서 node-modules로 설정(package에서 전역에 설치된 module을 찾지 못하는 문제 발생)

### TURBO REPO TEST 환경 설정
- Library: emotion, axios
- Test Library:  jest, jest-environment-jsdom, ts-jest, @testing-library, msw

### tsconfig common setting package 처리
- packages/setting 패키지로  공통 사용할 수 있도록 처리
  - jest.config.js
  - jest.setup.js
  ```js
  // apps/docs/jest.config.js
  const commonConfig = require('settings/jest.config.js');

  // apps/dosc/jest.setup.js
  import 'settings/jest.setup'

  ```

### mock API 처리
- jest.setup.js 처리
- msw 라이브러리 활용
  ```js
     // apps/dosc/jest.setup.js
    import { mswServerForTest } from "./msw/mswServerForTest";

    mswServerForTest()
  ```
### CI(coverage report)
- pull-request event 발생시, CI(test/build) 후 coverage report
  
### Renovate
- 의존성 관리 자동 업데이트
- 사용법
  1. https://github.com/apps/renovate 원하는 레포
  2. renovate configuate pr 
  3. merge 후 renovate 시작
  4. 설정파일([링크](https://docs.renovatebot.com/configuration-options))
- 설정파일(renovate.json)  
```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    ":timezone(Asia/Seoul)",
    "config:base"
  ],
  "npm": {
    "enabled": true,
    "automerge": true,
    "automergeType": "pr-comment",
    "automergeComment": "This PR has been automatically merged by Renovate Bot because it only modifies package.json files.",
    "major": {
      "automerge": false
    }
  }
}

```
### SonarCloud
- 코드 품질 관리
- 사용법
  1. https://sonarcloud.io/ 원하는 레포
  2. https://sonarcloud.io/project/analysis_method 에서 예제 코드를 참고하여 sonar-project.properties 파일 생성
  3. 해당 프로젝트로 접근하여 코드 품질 확인

### Github Actions
- CI
- 사용법
  1. 공통모듈 변경시, 모든 서비스가 변경되어야 하기 때문에 monorepo로 관리
  2. workflow_call을 이용하여 workflow를 재사용
