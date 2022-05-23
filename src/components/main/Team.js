import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../axiosAPI/api";
import {useEffect} from "react";
import {setStaff} from "../../../redux/reducers/staff";
import Loader from "../Loader";

const Team = () => {
    const {formatMessage,locale} = useIntl()
    const dispatch = useDispatch()
    const fetchStaff = async () => {
        dispatch(setStaff(null));
        const {data} = await api('staff')
        dispatch(setStaff(data));
    }
    useEffect(() => {
        fetchStaff()
    }, [])

    const data = useSelector((state) => state.staff.staff);
    return (
        <section id="team">
            <div className="container">
                <h1 className="title">{formatMessage({id: 'team'})}</h1>
                <div className="team">
                    {data?.length === 0 ? (
                        <Loader/>
                    ) : data?.map((el) => {
                        return (
                            <div key={el.id} className="team__card">
                                <img src={el.image} alt="" className="team__card--img"/>
                                <div className="team__card--box">
                                    <h3 className="team__card--box__title" dangerouslySetInnerHTML={{__html: el[`name_${locale}`]}}/>

                                    <div className="team__card--box__content">
                                        <p className="team__card--box__content--desc" dangerouslySetInnerHTML={{__html: el[`position_${locale}`]}}/>

                                        <ul className="team__card--box__content--socials">
                                            <li>
                                                <a href={el.url_instagram} className="team__card--box__content--socials__icon">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={el.url_linkedin} className="team__card--box__content--socials__icon">
                                                    <i className="fab fa-linkedin"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={el.url_mail} className="team__card--box__content--socials__icon">
                                                    <i className="fa-solid fa-envelope"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
