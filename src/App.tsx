import Footer from './components/Footer'
import Menu from './components/Menu'
import TopHeader from './components/TopHeader'
import MainNav from './components/MainNav'
import Introduction from './components/Introduction'
import UniversityList from './styledComponents/UniversityList'// hasta este no necesitan estado global de redux
import FilterForm from './containers/FilterForm' //utiliza store de redux
import { Action, createStore } from 'redux';
import IGlobalState, { initialState } from './states/globalState'
import { Provider } from 'react-redux'
import { IAreaChangeAction, IResultsChangeAction, ITipoChangeAction, IUniChangeAction } from './actions/FilterFormActions';
import { FilterFormActions } from './actions/FilterFormActions'

//recibe un estado y una acción. Devuelve el resultado de aplicar al estado la acción
const reducer = (state: IGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case FilterFormActions.CHANGE_UNI:
      const uniAction = action as IUniChangeAction;
      return { ...state, uni: uniAction.payload }

    case FilterFormActions.CHANGE_AREA:
      const areaAction = action as IAreaChangeAction;
      return { ...state, area: areaAction.payload }

    case FilterFormActions.CHANGE_TIPO:
      const tipoAction = action as ITipoChangeAction;
      return { ...state, tipo: tipoAction.payload }

    case FilterFormActions.CHANGE_RESULTS:
      const resultsAction = action as IResultsChangeAction;
      return { ...state, results: resultsAction.payload }
  }
  return state;
}

// aqui se almacena el estado, a medida que la app evoluciona, se verán los cambios reflejados
const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <body className="home page-template-default page page-id-15 wp-embed-responsive global-layout-no-sidebar slider-disabled">

        <div id="page" className="hfeed site">
          <a className="skip-link screen-reader-text" href="https://www.distritounicoandaluz.org/#content">Skip to content</a>
          <div className="mobile-nav-wrap">
            <a id="mobile-trigger" href="https://www.distritounicoandaluz.org/#mob-menu"><i className="fa fa-bars"></i></a>
            <Menu />
            <a id="mobile-trigger2" href="https://www.distritounicoandaluz.org/#mob-menu2"><i className="fa fa-bars"></i></a>

          </div>
          <TopHeader />
          <header id="masthead" className="site-header" role="banner">
            <div className="container">
              <div className="site-branding">
                <div id="site-identity">
                  <h1 className="site-title"><a href="https://www.distritounicoandaluz.org/" rel="home">Distrito Unico Andaluz</a></h1>
                </div>
              </div>
              <div id="quick-contact">
              </div>
              <MainNav />
            </div>
          </header>

          <div id="content" className="site-content">
            <div className="container">
              <div className="inner-wrapper">
                <div id="primary" className="content-area">
                  <main id="main" className="site-main" role="main">
                    <article id="post-15" className="post-15 page type-page status-publish hentry">
                      <header className="entry-header">
                        <h1 className="entry-title">Distrito Unico Andaluz</h1>
                      </header>
                      <div className="entry-content-wrapper">
                        <div className="entry-content">
                          <Introduction />

                          <h3>Distrito Unico Andaluz: Universidades</h3>
                          <p>A través de su acceso al <strong>Distrito Unico Andaluz</strong>, las personas
                        pueden elegir todas las opciones académicas que ofrecen los siguientes
                        Establecimientos Universitarios Públicos de la Comunidad:</p>

                          {/* REFACTORING STARTS HERE */}

                          <UniversityList />

                          <p>Mas info sobre el <strong>Distrito Unico Andaluz</strong>: <a href="https://www.juntadeandalucia.es/economiainnovacionyciencia/sguit/">https://www.juntadeandalucia.es/economiainnovacionyciencia/sguit/</a>#</p>

                          <FilterForm />

                          {/* REFACTORING ENDS HERE */}

                          <div style={{ fontSize: "0px", height: "0px", lineHeight: "0px", margin: "0", padding: "0", clear: "both" }}>
                          </div>

                        </div>
                      </div>
                      <footer className="entry-footer">
                      </footer>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <a href="https://www.distritounicoandaluz.org/#page" className="scrollup" id="btn-scrollup" style={{ display: "none" }}><i className="fa fa-angle-up"></i></a>
      </body>
    </Provider>
  );
}
export default App;
