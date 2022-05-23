import {useState} from "react";
import {useIntl} from "react-intl";

export default function Accord({el}) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };
    const {locale} = useIntl()
    return (
        <div className="vacancy__box">
            <h1 className="vacancy__box--title" ontransitionrun={'1s'} onClick={toggle}
                dangerouslySetInnerHTML={{__html: el[`name_${locale}`]}}/>
            <p className="vacancy__box--desc"
               style={{display: isShowing ? "block" : "none"}}
               dangerouslySetInnerHTML={{__html: el[`description_${locale}`]}}/>
        </div>
    );
}
