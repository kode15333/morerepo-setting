[![DOCS_CI](https://github.com/kode15333/morerepo-setting/actions/workflows/docs_ci.yml/badge.svg)](https://github.com/kode15333/morerepo-setting/actions/workflows/docs_ci.yml)
[![WEB_CI](https://github.com/kode15333/morerepo-setting/actions/workflows/web_ci.yml/badge.svg)](https://github.com/kode15333/morerepo-setting/actions/workflows/web_ci.yml)
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
