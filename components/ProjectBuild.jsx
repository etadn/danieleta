import styles from "../styles/Work.module.css"
import de from '../public/project/de.png'
import Image from "next/image"

export default function ProjectBuild({ img, name, description, link, isDark, show }) {
    // console.log(de)
    // console.log(img)
    // console.log(name)
    // console.log(description)
    // console.log(link)

    const bgStyle = {
        background: `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    const permBgStyle = {
        background: `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    const addBackground = (e) => {
        // e.target.style.background = ''
        e.target.style.background = `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    const removeBackground = (e) => { 
        e.target.style.background = 'none'
    }
    
    return (
        <div 
            onMouseEnter={addBackground} 
            onMouseLeave={removeBackground}
            className={styles.build}
        >
            <div className={styles.img}>
                <Image 
                    src={img}
                    alt="de"
                />
            </div>
            <h1 id={`${isDark ? "" : "black-txt"}`}>{name}</h1>
            <p id={`${isDark ? "" : "black-txt"}`}>{description}</p>
            <a id={`${isDark ? "" : "black-txt"}`} href="#">
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.12105 6.55552C2.6649 6.55552 3.20877 6.42031 3.62268 6.14897L5.4831 4.92857C5.63816 4.82692 5.63816 4.663 5.4831 4.56135C5.32804 4.4597 5.07799 4.4597 4.92293 4.56135L3.06251 5.78176C2.54369 6.12187 1.69973 6.12187 1.17959 5.78176C0.660763 5.44164 0.660763 4.88752 1.17959 4.54741L3.04123 3.327C3.1963 3.22535 3.1963 3.06143 3.04123 2.95978C2.88617 2.85813 2.63612 2.85813 2.48106 2.95978L0.620732 4.18024C-0.206911 4.7228 -0.206911 5.6064 0.620732 6.14895C1.03455 6.42023 1.57843 6.55549 2.12105 6.55549V6.55552Z" fill="#5EE2FF" fill-opacity="0.81"/>
                    <path d="M7.87991 5.85681e-05C7.31103 5.85681e-05 6.77841 0.144305 6.37828 0.406605L4.51663 1.6262C4.36156 1.72785 4.36156 1.89177 4.51663 1.99342C4.67169 2.09507 4.92174 2.09507 5.0768 1.99342L6.93845 0.772961C7.43851 0.445142 8.3213 0.444279 8.82137 0.772961C9.34019 1.11308 9.34019 1.6672 8.82137 2.00731L6.95972 3.22691C6.80466 3.32856 6.80466 3.49248 6.95972 3.59413C7.03726 3.64495 7.13851 3.67034 7.23976 3.67034C7.34102 3.67034 7.44227 3.64495 7.5198 3.59413L9.38145 2.37373C10.2091 1.83117 10.2091 0.948419 9.38145 0.405757C8.98141 0.144253 8.44749 0 7.87991 0V5.85681e-05Z" fill="#5EE2FF" fill-opacity="0.81"/>
                    <path d="M2.16236 5.13829C2.2399 5.18911 2.34115 5.2145 2.4424 5.2145C2.54366 5.2145 2.64491 5.18911 2.72245 5.13829L7.83878 1.78355C7.99384 1.68189 7.99384 1.51797 7.83878 1.41633C7.68371 1.31467 7.43366 1.31467 7.27861 1.41633L2.1625 4.77107C2.00752 4.87272 2.00752 5.03664 2.1625 5.13829H2.16236Z" fill="#5EE2FF" fill-opacity="0.81"/>
                </svg>

                    github.com
            </a>

        </div>
    )
}