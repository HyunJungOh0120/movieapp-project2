// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import the icons

// SOLID
import {
  faSearch,
  faStar as faStarSolid,
  faPlay,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// REGULAR
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faStarRegular, faStarSolid, faPlay, faPlus, faTimes);

export default function registerIcons() {
  library.add(faStarSolid, faStarRegular, faPlay, faPlus, faTimes);
}
