import React, {useEffect} from "react";
import {Tabs} from "@dorai-ui/tabs";
import Images from "next/image"
// import figma from "./../../assets/images/figma.png"
import tabsData from "../tabsData/tabsData";
import tabsUx from "../tabsData/tabsUx";
import tabsFront from "../tabsData/tabsFront"
import tabsBack from "../tabsData/tabsBack";
import {useIntl} from "react-intl";
import TabsMobile from "../tabsData/tabsMobile";

export default function App() {
    const {formatMessage} = useIntl()
    return (
        <section id="tools">
            <Tabs className="tabs">
                <div className="container">
                    <h1 className="tabs-title">{formatMessage({id: "tools"})}</h1>
                    <Tabs.List className="tabs-list">
                        <Tabs.Trigger className="tabs-list__tab">Все</Tabs.Trigger>
                        <Tabs.Trigger className="tabs-list__tab">UX|UI DESIGN</Tabs.Trigger>
                        <Tabs.Trigger className="tabs-list__tab">FRONT-END</Tabs.Trigger>
                        <Tabs.Trigger className="tabs-list__tab">BACKEND</Tabs.Trigger>
                        <Tabs.Trigger className="tabs-list__tab">MOBILE</Tabs.Trigger>
                    </Tabs.List>
                    <div className="tabs-panels">
                        <Tabs.Panel className="tabs-panel" as="p">
                            <div className="tabs-list__block">
                                {
                                    tabsData.map(el => {
                                        return (
                                            <div key={el.id} className="tabs-list__design">
                                                <Images src={el.img} alt="img"/>
                                                <p>{el.item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel className="tabs-panel" as="p">
                            <div className="tabs-list__block">
                                {
                                    tabsUx.map(el => {
                                        return (
                                            <div className="tabs-list__design" key={el.id}>
                                                <Images src={el.img} alt="img"/>
                                                <p>{el.item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel className="tabs-panel" as="p">
                            <div className="tabs-list__block">
                                {
                                    tabsFront.map(el => {
                                        return (
                                            <div className="tabs-list__design" key={el.id}>
                                                <Images src={el.img} alt="img"/>
                                                <p>{el.item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel className="tabs-panel" as="p">
                            <div className="tabs-list__block">
                                {
                                    tabsBack.map(el => {
                                        return (
                                            <div className="tabs-list__design" key={el.id}>
                                                <Images src={el.img} alt="img"/>
                                                <p>{el.item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel className="tabs-panel" as="p">
                            <div className="tabs-list__block">
                                {
                                    TabsMobile.map(el => {
                                        return (
                                            <div className="tabs-list__design" key={el.id}>
                                                <Images src={el.img} alt="img"/>
                                                <p>{el.item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tabs.Panel>
                    </div>
                </div>
            </Tabs>
        </section>

    );
}
