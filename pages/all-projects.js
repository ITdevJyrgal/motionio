import HomeLayout from "../src/HomeLayout";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {setProjects} from "../redux/reducers/projects";
import api from "../axiosAPI/api";
import {useEffect} from "@types/react";
import Loader from "../src/components/Loader";
import Link from "next/link";

const AllProjects = () => {
    const {formatMessage, locale} = useIntl();

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
        <HomeLayout>
            <section id="all-projects">
                <div className="container">
                    <h1 className="title">{formatMessage({id: "our projects"})}</h1>

                    <div className="projects">
                        {data?.length === 0 ? (
                            <Loader/>
                        ) : data?.map((el) => {
                            return (
                                <Link href={el.url_project} key={el.id} target="_self">
                                    <div className="projects__col-4">
                                        <img src={el.image} alt="" width={"370px"} height={"231.25px"}/>
                                        <div className="projects__col-4--box">
                                            <h1 className="projects__col-4--box__title"
                                                dangerouslySetInnerHTML={{__html: el[`name_${locale}`]}}/>
                                            <p className="projects__col-4--box__desc"
                                               dangerouslySetInnerHTML={{__html: el[`description_${locale}`]}}/>
                                            <a href={el.url_project} target='_blank' rel="noreferrer"
                                               className="projects__col-4--box__btn">view</a>
                                        </div>
                                    </div>

                                </Link>
                            )

                        })
                        }
                    </div>

                </div>
            </section>
        </HomeLayout>
    );
};

export default AllProjects;
