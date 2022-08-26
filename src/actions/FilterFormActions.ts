import { Action } from 'redux'

export enum FilterFormActions {
    CHANGE_UNI = "CHANGE_UNI",
    CHANGE_AREA = "CHANGE_AREA",
    CHANGE_TIPO = "CHANGE_TIPO",
    CHANGE_RESULTS = "CHANGE_RESULTS",
}

export interface IUniChangeAction extends Action {
    payload: string
}
export interface IAreaChangeAction extends Action {
    payload: string
}
export interface ITipoChangeAction extends Action {
    payload: string
}
export interface IResultsChangeAction extends Action {
    payload: [string, string][]
}