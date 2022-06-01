export type initStateType = {}

export type NoticeType = {
    title: string
    unread: boolean
    date: string
    text: string
    id: number
}

export type InitStateType = NoticeType []

export let initState = [
    {
        id: 112,
        title: "Скидка 20% для новых клиентов",
        unread: true,
        date: "23.03.2022",
        text: "Скидка 20% для новых клиентов"
    },
    {
        id: 232,
        title: "Президент Ассоциации участников отрасли ЦОД в гостях у Komplex Host",
        unread: false,
        date: "23.03.2022",
        text: "Наш дата-центр посетил президент Ассоциации участников отрасли ЦОД Игорь Викторович Дорофеев. Мы обсудили вопросы развития дата-центров в регионах, а также перспективы партнерства и развития взаимоотношений. Были рады этой встрече!"
    },
    {
        id: 123,
        title: "Мы отразили DDoS-атаку",
        unread: false,
        date: "23.03.2022",
        text: "На этой неделе дата-центр «Комплекс-Хост» подвергся DDoS -атаке. В результате чего у многих наших клиентов возникли проблемы с доступом к своему оборудованию и сервисам. Инженеры «Комплекс-Хост» оперативно приняли меры по отражению этих атак! Но из-за нестабильной обстановки в мире DDoS- атаки могут возобновиться. Поэтому просим наших клиентов отнестись с пониманием! Мы всей командой «Комплекс-Хост» принимаем активные меры по отражению атак и стабильности сетевых каналов.Объем хакерских атак на российские компании, госорганы, банки и СМИ с 24 по 28 февраля как минимум в три раза превзошел число атак в феврале прошлого года, подсчитали эксперты по кибербезопасности."
    },
    {
        id: 421,
        title: "Режим работы дата-центра в 'ковидные выходные'",
        unread: false,
        date: "23.03.2022",
        text: "В период 'ковидных выходных' дата-центр работает в штатном режиме!В период 'ковидных выходных' дата-центр работает в штатном режиме!"
    },
    {
        id: 5213,
        title: "Скидка 20% для новых клиентов",
        unread: true,
        date: "23.03.2022",
        text: "Скидка 20% для новых клиентов"
    },
    {
        id: 236,
        title: "Скидка 10% для новых клиентов",
        unread: false,
        date: "23.03.2022",
        text: "Скидка 10% для новых клиентов"
    },
    {
        id: 712,
        title: "Мы отразили DDoS-атаку",
        unread: false,
        date: "23.03.2022",
        text: "На этой неделе дата-центр «Комплекс-Хост» подвергся DDoS -атаке. В результате чего у многих наших клиентов возникли проблемы с доступом к своему оборудованию и сервисам. Инженеры «Комплекс-Хост» оперативно приняли меры по отражению этих атак! Но из-за нестабильной обстановки в мире DDoS- атаки могут возобновиться. Поэтому просим наших клиентов отнестись с пониманием! Мы всей командой «Комплекс-Хост» принимаем активные меры по отражению атак и стабильности сетевых каналов.Объем хакерских атак на российские компании, госорганы, банки и СМИ с 24 по 28 февраля как минимум в три раза превзошел число атак в феврале прошлого года, подсчитали эксперты по кибербезопасности."
    },
]

export const noticeReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "READ-NOTICE":
            return state.map(el=> el.id === action.noticeId ? {...el, unread: false } : el)
        default:
            return state
    }


}

type ActionsType = ReadNoticeActionType

export type ReadNoticeActionType = ReturnType<typeof readNoticeAC>

export const readNoticeAC = (noticeId: number) => {
    return {
        type: 'READ-NOTICE',
        noticeId
    }
}