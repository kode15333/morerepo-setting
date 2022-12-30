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
