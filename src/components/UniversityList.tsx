import * as React from 'react';
import olavideLogo from '../assets/img/olavide.jpg'
import ualLogo from '../assets/img/ual.jpg'
import ucoLogo from '../assets/img/uco.jpg'
import ucaLogo from '../assets/img/uca-233x300.jpeg'
import ugrLogo from '../assets/img/ugr.jpg'
import uhuLogo from '../assets/img/uhu.jpg'
import ujaenLogo from '../assets/img/ujaen.jpg'
import umaLogo from '../assets/img/uma.jpg'
import univaLogo from '../assets/img/univa.jpg'
import usevillaLogo from '../assets/img/usevilla.jpg'
import University from '../styledComponents/University'


interface IUniversityListClasses<T> {
    wrapper: T;
}

export interface IUniversityListProps {
    classes: IUniversityListClasses<string>;
}

class UniversityList extends React.Component<IUniversityListProps, {}> {

    public render() {
        return (

            <div className={this.props.classes.wrapper}> {/* era public/css/wrapper.css */}

                <University wrapperItemCounter={"one"} href={"https://www.ual.es/"} title={"Universidad de Almería"} imgSrc={ualLogo} uniText={"<strong><a title=\"Universidad de Almeria\" href=\"https://www.distritounicoandaluz.org/universidad-de-almeria/\">UNIVERSIDAD DE ALMERÍA</a>:</strong> Creada por el Parlamento Andaluz en 1993. Es una de las universidades más jóvenes de España. Su oferta académica incluye más&nbsp;de 30 titulaciones, más de 37 programas de doctorado (9 de ellos con mención de calidad), 13 másteres oficiales y 12 másteres propios."} />

                <University wrapperItemCounter={"two"} href={"https://www.uca.es/"} title={"Universidad de Cádiz"} imgSrc={ucaLogo} uniText={"<strong><a title=\"Universidad de Cadiz\" href=\"https://www.distritounicoandaluz.org/universidad-de-cadiz/\">UNIVERSIDAD DE CADIZ</a>:</strong>&nbsp;Comenzó sus actividades en octubre de 1979.&nbsp;La oferta actual de estudios abarca un total de 41 titulaciones de Grado, 12 Programas Conjuntos de Estudios Oficiales de Grado (PCEO), 39 Másteres Universitarios y 15 Programas de Doctorado."} />

                <University wrapperItemCounter={"three"} href={"https://www.uco.es/"} title={"Universidad de Cordoba"} imgSrc={ucoLogo} uniText={"<strong><a title=\"Universidad de Cordoba\" href=\"https://www.distritounicoandaluz.org/universidad-de-cordoba/\">UNIVERSIDAD DE CÓRDOBA</a>:</strong>&nbsp;fundada como tal en 1972, sus raíces se remontan a la Universidad Libre que funcionó en la provincia a finales del siglo XIX y cuenta con estudios centenarios como los de Veterinaria, únicos en Andalucía.&nbsp;Los estudios de esta universidad van desde las Humanidades y las Ciencias Jurídico-Sociales a las Ciencias de la Salud y las carreras científico-técnicas."} />

                <University wrapperItemCounter={"four"} href={"https://www.ugr.es/"} title={"Universidad de Granada"} imgSrc={ugrLogo} uniText={"<strong><a title=\"Universidad de Granada\" href=\"https://www.distritounicoandaluz.org/universidad-de-granada/\">UNIVERSIDAD DE GRANADA</a>:</strong> Fundada en 1531, es la continuadora de una larga tradición docente que enlaza con la de la Madraza del último Reino Nazarí.&nbsp;Actualmente se imparten 75&nbsp;titulaciones&nbsp;en los 28&nbsp;centros docentes&nbsp;de que dispone la Universidad. Por otro lado,&nbsp;su&nbsp;<a title=\"servicios/ep\" href=\"http://www.ugr.es/pages/servicios/ep\">Escuela Internacional de Posgrado</a>&nbsp;ofrece 68 Másteres, 116 Doctorados y 113 cursos complementarios."} />

                <University wrapperItemCounter={"five"} href={"http://www.uma.es/"} title={"Universidad de Málaga"} imgSrc={umaLogo} uniText={"<strong><a title=\"Universidad de Malaga\" href=\"https://www.distritounicoandaluz.org/universidad-de-malaga/\">UNIVERSIDAD DE MÁLAGA</a>:</strong> Creada oficialmente en agosto de 1972. Su oferta académica comprende 62 Grados, 43 Programas de Doctorado, 55 Másteres, y 39 Títulos Propios de Postgrado (Máster y Experto)."} />

                <University wrapperItemCounter={"six"} href={"https://www.uhu.es/"} title={"Universidad de Huelva"} imgSrc={uhuLogo} uniText={"<strong><a title=\"Universidad de Huelva\" href=\"https://www.distritounicoandaluz.org/universidad-de-huelva/\">UNIVERSIDAD DE HUELVA</a>:&nbsp;</strong>Creada en julio de 1993. Actualmente cuenta con una oferta de 36 titulaciones de Grado, 4 Estudios de Segundo Ciclo, 28 Másteres Oficiales, y 21 Programas de Doctorados."} />

                <University wrapperItemCounter={"seven"} href={"https://www.us.es/"} title={"Universidad de Sevilla"} imgSrc={usevillaLogo} uniText={"<strong><a title=\"Universidad de Sevilla\" href=\"https://www.distritounicoandaluz.org/universidad-de-sevilla/\">UNIVERSIDAD DE SEVILLA</a>: </strong>Fundada hace más de quinientos años, es la segunda universidad española en número de estudiantes y la primera de Andalucía. Su oferta académica actual ronda las 66 titulaciones de Grado desde el Primer Curso, 86 Másteres Universitarios, 152 Programas de Doctorado, y 335 Estudios de Postgrado Universitario."} />

                <University wrapperItemCounter={"eight"} href={"https://www10.ujaen.es/"} title={"Universidad de Jaén"} imgSrc={ujaenLogo} uniText={"<strong><a title=\"Universidad de Jaen\" href=\"https://www.distritounicoandaluz.org/universidad-de-jaen/\">UNIVERSIDAD DE JAÉN</a>:&nbsp;</strong>Sus orígenes&nbsp;se remontan a la creación de la Universidad de Baeza en la Edad Moderna, con un amplio recorrido hasta llegar a 1993 en que inicia su andadura como institución autónoma.&nbsp;&nbsp;Su oferta académica, “diseñada de acuerdo con las necesidades laborales y profesionales de la sociedad”, está conformada por más de 50 titulaciones de Grado, Primer y Segundo Ciclo y 22 másteres, algunos de ellos impartidos a través de Internet."} />

                <University wrapperItemCounter={"nine"} href={"https://www.upo.es/portal/impe/web/portada"} title={"Universidad Pablo de Olavide"} imgSrc={olavideLogo} uniText={"<strong><a title=\"Universidad Pablo de Olavide\" href=\"https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/\">UNIVERSIDAD PABLO DE OLAVIDE</a>:&nbsp;</strong>Ubicada en Sevilla, esta universidad fue creada en julio de 1997. Su oferta de estudios en la actualidad se distribuye en&nbsp;31 Grados y dobles Grados,&nbsp;40 Másteres Oficiales,&nbsp;9&nbsp;Programas de Doctorado, y&nbsp;147&nbsp;Títulos Propios."} />

                <University wrapperItemCounter={"ten"} href={"http://www.unia.es/"} title={"UNIVERSIDAD INTERNACIONAL DE ANDALUCÍA"} imgSrc={univaLogo} uniText={"<strong>UNIVERSIDAD INTERNACIONAL DE ANDALUCÍA: </strong>Fue creada por Ley de la Comunidad Autónoma de Andalucía en 1994. Las enseñanzas que se imparten en esta universidad son especializadas y de postgrado e incluyen&nbsp;Programas Oficiales de Postgrado, Doctorados, Títulos Propios (Másteres Universitarios y Cursos de Experto Universitario), Cursos de Formación Permanente y Cursos de Verano."} />

            </div>

        );
    }
}
export default UniversityList;