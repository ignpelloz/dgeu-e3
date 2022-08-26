import UniversityList from '../components/UniversityList';

import injectSheet from 'react-jss';

const classes = {
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "40px",
        gridAutoRows: "minmax(100px, auto)",
      }
}

export default injectSheet(classes)(UniversityList);