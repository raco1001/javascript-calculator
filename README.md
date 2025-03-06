프로젝트의 구조는 간략히 다음과 같습니다.

```
root/ # 프로젝트 루트 디렉토리
├── dist # 타입스크립트에서 컴파일 된 결과물
│   ├── app
│   │   ├── index.html # 계산기 웹 화면
│   │   ├── index.js # 이벤트 리스너 등록
│   │   └── styles.css # 스타일 시트
│   ├── entities
│   │   └── calculator
│   │       ├── Calculator.js # 계산을 진행하고 결과를 반환
│   │       ├── ExpressionParser.js # 입력된 문자열을 파싱
│   │       ├── Formatter.js # 값의 표시 형식을 지정 (지수 표기법, 자릿수 ',' 표시 등)
│   │       ├── OperatorPrecedence.js # 연산자의 우선순위를 설정
│   │       ├── PostfixEvaluator.js # 후위 표기법 계산
│   │       └── Tokenizer.js # 수식을 개별적인 토큰으로 분리
│   └── widgets
│       └── calculatorWidget
│           └── CalculatorUI.js # UI 매핑 후 이벤트 리스너 등록 
├── package-lock.json
├── package.json
├── src # 컴파일 전 소스코드 디렉토리
│   ├── app
│   │   ├── index.html
│   │   ├── index.ts
│   │   └── styles.css
│   ├── entities
│   │   └── calculator
│   │       ├── Calculator.ts
│   │       ├── ExpressionParser.ts
│   │       ├── Formatter.ts
│   │       ├── OperatorPrecedence.ts
│   │       ├── PostfixEvaluator.ts
│   │       └── Tokenizer.ts
│   ├── tests
│   │   ├── Calculator.test.ts
│   │   ├── ExpressionParser.test.ts
│   │   ├── PostfixEvaluator.test.ts
│   │   └── formatter.test.ts
│   └── widgets
│       └── calculatorWidget
│           └── CalculatorUI.ts
└── tsconfig.json
```
