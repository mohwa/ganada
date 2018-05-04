
/**
 * Ganada 클래스
 */

// 한글 음절: https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_%EC%9D%8C%EC%A0%88

// 초성
const CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성
const JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'];
// 종성
const JONG = ['', 'ㄱ', 'ㄲ', ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'], ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 초성 원본
const CHO_ATOM = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성 원본
const JUNG_ATOM = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
// 종성 원본
const JONG_ATOM = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 서로 다른 두 개의 자음으로 구성된 복합 자음
const COMPLEX_CONSONANTS = [
    ['ㄱ','ㅅ','ㄳ'],
    ['ㄴ','ㅈ','ㄵ'],
    ['ㄴ','ㅎ','ㄶ'],
    ['ㄹ','ㄱ','ㄺ'],
    ['ㄹ','ㅁ','ㄻ'],
    ['ㄹ','ㅂ','ㄼ'],
    ['ㄹ','ㅅ','ㄽ'],
    ['ㄹ','ㅌ','ㄾ'],
    ['ㄹ','ㅍ','ㄿ'],
    ['ㄹ','ㅎ','ㅀ'],
    ['ㅂ','ㅅ','ㅄ']
];

// 서로 다른 두 개의 자음으로 이루어진 받침(원본)
const COMPLEX_CONSONANTS_ATOM = [
    'ㄳ',
    'ㄵ',
    'ㄶ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅄ'
];

// 서로 다른 두 개의 모음으로 구성된 복합 모음
const COMPLEX_VOWELS = [
    ['ㅗ','ㅏ','ㅘ'],
    ['ㅗ','ㅐ','ㅙ'],
    ['ㅗ','ㅣ','ㅚ'],
    ['ㅜ','ㅓ','ㅝ'],
    ['ㅜ','ㅔ','ㅞ'],
    ['ㅜ','ㅣ','ㅟ'],
    ['ㅡ','ㅣ','ㅢ']
];


const Ganada = {
    isComplete: _isComplete,
    isCho: _isCho,
    isJung: _isJung,
    isJong: _isJong,
    disassemble: _disassemble,
    assemble: _assemble
};

/**
 *
 * 전달받은 문자(열)이 완성된 문자인지 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isComplete(v = ''){

    if (typeof v !== 'string') return false;

    let ret = true;

    const startCharCode = parseInt('0xAC00', 16);
    const endCharCode = parseInt('0xD7A3', 16);

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        const charCode = char.charCodeAt(0);

        if (!(charCode >= startCharCode && charCode <= endCharCode)){
            ret = false;
            break;
        }
    }

    return ret;
}


/**
 *
 * 전달받은 문자(열)의 초성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isCho(v = ''){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (CHO_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }
}

/**
 *
 * 전달받은 문자(열)의 중성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJung(v = ''){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (JUNG_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }
}

/**
 *
 * 전달받은 문자(열)의 종성 여부를 반환한다.
 *
 * @param v
 * @returns {boolean}
 * @private
 */
function _isJong(v = ''){

    if (typeof v !== 'string') return false;

    let ret = true;

    v = v.split('');

    const length = v.length;
    for (let i = 0; i < length; i++){

        const char = v[i];

        if (JONG_ATOM.indexOf(char) === -1){
            ret = false;
            break;
        }
    }
}

/**
 *
 * 전달받은 문자(열)들을 자음/모음으로 분해시킨다.
 *
 * @param v
 * @private
 */
function _disassemble(v = ''){

    let ret = '';

    v = v.split('');

    v.forEach(vv => {

        if (_isComplete(vv)){

            const jamo = _JAMODisassemble(vv);

            const cho = CHO[jamo.choIndex];
            const jung = _getDividedChar(JUNG, jamo.jungIndex);
            const jong = _getDividedChar(JONG, jamo.jongIndex);

            ret += `${cho}${jung}${jong}`;
        }
        else{
            ret += vv;
        }
    });

    return ret;


    /**
     * 합성된 문자(자음/자음, 모음/모음)를 분리시켜 반환한다.
     *
     * @param o
     * @param idx
     * @returns {string}
     * @private
     */
    function _getDividedChar(o = [], idx = -1){

        let ret = '';

        if (o[idx] && o[idx].constructor === Array){
            ret = `${o[idx][0]}${o[idx][1]}`;
        }
        else{
            ret = o[idx] || '';
        }

        return ret;
    }
}

/**
 *
 * 전달받은 자음/모음 문자들을 조립한다.
 *
 * @param v
 * @param step
 * @param ret
 * @returns {*}
 * @private
 */
function _assemble(v = '', step = 1, ret = ''){

    v = typeof v === 'string' ? v.split('') : v;

    // 분리자
    let separator = '';
    // 분리자 텍스트
    const separatorText = '__ᴥᴥ__';
    // 자음/모음 구분 패턴
    const jamoPTN = /[^ㄱ-ㅎㅏ-ㅣ]/g;

    if (v.length){

        // 첫번째 문자
        let char1 = v[0];
        // 두번째 문자
        let char2 = v[1];
        // 세번째 문자
        let char3 = v[2];

        // 초성 분리
        if (step === 1){

            // 합성된 자음
            let complexConsonants = '';

            // 다음 두 번째/세 번째 문자가 각각, 초/중성이 아닐 경우(자음 + 모음 조합이 아닐경우)만, 두개의 자음을 합성시킨다.
            if (!(_isCho(char2) && _isJung(char3))){
                complexConsonants = _getComplexConsonants(char1, char2);
            }

            // 두개의 자음이 합성된 경우(ㄳ, ㄵ 등)
            if (complexConsonants){

                v.shift();
                v.shift();

                ret += complexConsonants;
            }
            else{
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 자음 뒤에, 바로 자음 문자가 온 경우(ㄱㅇ, ㄱㅎ 등)
            if (_isCho(char1)){

                separator = separatorText;
                step = 1;
            }

            // 자음 뒤에 모음 문자가 온 경우
            if (_isJung(char1)){

                // 추가된 이전 (첫번째)문자
                //let prevChar = _prevFirstChar(ret);

                // 추가된 이전 문자가 합성 자음일 경우(ㄳ, ㄵ 등)
                //if (complexConsonants){
                //    console.log('da');
                //    separator = separatorText;
                //}

                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 중성 분리
        if (step === 2){

            // 합성된 모음
            const complexVowel = _getComplexVowels(char1, char2);

            if (complexVowel){

                v.shift();
                v.shift();

                ret += complexVowel;
            }
            else{
                v.shift();
                ret += char1;
            }

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];
            // 기존 배열에서, 이전 문자들이 삭제된 이후의 두번째 문자 요소.
            char2 = v[1];

            if (_isCho(char1)){

                // 다음 다음 문자가 초성인 경우(ㄱ ㅅ)
                if (_isCho(char2)){
                    step = 1;
                }

                // 다음 다음 문자가 모음인 경우(ㄱ ㅏ)
                if (_isJung(char2)){
                    separator = separatorText;
                    step = 1;
                }
            }

            // 다음 문자가 모음인 경우(모음이 두번 연속 나온 경우)
            if (_isJung(char1)){

                separator = separatorText;
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                separator = separatorText;
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 종성 분리
        if (step === 3){

            // 합성된 자음
            const complexConsonants = _getComplexConsonants(char1, char2);

            if (complexConsonants){

                v.shift();
                v.shift();

                ret += complexConsonants;
            }
            else{

                v.shift();
                ret += char1;
            }

            // 기존 분리자
            separator = separatorText;

            // 기존 배열에서, 이전 문자들이 삭제된 이후의 첫번째 문자 요소.
            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)){
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)){
                step = 2;
            }

            // 다음 문자가 한글이 자음/모음이 아닌 경우
            if (jamoPTN.test(char1)){
                step = 4;
            }

            ret += separator;

            return _assemble(v, step, ret);
        }

        // 그외에 모든 문자(숫자, 영어, 특수문자 등)
        if (step === 4){

            v.shift();
            ret += char1;

            // 분리자
            separator = separatorText;

            char1 = v[0];

            // 다음 문자가 자음인 경우
            if (_isCho(char1)){
                step = 1;
            }

            // 다음 문자가 모음인 경우
            if (_isJung(char1)){
                step = 2;
            }

            if (jamoPTN.test(char1)){
                step = 4;
            }

            ret += separator;
            return _assemble(v, step, ret);
        }
    }

    return _join(ret);


    /**
     *
     * (그룹별로)정리된 모든 문자를 최종 조립한다.
     *
     * @param v
     * @returns {string}
     * @private
     */
    function _join(v = ''){

        const ret = [];

        v.split(separatorText).forEach(vv => {

            const cho = vv[0];
            const jung = vv[1];
            const jong = vv[2];

            // 초/중/종성이 모두 존재하는 경우
            if (cho && jung && jong){
                ret.push(_JAMOAssemble(cho, jung, jong));
            }
            else if (cho && jung){
                // 초/중성만 존재하는 경우
                ret.push(_JAMOAssemble(cho, jung));
            }
            else{
                // 조합 되지않은 모든 문자인 경우
                ret.push(cho);
            }
        });

        return ret.join('');
    }

    ///**
    // *
    // * @param v
    // * @returns {*}
    // * @private
    // */
    //function _prevFirstChar(v = ''){
    //
    //    let ret;
    //
    //    v = v.split('');
    //
    //    let length = v.length;
    //
    //    while (length--){
    //
    //        if (v[length] === separatorText) break;
    //
    //        ret = v[length];
    //    }
    //
    //    return ret;
    //}


    /**
     *
     * 합성된 자음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexConsonants(char1 = '', char2 = ''){

        let ret = '';

        COMPLEX_CONSONANTS.forEach(v => {

            if (v[0] === char1 && v[1] === char2){
                ret = v[2];
            }
        });

        return ret;
    }


    /**
     *
     * 합성된 모음을 반환한다.
     *
     * @param char1
     * @param char2
     * @returns {string}
     * @private
     */
    function _getComplexVowels(char1 = '', char2 = ''){

        let ret = '';

        COMPLEX_VOWELS.forEach(v => {

            if (v[0] === char1 && v[1] === char2){
                ret = v[2];
            }
        });

        return ret;
    }
}

/**
 *
 * 초/중/종 문자를 조합시킨다.
 *
 * @param cho
 * @param jung
 * @param jong
 * @returns {string}
 * @private
 */
function _JAMOAssemble(cho = '', jung = '', jong = ''){

    let ret = '';

    const choIndex  = CHO_ATOM.indexOf(cho);
    const jungIndex = JUNG_ATOM.indexOf(jung);
    const jongIndex = JONG_ATOM.indexOf(jong);

    const baseHash = 0xAC00;

    let charCode;

    if (choIndex > -1 && jungIndex > -1 && jongIndex > -1){
        // 초/중/종 조합
        charCode = baseHash + (choIndex * 21 + jungIndex) * 28 + jongIndex;
    }

    if (charCode){
        // 16진수 코드값을 문자로 변환한다.
        ret = String.fromCharCode(charCode);
    }

    return ret;
}

/**
 *
 * 문자를 초/중/종 문자로 분해한다.
 *
 * @param v
 * @returns {{cho: (string|string), jung: (string|string), jong: (string|string), choIndex: Number, jungIndex: Number, jongIndex: Number}}
 * @constructor
 */
function _JAMODisassemble(v = ''){

    /**
        초성 중성 종성 분리 하기

        유니코드 한글은 0xAC00 으로부터
        초성 19개, 중성 21개, 종성 28개로 이루어지고, 이들을 조합한 11,172개의 문자를 갖는다.

        한글코드의 값(가) = ((초성(0) * 21) + 중성(0)) * 28 + 종성(0) + 0xAC00(0xAC00은 'ㄱ'의 코드값)

        따라서 다음과 같은 계산 식이 구해진다. 유니코드 한글 문자 코드 값이 X일 때,

        초성 = ((X - 0xAC00) / 28) / 21
        중성 = ((X - 0xAC00) / 28) % 21
        종성 = (X - 0xAC00) % 28

        이 때 초성, 중성, 종성의 값은 각 소리 글자의 코드값이 아니라
        이들이 각각 몇 번째 문자인가를 나타내기 때문에 다음과 같이 다시 처리한다.

        초성문자코드 = 초성 + 0x1100 //('ㄱ') => 시작 메모리 주소값이, 위에서 구한 자리값을 더하면, 구하고자하는 메모리 주소값이 된다.
        중성문자코드 = 중성 + 0x1161 // ('ㅏ')
        종성문자코드 = 종성 + 0x11A8 - 1 // (종성이 없는 경우가 있으므로 1을 뺌)
    **/

    // `0xAC00` 16진수값은 유니코드 `가` 값이 가지는, 메모리 주소이다.(`0xAC01(각)`, `0xAC01(갂)`...)
    v = v.charCodeAt(0) - parseInt('0xAC00', 16);

    // 초성 요소의 자리 수
    const choIndex = parseInt((v / (21 * 28)), 10);

    // 중성 요소의 자리 수
    const jungIndex = parseInt(((v / 28) % 21), 10);

    // 종성 요소의 자리 수
    const jongIndex = parseInt(v % 28, 10);


    // `0x1100` 16진수값은 초성 `ㄱ` 이 가지는, 메모리 주소이다.(0x1100(ㄱ), 0x1101(ㄲ), 0x1102(ㄴ)...)
    const cho = String.fromCharCode(choIndex + parseInt('0x1100', 16));
    // `0x1161` 16진수값은 중성 `ㅏ` 가지는, 메모리 주소이다.(0x1161(ㅏ), 0x1162(ㅐ), 0x1162(ㅑ)...)
    const jung = String.fromCharCode(jungIndex + parseInt('0x1161', 16));
    // `0x11A8` 16진수값은 종성 `ㄱ` 이 가지는, 메모리 주소이다.(0x11A8(ㄱ), 0x11A9(ㄲ), 0x11AA(ㄳ)...)
    const jong = String.fromCharCode(jongIndex + parseInt('0x11A8', 16) - 1);

    return {
        cho: cho || '',
        jung: jung || '',
        jong: jong || '',
        choIndex,
        jungIndex,
        jongIndex
    };
}

module.exports = Ganada;


