import {useEffect} from "react";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../axiosAPI/api";
import Loader from "../../Loader";
import {setVacancies} from "../../../../redux/reducers/vacancies";
import Accord from "./accord";

const Vacancies = () => {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch()
    const fetchVacancies = async () => {
        dispatch(setVacancies(null));
        const {data} = await api('vacancy')
        dispatch(setVacancies(data));
    }
    useEffect(() => {
        fetchVacancies()
    }, [])




    const data = useSelector((state) => state.vacancies.vacancies);
    return (
        <section id="vacancies">
            <div className="container">
                <h1 className="title">{formatMessage({id: 'vacancy'})}</h1>
                <div className="vacancy">
                    {data?.length === 0 ? (
                        <Loader/>
                    ) : data?.map((el) => {
                            return (
                                <Accord key={el.id} el={el} />

                            )
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Vacancies;
