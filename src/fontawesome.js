// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import the icons

// SOLID
import {
  faSearch,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';

// REGULAR
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faStarRegular, faStarSolid);

export default function registerIcons() {
  library.add(faStarSolid, faStarRegular);
}
