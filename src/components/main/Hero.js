import {useIntl} from "react-intl";
import {Formik} from "formik";
import api from "../../../axiosAPI/api";
import {useState} from "react";

const Hero = () => {
    const {formatMessage} = useIntl()

    const [showModal, setShowModal] = useState(false);

    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h1 className="hero__title">

                        {formatMessage({id: 'MOTION WEB'})} <br/>
                        <span className="hero__title--span">{formatMessage({id: 'IT STUDIO'})}</span>
                    </h1>
                    <p className="hero__desc">{formatMessage({id: 'description'})}</p>
                    <button className="hero__btn"
                            onClick={() => setShowModal(true)}
                    >Получить концультацию
                    </button>
                    {showModal && (

                        <div className="hero-modal">
                            <div className="hero-modal__block">
                                <div className="hero-modal__block__square">
                                    <div className="hero-modal__block__square__width"/>
                                    <span
                                        onClick={() => setShowModal(false)}
                                    ><i className="fas fa-close"/></span>
                                    <Formik

                                        initialValues={{
                                            name_en: '',
                                            email: '',
                                            budget: '',
                                            phone: ''
                                        }}

                                        onSubmit={async (values, actions) => {
                                            try {
                                                await api.post("/feedback/link/", values);
                                                actions.setStatus(formatMessage({id: 'success'})
                                                );
                                            } catch (e) {
                                                actions.setStatus("error");
                                            }
                                        }}
                                    >
                                        {(formik) => (
                                            <form onSubmit={formik.handleSubmit}
                                                  className="hero-modal__block__square__block__block">
                                                <div>
                                                    <input
                                                        className="hero-modal__block__square__block--input"
                                                        placeholder={formatMessage({id: 'name'})}
                                                        type="text"
                                                        name="name_en"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.name_ru}
                                                    />
                                                    {formik.errors.name_ru && formik.touched.name_ru && formik.errors.name_ru}
                                                    <input
                                                        className="hero-modal__block__square__block--input"
                                                        placeholder="Email"
                                                        type="email"
                                                        name="email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.errors.email && formik.touched.email && formik.errors.email}
                                                </div>
                                                <div>
                                                    <input
                                                        className="hero-modal__block__square__block--input"
                                                        placeholder={formatMessage({id: 'phone number'})}
                                                        type="phone"
                                                        name="phone"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.phone}
                                                    />
                                                    {formik.errors.phone && formik.touched.phone && formik.errors.phone}
                                                    <select
                                                        className="hero-modal__block__square__block--input"

                                                        name="budget"
                                                        id="budget"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.budget}
                                                    >
                                                        <option value="$3000">$0 - $3,000</option>
                                                        <option value="$5000">$3,000 - $5,000</option>
                                                        <option value="$10 000">$3,000 - $10,000</option>
                                                        <option value="$25 000">$10,000 - $25,000+</option>
                                                        <option value="$25 000">$25,000+</option>
                                                    </select>
                                                    {formik.errors.phone && formik.touched.phone && formik.errors.phone}

                                                </div>

                                                <button
                                                    // onClick={() => {
                                                    //     setShowModal(false)
                                                    // }}
                                                    className="hero-modal__block__square__block--btn"
                                                    type="submit"
                                                    disabled={formik.isSubmitting}>
                                                    Submit
                                                </button>
                                                {!!formik.status && (
                                                    <h1 className="hero-modal__block__square__block--message">{formik.status}</h1>
                                                )}
                                            </form>

                                        )}
                                    </Formik>
                                    <div className="hero-modal__block__square__width2"/>
                                </div>
                            </div>
                        </div>
                    )}

                {/*    {formatMessage({id: 'MOTION WEB'})}*/}
                {/*    <br/>*/}
                {/*    <span className="hero__title--span">{formatMessage({id: 'IT STUDIO'})}</span>*/}
                {/*</div>*/}
                {/*<p className="hero__desc">{formatMessage({id: 'description'})}</p>*/}
                {/*<button className="hero__btn">Получить концультацию</button>*/}
                </div>
            </div>

        </section>


    );
};

export default Hero;
