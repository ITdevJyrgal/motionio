import React from "react";
import {languages} from "../../constants/languages";
import {LOCALES} from "../../intl/locales";

const Switch = () => {
    return (
        <>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label className="react-switch-label" htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`}/>
            </label>
            {languages.map((el) => (
                <div key={el.key}>
                    <button>
                        key={el.key}
                        {el.text1}
                        />
                        {el.text}
                        value={LOCALES[el.key]}
                    </button>
                </div>
            ))}
        </>
    );
};

export default Switch;
