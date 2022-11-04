import { Animation, ArrowRight } from "@/components";
import { Layout } from "@/layout";
import type { ISkillsList } from "@/types";
import { skillsPageMocks } from "@/__mocks__";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const Skills: FC = () => {
    const [bar, setBar] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setBar(true);
        }, 1100);
    }, []);

    return (
        <Layout title='Skills'>
            <div className='containers'>
                <div className='skills'>
                    <Animation>
                        <h1 className='skills__t'>{skillsPageMocks.title}</h1>
                    </Animation>
                    <Animation delay={0.4}>
                        <Animation>
                            <ul className='skills__l'>
                                {skillsPageMocks.listLanguages.map(({ id, name, progress }: ISkillsList) => (
                                    <li key={id} className='skills__progress-bar'>
                                        <div>
                                            <div className='skills__progress'>{`${progress}%`}</div>
                                            <div className='skills__title'>{name}</div>
                                            <div
                                                className='skills__bar'
                                                style={{
                                                    width: bar ? `${progress}%` : "0%",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Animation>
                    </Animation>
                    <Animation delay={0.5}>
                        <h2 className='skills__t'>{skillsPageMocks.titleStack}</h2>
                    </Animation>
                    <Animation>
                        <ul className='skills__list'>
                            {skillsPageMocks.listStack.map(el => (
                                <li className='skills__elem' key={el.title}>
                                    {React.createElement(el.icon, {})}
                                    <p>{el.title}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href={skillsPageMocks.buttonAllStack.link}>
                            <a className='skills__b' target='_blank'>
                                <p>{skillsPageMocks.buttonAllStack.title}</p>
                                <span>
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </Animation>
                </div>
            </div>
        </Layout>
    );
};

export default Skills;
