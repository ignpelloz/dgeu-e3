import * as React from 'react';

// DATOS
var data = require('./db.json');

interface IFilterFormProps {
    uni: string
    setUni: (uni: string) => any;

    area: string
    setArea: (area: string)  => any;
    
    tipo: string
    setTipo: (tipo: string) => any;

    results: [string, string][]
    setResults: (results: [string, string][]) => any;
}


class FilterForm extends React.Component<IFilterFormProps, {}> {

    constructor(props: IFilterFormProps) {
        super(props);
        this.state = {
            uni: "Universidad de Sevilla",
            tipo: "Máster",
            area: "Ingeniería",
            results: []
        };
        this.queryDB = this.queryDB.bind(this)
    }
    
    public queryDB() {

        //var res = []
        const res: [string, string][] = [];
        for (var i = 0; i < data.length; i++) {

            var obj = data[i];
            console.log(obj);

            if (obj["university"] === this.props.uni) {

                var uniWeb = obj["web"]

                //console.log("")
                //console.log(obj)
                //console.log("")

                var univ_degrees = obj["degrees"]
                //console.log(univ_degrees)

                for (var j = 0; j < univ_degrees.length; j++) {

                    //console.log(univ_degrees[j])

                    if (this.props.tipo === "Máster" && univ_degrees[j]["name"].includes("Máster") && this.props.area === univ_degrees[j]["area"]) {
                        res.push([univ_degrees[j]["name"], uniWeb])
                    }
                    else if (this.props.tipo === "Grado" && !univ_degrees[j]["name"].includes("Máster") && this.props.area === univ_degrees[j]["area"]) {
                        res.push([univ_degrees[j]["name"], uniWeb])
                    }
                }
            }
        }
        this.props.setResults(res);
    }

    public render() {
        console.log(this.props.tipo)
        return (
            <div>
                <h3>Buscador de Titulaciones</h3>
                <div><label>Universidad </label>
                    <select onChange={(event) => this.props.setUni(event.target.value)} >
                        <option value="Universidad de Sevilla">Universidad de Sevilla</option>
                        <option value="Universidad de Almería">Universidad de Almería</option>
                        <option value="Universidad de Cádiz">Universidad de Cádiz</option>
                        <option value="Universidad de Cordoba">Universidad de Cordoba</option>
                        <option value="Universidad de Granada">Universidad de Granada</option>
                        <option value="Universidad de Málaga">Universidad de Málaga</option>
                        <option value="Universidad de Huelva">Universidad de Huelva</option>
                        <option value="Universidad de Jaén">Universidad de Jaén</option>
                        <option value="Universidad Pablo de Olavide">Universidad Pablo de Olavide</option>
                    </select></div>

                <div style={{ marginTop: "5px" }}><label>Area </label>
                    <select onChange={(event) => this.props.setArea(event.target.value)} >
                        <option value="Ingeniería">Ingenieria</option>
                        <option value="Ciencias">Ciencias</option>
                        <option value="Otros">Otras</option>
                    </select></div>

                <div style={{ marginTop: "5px" }}><label>Tipo de Titulación</label>
                    <select onChange={(event) => this.props.setTipo(event.target.value)} >
                        <option value="Máster">Máster</option>
                        <option value="Grado">Grado</option>
                    </select></div>

                <button style={{ marginTop: "15px" }} onClick={this.queryDB} type="button">Buscar</button>

                <div style={{ marginTop: "15px" }}>
                    {this.props.results.map(degreeResult =>
                        <div>
                            <p>{degreeResult[0]} <a target="_blank" rel="noreferrer" href={degreeResult[1]}>(Más Información)</a></p>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}
export default FilterForm;
