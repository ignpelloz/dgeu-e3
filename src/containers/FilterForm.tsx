import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import FilterForm from '../components/FilterForm';
import IGlobalState from '../states/globalState';
import { FilterFormActions } from '../actions/FilterFormActions'

const mapStateToProps = (state: IGlobalState) => ({
    uni: state.uni,
    area: state.area,
    tipo: state.tipo,
    results: state.results
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUni: (uni: string) => {
            dispatch({ type: FilterFormActions.CHANGE_UNI, payload: uni });
        },
        setTipo: (tipo: string) => {
            dispatch({ type: FilterFormActions.CHANGE_TIPO, payload: tipo });
        },
        setArea: (area: string) => {
            dispatch({ type: FilterFormActions.CHANGE_AREA, payload: area });
        },
        setResults: (results: [string, string][]) => {
            dispatch({ type: FilterFormActions.CHANGE_RESULTS, payload: results });
        }
    }
}

//Con esto, ese FilterForm recibe el store de forma automatica
export default connect(mapStateToProps, mapDispatchToProps)(FilterForm); 