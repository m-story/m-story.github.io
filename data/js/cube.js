// 71~200제 기준
// 확률은 4~8
var cube_option_common = {
    legendary : {
        first: [
            { option: 'STR + 12%', chance: '8' },
            { option: 'DEX + 12%', chance: '8' },
            { option: 'INT + 12%', chance: '8' },
            { option: 'LUK + 12%', chance: '8' },
            { option: '올스탯 + 9%', chance: '8' },
        ],
        second: [
            { option: 'STR + 9%', chance: '8' },
            { option: 'DEX + 9%', chance: '8' },
            { option: 'INT + 9%', chance: '8' },
            { option: 'LUK + 9%', chance: '8' },
            { option: '올스탯 + 6%', chance: '8' },     
        ],
        third: [
            { option: 'STR + 9%', chance: '8' },
            { option: 'DEX + 9%', chance: '8' },
            { option: 'INT + 9%', chance: '8' },
            { option: 'LUK + 9%', chance: '8' },
            { option: '올스탯 + 6%', chance: '8' },
        ]
    }
}

var cube_option_weapon = {
    legendary : {
        first: [
            { option: '공격력 + 12%', chance: '4' },
            { option: '마력 + 12%', chance: '4' },
            { option: '보스몬스터 공격 시 데미지 : 40%', chance: '4' },
            { option: '보스몬스터 공격 시 데미지 : 35%', chance: '5' },
            { option: '보스몬스터 공격 시 데미지 : 30%', chance: '6' },
            { option: '몬스터 방어력 무시 : 40%', chance: '6' },
            { option: '몬스터 방어력 무시 : 35%', chance: '5' },
            { option: '데미지 + 12%', chance: '5' },
            { option: '크리티컬 확률 + 12%', chance: '7' },
            { option: '캐릭터 기준 10레벨당 공격력 + 1', chance: '6' },
            { option: '캐릭터 기준 10레벨당 마력 + 1', chance: '6' },
        ],
        second: [
            { option: '공격력 + 9%', chance: '5' },
            { option: '마력 + 9%', chance: '5' },
            { option: '보스몬스터 공격 시 데미지 : 30%', chance: '4' },
            { option: '보스몬스터 공격 시 데미지 : 20%', chance: '7' },
            { option: '몬스터 방어력 무시 : 35%', chance: '5' },
            { option: '데미지 + 9%', chance: '6' },
            { option: '크리티컬 확률 + 9%', chance: '7' },
        ],
        third: [
            { option: '공격력 + 9%', chance: '5' },
            { option: '마력 + 9%', chance: '5' },
            { option: '보스몬스터 공격 시 데미지 : 30%', chance: '4' },
            { option: '보스몬스터 공격 시 데미지 : 20%', chance: '7' },
            { option: '몬스터 방어력 무시 : 35%', chance: '5' },
            { option: '데미지 + 9%', chance: '6' },
            { option: '크리티컬 확률 + 9%', chance: '7' },
        ],
    }
}

var cube_option_armor = {
    legendary : {
        first: [
            '방어력 + 12%',
            'MaxHP + 9%',
            'MaxMP + 9%',
        ],
        second: [
            '방어력 + 9%',            
            'MaxHP + 9%',
            'MaxMP + 9%',
        ],
        third: [
            '방어력 + 9%',            
            'MaxHP + 9%',
            'MaxMP + 9%',
        ]
    }
}