import data from "./data";
import {useIntl} from "react-intl";
import Images from "next/image"

const Services = () => {
    const {locale, formatMessage} = useIntl()
    return (
        <section id="services">
            <div className="container">
                <div className="services-general">
                    <h1 className="services-general__title">{formatMessage({id: 'services'})}</h1>
                    <p className="services-general__desc">{formatMessage({id: "desc"})}</p>

                    <div className="services-general__gen">
                        {data.map((el) => {
                            return (
                                <div className="services-general__block" key={el.id}>
                                    <div className="services-general__block__square">
                                        <Images src={el.img} alt="img"/>
                                    </div>
                                    <h1 dangerouslySetInnerHTML={{__html: el[`name_${locale}`]}}/>
                                    <p dangerouslySetInnerHTML={{__html: el[`desc_${locale}`]}}/>
                                </div>
                            )
                        })}

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Services;
