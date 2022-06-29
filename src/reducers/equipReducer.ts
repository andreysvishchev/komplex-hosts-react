import {v1} from "uuid";


export const initState = [
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: ''},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: ''},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
]


export const equipReducer = (state: initStateType = initState, action: ActionsType) => {
    switch (action) {
        default:
            return state

    }
}


// types
type ActionsType = {}
export type initStateType = EquipType[]
export type EquipType = {
    id: string
    serialNumber: number
    name: string
    comment: string
}