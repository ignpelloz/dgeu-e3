import * as React from 'react';

class TopHeader extends React.Component<{}, {}> {

    public render(){
        return (
          <div id="tophead">
          <div className="container">


            <div id="top-nav">
              <nav className="top-navigation"><ul id="menu-unico-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-15 current_page_item menu-item-30"><a title="Home page" href="https://www.distritounicoandaluz.org/" aria-current="page">Principal</a></li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-910"><a href="https://www.distritounicoandaluz.org/category/noticias/">Noticias</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a title="Preinscripción en el distrito único andaluz" href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-preinscripcion/">Preinscripción</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"><a title="Selectividad en el distrito unico andaluz" href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-selectividad/">Selectividad</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-automatricula/">Automatrícula</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-examenes/">Examenes</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-becas/">Becas</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-master/">Máster</a></li>
              </ul></nav>				
              
            </div>

          </div>
        </div>
        );
    }
}

export default TopHeader;