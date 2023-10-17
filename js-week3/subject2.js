var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
            // 객체 this 바인딩 : 프린시스 은가누
        }
    },

    getName: function () {
        return this.fullname;
        //객체 this 바인딩 : 존 존스
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
        // 객체 this 바인딩 : 시릴 가네 
    },

    getLastName: (function () {
        return this.fullname.split(' ')[1];
        // ?? 모르겠습니다.. 
    })()

}
// fighter.opponent.getFullname은 fighter안의 opponent 안이라고 찍어줬기 때문에 프란시스 은가누를 지목한다
// fighter.getName은 fighter의 객체 존존스를 지목한다
// fighter.getFirstName은  화살표 함수를 사용하여 상위 객체를 this바인딩 하여 시릴가네를 지목한다

// 따라서  not 은가누 vs 존존스
// 존존스 vs 시릴가네 의 대결 구도로 결과가 나타난다.
console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);