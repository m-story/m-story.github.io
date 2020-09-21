/*

type 사냥 1, 수집 2, 전달 3, 수리 4

*/

var weekly_quest = {
    // 헤이븐
    haven: [        
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '2',
            title: '빨간색 칩셋 조각 수집',
            contents_place: '기계무덤 입구, 기계무덤 언덕1',
            contents_monster: '개조 당한 겁쟁이 안드로이드',
            contents_item: '빨간색 칩셋 조각 50개',
            clear_npc: '헤이븐 > 외눈이',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '2',
            title: '녹색 칩셋 조각 수집',
            contents_place: '기계무덤 언덕1, 기계무덤 언덕2',
            contents_monster: '개조 당한 실패작 안드로이드',
            contents_item: '녹색 칩셋 조각 50개',
            clear_npc: '헤이븐 > 외눈이',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '2',
            title: '파란색 칩셋 조각 수집',
            contents_place: '기계무덤 언덕2, 기계무덤 공터',
            contents_monster: '개조 당한 레이저 안드로이드',
            contents_item: '파란색 칩셋 조각 20개',
            clear_npc: '헤이븐 > 외눈이',
            difficult: '★★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '2',            
            title: '안테나 조각 레드 수집',
            contents_place: '기계무덤 언덕4',
            contents_monster: '사냥개 로봇 레드',
            contents_item: '안테나 조각 레드 30개',
            clear_npc: '헤이븐 > 외눈이',
            difficult: '★★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '1',
            title: '사냥개 로봇 레드 처치',
            contents_place: '기계무덤 언덕4',
            contents_monster: '사냥개 로봇 레드 200마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '1',
            title: '수리로봇 처치',
            contents_place: '스카이라인2, 블랙헤븐 갑판1, 블랙헤븐 입구',
            contents_monster: '수리 로봇 300마리',
            contents_item: '',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '1',
            title: '강화된 외부 경비 로봇 처치',
            contents_place: '블랙헤븐 입구, 블랙헤븐 갑판2, 블랙헤븐 갑판3',
            contents_monster: '강화된 외부 경비 로봇 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '헤이븐',
            type: '1',
            title: '강화된 내부 경비 로봇 처치',
            contents_place: '블랙헤븐 교차로1, 블랙헤븐 내부 미로1',
            contents_monster: '강화된 내부 경비 로봇 200마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★'
        },
        // 기계무덤
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '개조 당한 겁쟁이 안드로이드 해방',
            contents_place: '기계무덤 입구, 기계무덤 언덕1',
            contents_monster: '개조 당한 겁쟁이 안드로이드 300마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '개조 당한 실패작 안드로이드 해방',
            contents_place: '기계무덤 언덕1, 기계무덤 언덕2',
            contents_monster: '개조 당한 실패작 안드로이드 300마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '개조 당한 레이저 안드로이드 해방',
            contents_place: '기계무덤 언덕2, 기계무덤 공터',
            contents_monster: '개조 당한 레이저 안드로이드 200마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '4',
            title: '부서진 건물 수리',
            contents_place: '',
            contents_monster: '추적자 안드로이드 레드',
            contents_item: '안드로이드 스코프 레드 50개',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '2',
            title: '안드로이드 스코프 레드 수집',
            contents_place: '',
            contents_monster: '추적자 안드로이드 레드',
            contents_item: '안드로이드 스코프 레드 50개',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '추적자 안드로이드 레드 처치',
            contents_place: '기계무덤 언덕2, 기계무덤 공터',
            contents_monster: '추적자 안드로이드 레드 300마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },        
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '3',
            title: '안드로이드 스코프 블루 전달',
            contents_place: '',
            contents_monster: '추적자 안드로이드 블루',
            contents_item: '안드로이드 스코프 블루 30개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '추적자 안드로이드 블루 처치',
            contents_place: '기계무덤 언덕2, 기계무덤 공터',
            contents_monster: '추적자 안드로이드 블루 200마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '3',
            title: '안테나 조각 블루 전달',
            contents_place: '',
            contents_monster: '사냥개 로봇 블루',
            contents_item: '안테나 조각 블루 30개',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★★★'
        },        
        {
            place_code: '2',
            place_name: '기계무덤',
            type: '1',
            title: '사냥개 로봇 블루 처치',
            contents_place: '기계무덤 언덕5',
            contents_monster: '사냥개 로봇 블루 150마리',
            contents_item: '',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★★★'
        },        
        // 스카이라인
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '2',
            title: '파이프 조각 수집',
            contents_place: '',
            contents_monster: '수리로봇',
            contents_item: '파이프 조각 50개',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '1',
            title: '미사일 안드로이드 레드 처치',
            contents_place: '',
            contents_monster: '미사일 안드로이드 레드 12마리',
            contents_item: '',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '3',
            title: '불발탄 레드 전달',
            contents_place: '',
            contents_monster: '미사일 안드로이드 레드',
            contents_item: '불발탄 레드 2개',
            clear_npc: '기계무덤 언덕5 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '1',
            title: '개조 당한 안드로이드 수송차 해방',
            contents_place: '',
            contents_monster: '개조 당한 안드로이드 수송차 100마리',
            contents_item: '',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★★★★★'
        },
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '3',
            title: '감옥 열쇠 조각 전달',
            contents_place: '',
            contents_monster: '개조 당한 안드로이드 수송차',
            contents_item: '감옥 열쇠 조각 10개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '1',
            title: '개조 당한 허세로이드 처치',
            contents_place: '',
            contents_monster: '개조 당한 허세로이드 100마리',
            contents_item: '',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★★★★★'
        },        
        {
            place_code: '3',
            place_name: '스카이라인',
            type: '4',
            title: '부서진 건물 수리',
            contents_place: '',
            contents_monster: '개조 당한 허세로이드',
            contents_item: '거대한 강철 조각 10개',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        // 블랙헤븐 갑판
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '1',
            title: '수리로봇 처치',
            contents_place: '',
            contents_monster: '수리로봇 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '1',
            title: '미사일 안드로이드 블루 처치',
            contents_place: '',
            contents_monster: '미사일 안드로이드 블루 12마리',
            contents_item: '',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '3',
            title: '불발탄 블루 전달',
            contents_place: '',
            contents_monster: '미사일 안드로이드 블루',
            contents_item: '불발탄 블루 2개',
            clear_npc: '스카이라인1 > 정찰중인 로봇',
            difficult: '★'
        },        
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '2',
            title: '강철 드릴 수집',
            contents_place: '',
            contents_monster: '게오르크',
            contents_item: '강철 드릴 2개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '1',
            title: '게오르크 처치',
            contents_place: '',
            contents_monster: '게오르크 8마리',
            contents_item: '',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '4',
            place_name: '블랙헤븐 갑판',
            type: '3',
            title: '외부용 사이렌 전달',
            contents_place: '',
            contents_monster: '강화된 외부 경비 로봇',
            contents_item: '외부용 사이렌 50개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★'
        },
        // 블랙헤븐 내부
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '2',
            title: '내부용 사이렌 수집',
            contents_place: '',
            contents_monster: '강화된 내부 경비 로봇',
            contents_item: '내부용 사이렌 30개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '개조 당한 거대 안드로이드 처치',
            contents_place: '',
            contents_monster: '개조 당한 거대 안드로이드 12마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '4',
            title: '부서진 건물 수리',
            contents_place: '',
            contents_monster: '개조 당한 거대 안드로이드',
            contents_item: '거대 전구 2개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '고철 제네로이드 A 처치',
            contents_place: '',
            contents_monster: '고철 제네로이드 A 150마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '고철 제네로이드 B 처치',
            contents_place: '',
            contents_monster: '고철 제네로이드 B 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '3',
            title: '고철 제네로이드 칩셋 전달',
            contents_place: '',
            contents_monster: '고철 제네로이드 A',
            contents_item: '고철 제네로이드 칩셋 20개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '2',
            title: '고철 제조넘버판 수집',
            contents_place: '',
            contents_monster: '고철 제네로이드 B',
            contents_item: '고철 제조넘버판 30개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '강철 제네로이드 A 처치',
            contents_place: '',
            contents_monster: '강철 제네로이드 A 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '강철 제네로이드 B 처치',
            contents_place: '',
            contents_monster: '강철 제네로이드 B 100마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '3',
            title: '강철 제네로이드 칩셋 전달',
            contents_place: '',
            contents_monster: '강철 제네로이드 A',
            contents_item: '강철 제네로이드 칩셋 50개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '2',
            title: '강철 제조넘버판 수집',
            contents_place: '',
            contents_monster: '강철 제네로이드 B',
            contents_item: '강철 제조넘버판 15개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★★★★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '합금 제네로이드 A 처치',
            contents_place: '',
            contents_monster: '합금 제네로이드 A 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '1',
            title: '합금 제네로이드 B 처치',
            contents_place: '',
            contents_monster: '합금 제네로이드 B 300마리',
            contents_item: '',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '3',
            title: '합금 제네로이드 칩셋 전달',
            contents_place: '',
            contents_monster: '합금 제네로이드 A',
            contents_item: '합금 제네로이드 칩셋 50개',
            clear_npc: '블랙헤븐 입구 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '5',
            place_name: '블랙헤븐 내부',
            type: '2',
            title: '합금 제조넘버판 수집',
            contents_place: '',
            contents_monster: '합금 제네로이드 B',
            contents_item: '합금 제조넘버판 50개',
            clear_npc: '블랙헤븐 교차로2 > 정찰중인 로봇',
            difficult: '★'
        },
        {
            place_code: '6',
            place_name: '특수의뢰(~205)',
            type: '1',
            title: '추적자 안드로이드 레드 처치',
            contents_place: '',
            contents_monster: '추적자 안드로이드 레드 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '7',
            place_name: '특수의뢰(206~210)',
            type: '1',
            title: '개조 당한 허세로이드 처치',
            contents_place: '',
            contents_monster: '개조 당한 허세로이드 100마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★★'
        },
        {
            place_code: '8',
            place_name: '특수의뢰(211~215)',
            type: '1',
            title: '수리로봇 처치',
            contents_place: '',
            contents_monster: '수리로봇 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '9',
            place_name: '특수의뢰(216~)',
            type: '1',
            title: '강철 제네로이드 A 처치',
            contents_place: '',
            contents_monster: '강철 제네로이드 A 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
    ],




    // 타락한 세계수
    tree: [
        // 하단
        {
            place_code: '1',
            place_name: '세계수 하단부',
            type: '1',
            title: '오염된 수액 처치',
            contents_place: '',
            contents_monster: '오염된 수액 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '세계수 하단부',
            type: '1',
            title: '부패한 수액 처치',
            contents_place: '',
            contents_monster: '오염된 수액 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '세계수 하단부',
            type: '1',
            title: '수액 처치',
            contents_place: '',
            contents_monster: '오염된 수액, 부패한 수액 각 100마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        // 중단
        {
            place_code: '2',
            place_name: '세계수 중단부',
            type: '2',
            title: '칼 수집',
            contents_place: '',
            contents_monster: '검병',
            contents_item: '마족의 칼 40개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '세계수 중단부',
            type: '1',
            title: '검병 처치',
            contents_place: '',
            contents_monster: '검병 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '세계수 중단부',
            type: '2',
            title: '도끼 수집',
            contents_place: '',
            contents_monster: '도끼병',
            contents_item: '마족의 도끼 40개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '세계수 중단부',
            type: '1',
            title: '도끼병 처치',
            contents_place: '',
            contents_monster: '도끼병 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        // 상단
        {
            place_code: '3',
            place_name: '세계수 상단부',
            type: '2',
            title: '이빨 수집',
            contents_place: '',
            contents_monster: '늑대기수',
            contents_item: '마족늑대의 이빨 20개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '3',
            place_name: '세계수 상단부',
            type: '1',
            title: '늑대기수 처치',
            contents_place: '',
            contents_monster: '늑대기수',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '3',
            place_name: '세계수 상단부',
            type: '2',
            title: '방패 수집',
            contents_place: '',
            contents_monster: '방패병',
            contents_item: '마족의 방패 20개',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '세계수 상단부',
            type: '1',
            title: '방패병 처치',
            contents_place: '',
            contents_monster: '방패병 100마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
    ],


    // 크리티아스
    critias: [
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '고독한 사냥',
            contents_place: '',
            contents_monster: '얼어붙은 고독 250마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '공포스런 사냥',
            contents_place: '',
            contents_monster: '얼어붙은 공포 250마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '분노에 찬 사냥',
            contents_place: '',
            contents_monster: '얼어붙은 분노 250마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '불안한 사냥',
            contents_place: '',
            contents_monster: '얼어붙은 불안 250마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '허무한 사냥',
            contents_place: '',
            contents_monster: '얼어붙은 허무 250마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어붙은 고독 진압',
            contents_place: '',
            contents_monster: '얼어붙은 고독 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어붙은 공포 진압',
            contents_place: '',
            contents_monster: '얼어붙은 공포 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어붙은 분노 진압',
            contents_place: '',
            contents_monster: '얼어붙은 분노 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어붙은 불안 진압',
            contents_place: '',
            contents_monster: '얼어붙은 불안 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어붙은 허무 진압',
            contents_place: '',
            contents_monster: '얼어붙은 허무 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '고독의 검날 수집',
            contents_place: '',
            contents_monster: '얼어붙은 고독 250마리 퇴치',
            contents_item: '부러진 칼날(청) 150개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '공포의 손잡이 수집',
            contents_place: '',
            contents_monster: '얼어붙은 공포 250마리 퇴치',
            contents_item: '떨어진 손잡이(청) 150개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '분노의 자루 수집',
            contents_place: '',
            contents_monster: '얼어붙은 분노 250마리 퇴치',
            contents_item: '망가진 자루(청) 150개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '불안의 활대 수집',
            contents_place: '',
            contents_monster: '얼어붙은 불안 250마리 퇴치',
            contents_item: '부서진 활대(청) 150개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '허무의 장식 수집',
            contents_place: '',
            contents_monster: '얼어붙은 허무 250마리 퇴치',
            contents_item: '깨어진 장식(청) 150개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '고독의 부러진 검날 수집',
            contents_place: '',
            contents_monster: '얼어붙은 고독 300마리 퇴치',
            contents_item: '부러진 칼날(청) 200개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '공포의 떨어진 손잡이 수집',
            contents_place: '',
            contents_monster: '얼어붙은 공포 300마리 퇴치',
            contents_item: '떨어진 손잡이(청) 200개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '분노의 망가진 자루 수집',
            contents_place: '',
            contents_monster: '얼어붙은 분노 300마리 퇴치',
            contents_item: '망가진 자루(청) 200개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '불안의 부서진 활대 수집',
            contents_place: '',
            contents_monster: '얼어붙은 불안 300마리 퇴치',
            contents_item: '부서진 활대(청) 200개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '허무의 깨어진 장식 수집',
            contents_place: '',
            contents_monster: '얼어붙은 허무 300마리 퇴치',
            contents_item: '깨어진 장식(청) 200개',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '차가운 칼날의 소리',
            contents_place: '',
            contents_monster: '얼어붙은 고독/공포 각 150마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '1',
            title: '얼어버린 무기의 굉음',
            contents_place: '',
            contents_monster: '얼어붙은 분노/불안/허무 각 150마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '얼어붙은 기운 수집',
            contents_place: '',
            contents_monster: '얼어붙은 고독/공포/분노/불안/허무',
            contents_item: '얼어붙은 기운 200개',
            clear_npc: '',
            difficult: '★'
        },
        {
            place_code: '1',
            place_name: '이자크',
            type: '2',
            title: '아직은 얼지않은 숲길',
            contents_place: '',
            contents_monster: '얼어붙은 고독/공포/분노/불안/허무 각 50마리 퇴치',
            contents_item: '얼어붙은 기운 100개',
            clear_npc: '',
            difficult: '★★'
        },
        // 도스토프
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 고독 진압',
            contents_place: '',
            contents_monster: '타오르는 고독 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 공포 진압',
            contents_place: '',
            contents_monster: '타오르는 공포 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 분노 진압',
            contents_place: '',
            contents_monster: '타오르는 분노 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 불안 진압',
            contents_place: '',
            contents_monster: '타오르는 불안 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 허무 진압',
            contents_place: '',
            contents_monster: '타오르는 허무 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '타오르는 무기 진압',
            contents_place: '',
            contents_monster: '타오르는 고독/공포/분노/불안/허무 각 100마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '불길하게 타오르는 무기',
            contents_place: '',
            contents_monster: '타오르는 고독/공포/분노/불안/허무 각 100마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '2',
            title: '타오르는 기운 수집',
            contents_place: '',
            contents_monster: '타오르는 고독/공포/분노/불안/허무',
            contents_item: '타오르는 기운 300개',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '2',
            title: '타오르는 무기와 기운 수집',
            contents_place: '',
            contents_monster: '타오르는 고독/공포/분노/불안/허무 각 100마리 퇴치',
            contents_item: '타오르는 기운 300개',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '배후의 타락한 중급 마법사',
            contents_place: '',
            contents_monster: '타락한 중급 마법사 400마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '1',
            title: '배후의 타락한 중급 마법사 진압',
            contents_place: '',
            contents_monster: '타락한 중급 마법사 450마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★'
        },
        {
            place_code: '2',
            place_name: '도스토프',
            type: '2',
            title: '중급 마법사의 옷자락 수집',
            contents_place: '',
            contents_monster: '타락한 중급 마법사 400마리 퇴치',
            contents_item: '중급 마법사의 옷자락 250개',
            clear_npc: '',
            difficult: '★★★'
        },
        // 브룬델
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 고독 진압',
            contents_place: '',
            contents_monster: '스며드는 고독 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 공포 진압',
            contents_place: '',
            contents_monster: '스며드는 공포 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 분노 진압',
            contents_place: '',
            contents_monster: '스며드는 분노 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 불안 진압',
            contents_place: '',
            contents_monster: '스며드는 불안 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 허무 진압',
            contents_place: '',
            contents_monster: '스며드는 허무 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 칼날',
            contents_place: '',
            contents_monster: '스며드는 고독/공포 각 300마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '스며드는 무기의 굉음',
            contents_place: '',
            contents_monster: '스며드는 분노/불안/허무 각 200마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '2',
            title: '불길한 기운',
            contents_place: '',
            contents_monster: '얼어붙은/타오르는/스며드는 몬스터',
            contents_item: '얼어붙은/타오르는/스며드는 기운 각 200개',
            clear_npc: '',
            difficult: '★★★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '1',
            title: '배후의 타락한 상급 마법사',
            contents_place: '',
            contents_monster: '타락한 상급 마법사 600마리',
            contents_item: '',
            clear_npc: '',
            difficult: '★★★'
        },
        {
            place_code: '3',
            place_name: '브룬델',
            type: '2',
            title: '배후의 타락한 마법사들 진압',
            contents_place: '',
            contents_monster: '타락한 하/중/상급 마법사 각 200마리 퇴치',
            contents_item: '하/중/상급 마법사의 옷자락 각 100개',
            clear_npc: '',
            difficult: '★★★★★'
        },
    ]
}