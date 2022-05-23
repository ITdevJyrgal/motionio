import {useDispatch, useSelector} from "react-redux";
import api from "../../../axiosAPI/api";
import {setProjects} from "../../../redux/reducers/projects";
import {useEffect} from "react";
import {useIntl} from "react-intl";
import Loader from "../Loader";
import Link from "next/link";


const Projects = () => {
    const {formatMessage,locale} = useIntl();

    const dispatch = useDispatch()
    const fetchProjects = async () => {
        dispatch(setProjects(null));
        const {data} = await api('project')
        dispatch(setProjects(data));
    }
    useEffect(() => {
        fetchProjects()
    }, [])

    const data = useSelector((state) => state.projects.projects);

    return (
        <section id="projects">
            <div className="container">
                <h1 className="title">{formatMessage({id: "our projects"})}</h1>

                <div className="projects">
                    {data?.length === 0 ? (
                        <Loader/>
                    ) : data?.map((el) => {
                        return (
                            <Link key={el.id} href={el.url_project}  target="_self" >
                                <div className="projects__col-4">
                                    <img src={el.image} alt="" width={"370px"} height={"231.25px"}/>
                                    <div className="projects__col-4--box">
                                        <h1 className="projects__col-4--box__title" dangerouslySetInnerHTML={{__html: el[`name_${locale}`]}}/>
                                        <p className="projects__col-4--box__desc" dangerouslySetInnerHTML={{__html: el[`description_${locale}`]}}/>
                                        <a href={el.url_project} target='_blank' rel="noreferrer" className="projects__col-4--box__btn">view</a>
                                    </div>
                                </div>

                            </Link>
                        )

                    })
                    }
                </div>

            </div>
        </section>
    )
}

export default Projects



