var soul = [
    'murgoth',
    'queen',
    'vellum',
    'magnus',
    'cygnus',
    'lotus',
    'demian',
    'lucid',
    'will',
    'darknell',
    'verus_hilla',
    
];

// skill_type: '1' 소환형, '2' 스킬형
var soul_obj = {
    murgoth: {
        tier: '1',
        ko_name: '무르무르',
        en_name: 'murgoth',        
        skill1_type: '1',
        skill1_detail: '120초간 데미지 1500%의 무르무르 소환. 재사용 대기시간 300초',
        skill2_type: '1',
        skill2_detail: '180초간 데미지 1500%의 무르무르 소환. 재사용 대기시간 300초',        
        img1: [
            'murgoth1.gif',
            'murgoth1-1.gif',
            'murgoth1-2.gif',
        ],
        img2: [
            'murgoth2.gif',
            'murgoth2-1.gif',
            'murgoth2-2.gif',
        ]
        
    },
    queen: {
        tier: '1',
        ko_name: '블러디퀸',
        en_name: 'queen',
        skill1_type: '4',
        skill1_detail: '100/120초간 블러디퀸의 버프 랜덤 제공. 재사용 대기시간 150초',
        skill1_detail2: [
            '1. 피의 축복 - 데미지의 10%를 HP로 흡수',
            '2. 환희의 축복 - 공격속도 1단계 증가',
            '3. 분노의 축복 - 공격력/마력 30 증가',
            '4. 눈물의 축복 - 방어력 50 증가, MaxHP 10% 증가'
        ],
        skill2_type: '1',
        skill2_detail: '90초간 데미지 1500/1800%의 블러디퀸 소환. 재사용 대기시간 150초',
        skill2_detail2: [
            '유혹',
            '환희',
            '분노',
            '슬픔'
        ],
        img1: [
            'queen1.gif',
            'queen1-1.gif',
        ],
        img2: [
            'queen2.gif',
            'queen2-11.gif',
            'queen2-12.gif',
            'queen2-21.gif',
            'queen2-22.gif',
            'queen2-31.gif',
            'queen2-32.gif',
            'queen2-41.gif',
            'queen2-42.gif'
        ]
        
    },
    vellum: {
        tier: '1',
        ko_name: '벨룸',
        en_name: 'vellum',
        skill1_type: '2',
        skill1_detail: '최대 15명의 적을 3000/3600% 의 데미지로 1회 공격. 재사용 대기시간 120초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1500/1800%의 주니어 벨룸 소환. 재사용 대기시간 180초',
        img1: [
            'vellum1.gif',
            'vellum1-1.gif',
        ],
        img2: [
            'vellum2.gif',
            'vellum2-1.gif',
            'vellum2-2.gif'
        ]
        
    },
    magnus: {
        tier: '1',
        ko_name: '매그너스',
        en_name: 'magnus',
        skill1_type: '2',
        skill1_detail: '최대 8명의 적을 3000/3600% 의 데미지로 1회 공격. 재사용 대기시간 60초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1500/1800%의 매그너스 소환. 재사용 대기시간 180초',
        img1: [
            'magnus1.gif',
            'magnus1-1.gif',
        ],
        img2: [
            'magnus2.gif',
            'magnus2-1.gif',
            'magnus2-2.gif',
        ]
        
    },
    cygnus: {
        tier: '1',
        ko_name: '시그너스',
        en_name: 'cygnus',
        skill1_type: '1',
        skill1_detail: '90초간 데미지 1000/1200%의 시그너스 소환. 재사용 대기시간 150초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1500/1800%의 시그너스 소환. 재사용 대기시간 150초',
        img1: [
            'cygnus1.gif',
            'cygnus1-1.gif',
            'cygnus1-2.gif',
        ],
        img2: [
            'cygnus2.gif',
            'cygnus2-1.gif',
            'cygnus2-2.gif',
        ]
        
    },
    lotus: {
        tier: '1',
        ko_name: '스우',
        en_name: 'lotus',
        skill1_type: '1',
        skill1_detail: '120초간 데미지 1500/1800%의 스우 소환. 재사용 대기시간 180초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 폭주 스우 소환. 재사용 대기시간 180초',
        img1: [
            'lotus1.gif',
            'lotus1-1.gif',
            'lotus1-2.gif'
        ],
        img2: [
            'lotus2.gif',
            'lotus2-1.gif',
            'lotus2-2.gif'
        ]
        
    },
    demian: {
        tier: '1',
        ko_name: '데미안',
        en_name: 'demian',
        skill1_type: '1',
        skill1_detail: '120초간 데미지 1500/1800%의 데미안 소환. 재사용 대기시간 180초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 각성 데미안 소환. 재사용 대기시간 180초',
        img1: [
            'demian1.gif',
            'demian1-1.gif',
            'demian1-2.gif'
        ],
        img2: [
            'demian2.gif',
            'demian2-1.gif',
            'demian2-2.gif'
        ]
        
    },
    lucid: {
        tier: '1',
        ko_name: '루시드',
        en_name: 'lucid',
        skill1_type: '3',
        skill1_detail: '40초간 데미지 1500/1800%의 루시드 소환. 재사용 대기시간 60초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 루시드 소환. 재사용 대기시간 150초',
        img1: [
            'lucid1.gif',
            'lucid1-1.gif',
            'lucid1-2.gif'
        ],
        img2: [
            'lucid2.gif',
            'lucid2-1.gif',
            'lucid2-2.gif'
        ]
        
    },
    will: {
        tier: '1',
        ko_name: '윌',
        en_name: 'will',
        skill1_type: '2',
        skill1_detail: '최대 15명의 적을 1000/1200% 의 데미지로 4회 공격. 재사용 대기시간 40초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 윌 소환. 재사용 대기시간 150초',
        img1: [
            'will1.gif',
            'will1-1.gif'
        ],
        img2: [
            'will2.gif',
            'will2-1.gif',
            'will2-2.gif'
        ]
        
    },    
    darknell: {
        tier: '1',
        ko_name: '듄켈',
        en_name: 'darknell',
        skill1_type: '2',
        skill1_detail: '최대 15명의 적을 1000/1200% 의 데미지로 4회 공격. 재사용 대기시간 30초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 듄켈 소환. 재사용 대기시간 150초',
        img1: [
            'darknell1.gif',
            'darknell1-1.gif'
        ],
        img2: [
            'darknell2.gif',
            'darknell2-1.gif',
            'darknell2-2.gif'
        ]
        
    },
    verus_hilla: {
        tier: '1',
        ko_name: '진힐라',
        en_name: 'verus_hilla',
        skill1_type: '2',
        skill1_detail: '최대 1명의 적을 8000/1000% 의 데미지로 1회 공격. 재사용 대기시간 40초',
        skill2_type: '1',
        skill2_detail: '120초간 데미지 1800/2200%의 진 힐라 소환. 재사용 대기시간 150초',
        img1: [
            'verus_hilla1.gif',
            'verus_hilla1-1.gif'
        ],
        img2: [
            'verus_hilla2.gif',
            'verus_hilla2-1.gif',
            'verus_hilla2-2.gif'
        ]
        
    },
};

var soul_option = {

    tier_1 : {        
        opt1: 'STR + 24'        // 기운찬
        ,opt2: 'DEX + 24'       // 날렵한
        ,opt3: 'INT + 24'       // 총명한
        ,opt4: 'LUK + 24'       // 놀라운
        ,opt5: 'ALL + 24'       // 화려한
        ,opt6: '공격력 + 6'     // 강력한
        ,opt7: '마력 + 6'       // 빛나는
        ,opt8: 'HP & MP + 960'  // 강인한
    },
    tier_1w : {
        opt1: '공격력 + 3%'
        ,opt2: '마력 + 3%'
        ,opt3: '올스탯 + 5%'
        ,opt4: 'HP + 2000'
        ,opt5: '크리티컬 확률 + 12%'
        ,opt6: '방어력 무시 + 7%'
        ,opt7: '보스 몬스터 공격 시 데미지 + 7%'
    }


}


/*

// 1티어 

1. 듄켈

2. 진 힐라

3. 무르무르

4. 데미안

5. 윌

6. 루시드

7. 스우

8. 매그너스

9. 시그너스

10. 벨룸

11. 블러디 퀸

12. 무르무르

공격력 / 마력 +3%

-올스텟 5%

- MHP +20000

-크리티컬 확률 +12%

-몬스터 방어율 무시 +7%

-보스 몬스터 공격시 데미지 +7%

-스킬 레벨 +2증가





// 2티어

-반반

-피에르

-우르스

-핑크빈


-공격력/마력 +10

-올스텟 +20

-MHP + 1500

-크리티컬 확률 +10%

-몬스터 방어율 무시 +5%

-보스 몬스터 공격시 데미지 +5%





*/

