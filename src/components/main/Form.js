import {useIntl} from "react-intl";
import {Formik} from 'formik';
import api from "../../../axiosAPI/api";

export default function Form() {
    const {formatMessage} = useIntl()
    return (
        <section id="form">
            <div className="container">
                <h1 className="title">{formatMessage({id: 'tell_title'})}</h1>
                <div className="form">
                    <div className="form__width"/>
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
                                  className="form__block">
                                <div>
                                    <input
                                        className="form__block--input"
                                        placeholder={formatMessage({id: 'name'})}
                                        type="text"
                                        name="name_en"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name_ru}
                                    />
                                    {formik.errors.name_ru && formik.touched.name_ru && formik.errors.name_ru}
                                    <input
                                        className="form__block--input"
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
                                        className="form__block--input"
                                        placeholder={formatMessage({id: 'phone number'})}
                                        type="phone"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                    {formik.errors.phone && formik.touched.phone && formik.errors.phone}
                                    <select
                                        className="form__block--input"

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
                                    className="form__block--btn"
                                    type="submit"
                                    disabled={formik.isSubmitting}>
                                    Submit
                                </button>
                                {!!formik.status && (
                                    <h1 className="form__block--message">{formik.status}</h1>
                                )}
                            </form>
                        )}
                    </Formik>
                    <div className="form__width2"/>
                </div>
            </div>
        </section>
    )
}
