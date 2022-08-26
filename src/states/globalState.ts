interface IGlobalState {
    uni: string,
    tipo: string,
    area: string,
    results: [string, string][]
}

export default IGlobalState;

export const initialState: IGlobalState = {
    //estado inicial, definir a mano
    uni: "Universidad de Sevilla",
    tipo: "Máster",
    area: "Ingeniería",
    results: []
}