# [ganada](https://github.com/mohwa/ganada)

`ganada`는 한글 자/모음을 **분리** 또는 **조립**시키는 라이브러리입니다.

## 지원 브라우저

`IE9+`, `Safari 6+` 등

## 설치하기

```
npm i ganada
```

## 가져오기

CommonJS 모듈 로더 방식으로 가져오기

```
const Ganada = require('ganada');
```


\<script\> 엘리먼트로 가져오기

```html
<script src="path/to/ganada.min.js"></script>
```

## API 목록

|Func|Params|Types|Return|Description|
|:--:|:--:|:--:|:-----:|:----------|
|`isComplete`|v|`{String}`|`{Boolean}`|전달받은 문자(열)이 완성된 문자인지 여부를 반환한다.|
|`isCho`|v|`{String}`|`{Boolean}`|전달받은 문자(열)의 초성 여부를 반환한다.|
|`isJung`|v|`{String}`|`{Boolean}`|전달받은 문자(열)의 중성 여부를 반환한다.|
|`isJong`|v|`{String}`|`{Boolean}`|전달받은 문자(열)의 종성 여부를 반환한다.|
|`search`|v, searchText|`{String}`, `{String}`|`{Boolean}`|첫번째 문자열이 분해된 배열 순서가, 두번째 문자열의 배열 순서를 포함한 문자(열)를 반환한다.|
|`disassemble`|v|`{String}`|`{String}`|전달받은 문자(열)들을 자음/모음으로 분해시킨다.|
|`assemble`|v|`{String}`|`{String}`|전달받은 자음/모음을 문자(열)로 조립한다|


## 사용 예제

`isComplete` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.isComplete('할머니')); // true
console.log(Ganada.isComplete('할머니ㄱ')); // false

```

`isCho` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.isCho('ㄱㄴㄸㄹㄲ')); // true
console.log(Ganada.isCho('ㄱㄸㅚ')); // false

```

`isJung` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.isJung('ㅏㅣㅑㅡ')); // true
console.log(Ganada.isJung('ㅚㄱ')); // false

```

`isJung` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.isJong('ㅎㄱ')); // true
console.log(Ganada.isJong('ㅎㄱㄸ')); // false

```

`search` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.search('가생이닷컴', 'ㄱㅏㅅㅐㅇ')); // 가생
// [ㄱㅏㅅㅐㅇㅇㅣㄷㅏㅅ..] 배열 순서는 [ㄱㅏㅅㅐㅇ] 배열 순서를 정확히 포함한다.
console.log(Ganada.search('가생이닷컴', 'ㄱㅏㅅㅐ')); // 가새
console.log(Ganada.search('가생이닷컴', 'ㄱㅏㅅㅐㅅ')); // ''

```


`disassemble` 메서드
```

const Ganada = require('ganada');

const text = `청와대와 백악관이 북-미 정상회담을 앞두고 나온 ‘트럼프발(發) 주한미군 감축설’에 대해 긴급 진화에 나섰다.
도널드 트럼프 미 대통령이 주한미군의 감축 검토를 지시했다는 뉴욕타임스(NYT) 보도에 대해 청와대는 4일 백악관에 확인한 결과 사실무근이라고 밝혔고, 존 볼턴 백악관 국가안보보좌관도 성명을 내고 “트럼프 대통령은 펜타곤에 주한미군 감축 옵션을 준비하라는 지시를 내린 바 없다”고 반박했다.
청와대와 백악관이 동시에 빠르게 움직인 것은 북-미 정상회담을 앞두고 주한미군 철수 또는 감축 문제가 ‘완전한 비핵화’ 논의에 예기치 않은 영향을 줄 수 있다는 판단에 따른 것이다. 하지만 일각에선 NYT 보도를 단순한 ‘오보 해프닝’으로 보긴 어렵다는 말도 있다.`;

console.log(Ganada.disassemble(text));

/*

ㅊㅓㅇㅇㅗㅏㄷㅐㅇㅗㅏ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅣ ㅂㅜㄱ-ㅁㅣ ㅈㅓㅇㅅㅏㅇㅎㅗㅣㄷㅏㅁㅇㅡㄹ ㅇㅏㅍㄷㅜㄱㅗ ㄴㅏㅇㅗㄴ ‘ㅌㅡㄹㅓㅁㅍㅡㅂㅏㄹ(發) ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㄱㅏㅁㅊㅜㄱㅅㅓㄹ’ㅇㅔ ㄷㅐㅎㅐ ㄱㅣㄴㄱㅡㅂ ㅈㅣㄴㅎㅗㅏㅇㅔ ㄴㅏㅅㅓㅆㄷㅏ.
ㄷㅗㄴㅓㄹㄷㅡ ㅌㅡㄹㅓㅁㅍㅡ ㅁㅣ ㄷㅐㅌㅗㅇㄹㅕㅇㅇㅣ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴㅇㅡㅣ ㄱㅏㅁㅊㅜㄱ ㄱㅓㅁㅌㅗㄹㅡㄹ ㅈㅣㅅㅣㅎㅐㅆㄷㅏㄴㅡㄴ ㄴㅠㅇㅛㄱㅌㅏㅇㅣㅁㅅㅡ(NYT) ㅂㅗㄷㅗㅇㅔ ㄷㅐㅎㅐ ㅊㅓㅇㅇㅗㅏㄷㅐㄴㅡㄴ 4ㅇㅣㄹ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅔ ㅎㅗㅏㄱㅇㅣㄴㅎㅏㄴ ㄱㅕㄹㄱㅗㅏ ㅅㅏㅅㅣㄹㅁㅜㄱㅡㄴㅇㅣㄹㅏㄱㅗ ㅂㅏㄹㄱㅎㅕㅆㄱㅗ, ㅈㅗㄴ ㅂㅗㄹㅌㅓㄴ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴ ㄱㅜㄱㄱㅏㅇㅏㄴㅂㅗㅂㅗㅈㅗㅏㄱㅗㅏㄴㄷㅗ ㅅㅓㅇㅁㅕㅇㅇㅡㄹ ㄴㅐㄱㅗ “ㅌㅡㄹㅓㅁㅍㅡ ㄷㅐㅌㅗㅇㄹㅕㅇㅇㅡㄴ ㅍㅔㄴㅌㅏㄱㅗㄴㅇㅔ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㄱㅏㅁㅊㅜㄱ ㅇㅗㅂㅅㅕㄴㅇㅡㄹ ㅈㅜㄴㅂㅣㅎㅏㄹㅏㄴㅡㄴ ㅈㅣㅅㅣㄹㅡㄹ ㄴㅐㄹㅣㄴ ㅂㅏ ㅇㅓㅂㅅㄷㅏ”ㄱㅗ ㅂㅏㄴㅂㅏㄱㅎㅐㅆㄷㅏ.
ㅊㅓㅇㅇㅗㅏㄷㅐㅇㅗㅏ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅣ ㄷㅗㅇㅅㅣㅇㅔ ㅃㅏㄹㅡㄱㅔ ㅇㅜㅁㅈㅣㄱㅇㅣㄴ ㄱㅓㅅㅇㅡㄴ ㅂㅜㄱ-ㅁㅣ ㅈㅓㅇㅅㅏㅇㅎㅗㅣㄷㅏㅁㅇㅡㄹ ㅇㅏㅍㄷㅜㄱㅗ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㅊㅓㄹㅅㅜ ㄸㅗㄴㅡㄴ ㄱㅏㅁㅊㅜㄱ ㅁㅜㄴㅈㅔㄱㅏ ‘ㅇㅗㅏㄴㅈㅓㄴㅎㅏㄴ ㅂㅣㅎㅐㄱㅎㅗㅏ’ ㄴㅗㄴㅇㅡㅣㅇㅔ ㅇㅖㄱㅣㅊㅣ ㅇㅏㄴㅎㅇㅡㄴ ㅇㅕㅇㅎㅑㅇㅇㅡㄹ ㅈㅜㄹ ㅅㅜ ㅇㅣㅆㄷㅏㄴㅡㄴ ㅍㅏㄴㄷㅏㄴㅇㅔ ㄸㅏㄹㅡㄴ ㄱㅓㅅㅇㅣㄷㅏ. ㅎㅏㅈㅣㅁㅏㄴ ㅇㅣㄹㄱㅏㄱㅇㅔㅅㅓㄴ NYT ㅂㅗㄷㅗㄹㅡㄹ ㄷㅏㄴㅅㅜㄴㅎㅏㄴ ‘ㅇㅗㅂㅗ ㅎㅐㅍㅡㄴㅣㅇ’ㅇㅡㄹㅗ ㅂㅗㄱㅣㄴ ㅇㅓㄹㅕㅂㄷㅏㄴㅡㄴ ㅁㅏㄹㄷㅗ ㅇㅣㅆㄷㅏ.
 */

```

`assemble` 메서드
```

const Ganada = require('ganada');

console.log(Ganada.assemble(`ㅊㅓㅇㅇㅗㅏㄷㅐㅇㅗㅏ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅣ ㅂㅜㄱ-ㅁㅣ ㅈㅓㅇㅅㅏㅇㅎㅗㅣㄷㅏㅁㅇㅡㄹ ㅇㅏㅍㄷㅜㄱㅗ ㄴㅏㅇㅗㄴ ‘ㅌㅡㄹㅓㅁㅍㅡㅂㅏㄹ(發) ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㄱㅏㅁㅊㅜㄱㅅㅓㄹ’ㅇㅔ ㄷㅐㅎㅐ ㄱㅣㄴㄱㅡㅂ ㅈㅣㄴㅎㅗㅏㅇㅔ ㄴㅏㅅㅓㅆㄷㅏ.
ㄷㅗㄴㅓㄹㄷㅡ ㅌㅡㄹㅓㅁㅍㅡ ㅁㅣ ㄷㅐㅌㅗㅇㄹㅕㅇㅇㅣ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴㅇㅡㅣ ㄱㅏㅁㅊㅜㄱ ㄱㅓㅁㅌㅗㄹㅡㄹ ㅈㅣㅅㅣㅎㅐㅆㄷㅏㄴㅡㄴ ㄴㅠㅇㅛㄱㅌㅏㅇㅣㅁㅅㅡ(NYT) ㅂㅗㄷㅗㅇㅔ ㄷㅐㅎㅐ ㅊㅓㅇㅇㅗㅏㄷㅐㄴㅡㄴ 4ㅇㅣㄹ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅔ ㅎㅗㅏㄱㅇㅣㄴㅎㅏㄴ ㄱㅕㄹㄱㅗㅏ ㅅㅏㅅㅣㄹㅁㅜㄱㅡㄴㅇㅣㄹㅏㄱㅗ ㅂㅏㄹㄱㅎㅕㅆㄱㅗ, ㅈㅗㄴ ㅂㅗㄹㅌㅓㄴ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴ ㄱㅜㄱㄱㅏㅇㅏㄴㅂㅗㅂㅗㅈㅗㅏㄱㅗㅏㄴㄷㅗ ㅅㅓㅇㅁㅕㅇㅇㅡㄹ ㄴㅐㄱㅗ “ㅌㅡㄹㅓㅁㅍㅡ ㄷㅐㅌㅗㅇㄹㅕㅇㅇㅡㄴ ㅍㅔㄴㅌㅏㄱㅗㄴㅇㅔ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㄱㅏㅁㅊㅜㄱ ㅇㅗㅂㅅㅕㄴㅇㅡㄹ ㅈㅜㄴㅂㅣㅎㅏㄹㅏㄴㅡㄴ ㅈㅣㅅㅣㄹㅡㄹ ㄴㅐㄹㅣㄴ ㅂㅏ ㅇㅓㅂㅅㄷㅏ”ㄱㅗ ㅂㅏㄴㅂㅏㄱㅎㅐㅆㄷㅏ.
ㅊㅓㅇㅇㅗㅏㄷㅐㅇㅗㅏ ㅂㅐㄱㅇㅏㄱㄱㅗㅏㄴㅇㅣ ㄷㅗㅇㅅㅣㅇㅔ ㅃㅏㄹㅡㄱㅔ ㅇㅜㅁㅈㅣㄱㅇㅣㄴ ㄱㅓㅅㅇㅡㄴ ㅂㅜㄱ-ㅁㅣ ㅈㅓㅇㅅㅏㅇㅎㅗㅣㄷㅏㅁㅇㅡㄹ ㅇㅏㅍㄷㅜㄱㅗ ㅈㅜㅎㅏㄴㅁㅣㄱㅜㄴ ㅊㅓㄹㅅㅜ ㄸㅗㄴㅡㄴ ㄱㅏㅁㅊㅜㄱ ㅁㅜㄴㅈㅔㄱㅏ ‘ㅇㅗㅏㄴㅈㅓㄴㅎㅏㄴ ㅂㅣㅎㅐㄱㅎㅗㅏ’ ㄴㅗㄴㅇㅡㅣㅇㅔ ㅇㅖㄱㅣㅊㅣ ㅇㅏㄴㅎㅇㅡㄴ ㅇㅕㅇㅎㅑㅇㅇㅡㄹ ㅈㅜㄹ ㅅㅜ ㅇㅣㅆㄷㅏㄴㅡㄴ ㅍㅏㄴㄷㅏㄴㅇㅔ ㄸㅏㄹㅡㄴ ㄱㅓㅅㅇㅣㄷㅏ. ㅎㅏㅈㅣㅁㅏㄴ ㅇㅣㄹㄱㅏㄱㅇㅔㅅㅓㄴ NYT ㅂㅗㄷㅗㄹㅡㄹ ㄷㅏㄴㅅㅜㄴㅎㅏㄴ ‘ㅇㅗㅂㅗ ㅎㅐㅍㅡㄴㅣㅇ’ㅇㅡㄹㅗ ㅂㅗㄱㅣㄴ ㅇㅓㄹㅕㅂㄷㅏㄴㅡㄴ ㅁㅏㄹㄷㅗ ㅇㅣㅆㄷㅏ.`));

/*
청와대와 백악관이 북-미 정상회담을 앞두고 나온 ‘트럼프발(發) 주한미군 감축설’에 대해 긴급 진화에 나섰다.
도널드 트럼프 미 대통령이 주한미군의 감축 검토를 지시했다는 뉴욕타임스(NYT) 보도에 대해 청와대는 4일 백악관에 확인한 결과 사실무근이라고 밝혔고, 존 볼턴 백악관 국가안보보좌관도 성명을 내고 “트럼프 대통령은 펜타곤에 주한미군 감축 옵션을 준비하라는 지시를 내린 바 없다”고 반박했다.
청와대와 백악관이 동시에 빠르게 움직인 것은 북-미 정상회담을 앞두고 주한미군 철수 또는 감축 문제가 ‘완전한 비핵화’ 논의에 예기치 않은 영향을 줄 수 있다는 판단에 따른 것이다. 하지만 일각에선 NYT 보도를 단순한 ‘오보 해프닝’으로 보긴 어렵다는 말도 있다.
 */


```
