import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context'


const Submenu  = () => {
    const{isSubmenuOpen, location, currentPage} = useGlobalContext();
    const container = useRef(null);
    const [columns, setcolumns] = useState('col-2')

    const {page, links} = currentPage
    useEffect(() => {
        setcolumns('col-2')
        const submenu = container.current;
        const {center, bottom} = location
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`

        if(links.length>10)
        {
            setcolumns('col-5')
        }else if(links.length>6)
        {
            setcolumns('col-3')
        }
    }, [location, links])

    
    return <section className={`${isSubmenuOpen ? 'submenu show':'submenu'}`} ref={container}>
        <h4>{page}</h4>
        <article className={`sub-links ${columns}`}>
            {
                links.map((link, index) => {
                    const {label, icon, url} = link;
                    return <a key={index} href={url}>
                        <span>{icon}</span>{label}
                    </a>
                })
            }
        </article>
    </section>
}

export default Submenu