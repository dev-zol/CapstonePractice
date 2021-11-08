import { FontAwesomeIcon } from "@fortawesome/reactfontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon
    onClick={slideLeft}
    className="leftBtn"
    icon={faChevronLeft}/>
<FontAwesomeIcon
     onClick={slideRight}
     className="rightBtn"
     icon={faChevronRight}/>