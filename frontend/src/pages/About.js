import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../styles/About.css'

export const About = () => {
    const contributors1 = [
        {
            img: 'https://avatars.githubusercontent.com/u/114420065?v=4',
            name: "Waleed Muslem",
            repo: "",
            title: 'CEO',
        },
        {
            img: 'https://avatars.githubusercontent.com/u/90982692?v=4',
            name: "Rachid Aifar",
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
            repo:"https://github.com/Yslamguly",
            title: 'Backend Developer',
        },
    ]
    return (
        <div className={'container'}>
            <div className={'image-container'}>
                {contributors1.map((contributor) => (
                    <div className="gallery">
                        <a target="_blank" href={contributor.repo}>
                            <img src={contributor.img} alt={contributor.name} width="600" height="400"/>
                        </a>
                        <div className="name">{contributor.name}</div>

                        <div className="desc">{contributor.title}</div>
                    </div>
                ))}
            </div>

            <div className={'image-container'}>
                {contributors2.map((contributor)=>(
                    <div className="gallery">
                        <a target="_blank" href={contributor.repo}>
                            <img src={contributor.img} alt={contributor.name} width="600" height="400"/>
                        </a>
                        <div className="name">{contributor.name}</div>

                        <div className="desc">{contributor.title}</div>
                    </div>
                ))}
            </div>
            <h1>ewnfewlk</h1>
        </div>
    );
}

