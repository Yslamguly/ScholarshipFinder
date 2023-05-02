import * as React from 'react';
import '../styles/About.css'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const About = () => {
    const contributors1 = [
        {
            img: 'https://avatars.githubusercontent.com/u/114420065?v=4',
            name: "Waleed Muslem",
            repo: "https://github.com/WaleedMuslem",
            title: 'CEO',
        },
        {
            img: 'https://avatars.githubusercontent.com/u/90982692?v=4',
            name: "Rachid Aifar",
            repo:"https://github.com/RachidAifar",
            title: 'Project Manager',
        },
        {
            img: 'https://avatars.githubusercontent.com/u/94798896?v=4',
            name: "Maxim Curos",
            repo: "https://github.com/MaximusDD2002",
            title: 'Database Manager',
        }
    ];
    const contributors2 = [
        {
            img: 'https://avatars.githubusercontent.com/u/114012819?v=4',
            name: "Hanna Hsoon",
            repo: "https://github.com/h-hsoon",
            title: 'Frontend Developer',
        },
        {
            img: 'https://avatars.githubusercontent.com/u/92810736?',
            name: "Yslamguly Pirgulyyev",
            repo: "https://github.com/Yslamguly",
            title: 'Backend Developer',
        },
    ]
    return (
        <>
            <div className="about-landing">
                <p>ScholrFinder is Network to Provide you latest information about Scholarships, Events,
                    and much about career opportunities. The aim of SF is to create awareness that lets people land
                    their dream jobs, scholarships, and careers. We bring people around the globe closer by providing
                    information about all these opportunities on a single platform. Be a part of our community and let
                    us help you succeed.
                </p>
            </div>
            <div className={'container '}>
                <h1>Our team</h1>
                <div className={'image-container'}>
                    {contributors1.map((contributor) => (
                        <div className="gallery">
                            <a target="_blank" href={contributor.repo}>
                                <img src={contributor.img} alt={contributor.name} width="600" height="400"/>
                            </a>
                            <a className={'hover-underline-animation'} href={contributor.repo}>{contributor.name}</a>

                            <div className="desc">{contributor.title}</div>
                        </div>
                    ))}
                </div>

                <div className={'image-container'}>
                    {contributors2.map((contributor) => (
                        <div className="gallery">
                            <a target="_blank" href={contributor.repo}>
                                <img src={contributor.img} alt={contributor.name} width="600" height="400"/>
                            </a>
                            <a className={'hover-underline-animation'} href={contributor.repo}>{contributor.name}</a>

                            <div className="desc">{contributor.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

