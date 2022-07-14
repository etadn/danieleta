import Link from 'next/link'

function Overlay({ openOverlay, toggleOverlay, toggleDark }) {
    return ( 
        <>
            <div id="mobile-nav" className={`overlay ${openOverlay ? "make-full-width" : ""}  `}>
                <a href="javascript:void(0)" className="closebtn" onClick={ toggleOverlay }>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.05 13.65L0 12.6L5.775 6.825L0 1.05L1.05 0L6.825 5.775L12.6 0L13.65 1.05L7.875 6.825L13.65 12.6L12.6 13.65L6.825 7.875L1.05 13.65Z" fill="white"/>
                    </svg>    
                </a>

                <a href="javascript:void(0)" className="changetheme" onClick={ toggleDark }>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C11.4 0 11 0.4 11 1V2C11 2.6 11.4 3 12 3C12.6 3 13 2.6 13 2V1C13 0.4 12.6 0 12 0ZM4.19922 3.19922C3.94922 3.19922 3.7 3.3 3.5 3.5C3.1 3.9 3.1 4.50039 3.5 4.90039L4.19922 5.59961C4.59922 5.99961 5.19961 5.99961 5.59961 5.59961C5.99961 5.19961 5.99961 4.59922 5.59961 4.19922L4.90039 3.5C4.70039 3.3 4.44922 3.19922 4.19922 3.19922ZM19.8008 3.19922C19.5508 3.19922 19.2996 3.3 19.0996 3.5L18.4004 4.19922C18.0004 4.59922 18.0004 5.19961 18.4004 5.59961C18.8004 5.99961 19.4008 5.99961 19.8008 5.59961L20.5 4.90039C20.9 4.50039 20.9 3.9 20.5 3.5C20.3 3.3 20.0508 3.19922 19.8008 3.19922ZM12 5C10.1435 5 8.36301 5.7375 7.05025 7.05025C5.7375 8.36301 5 10.1435 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C8.36301 18.2625 10.1435 19 12 19C13.8565 19 15.637 18.2625 16.9497 16.9497C18.2625 15.637 19 13.8565 19 12C19 10.1435 18.2625 8.36301 16.9497 7.05025C15.637 5.7375 13.8565 5 12 5ZM1 11C0.4 11 0 11.4 0 12C0 12.6 0.4 13 1 13H2C2.6 13 3 12.6 3 12C3 11.4 2.6 11 2 11H1ZM22 11C21.4 11 21 11.4 21 12C21 12.6 21.4 13 22 13H23C23.6 13 24 12.6 24 12C24 11.4 23.6 11 23 11H22ZM4.90039 18.0996C4.65039 18.0996 4.39922 18.2004 4.19922 18.4004L3.5 19.0996C3.1 19.4996 3.1 20.1 3.5 20.5C3.9 20.9 4.50039 20.9 4.90039 20.5L5.59961 19.8008C5.99961 19.4008 5.99961 18.8004 5.59961 18.4004C5.39961 18.2004 5.15039 18.0996 4.90039 18.0996ZM19.0996 18.0996C18.8496 18.0996 18.6004 18.2004 18.4004 18.4004C18.0004 18.8004 18.0004 19.4008 18.4004 19.8008L19.0996 20.5C19.4996 20.9 20.1 20.9 20.5 20.5C20.9 20.1 20.9 19.4996 20.5 19.0996L19.8008 18.4004C19.6008 18.2004 19.3496 18.0996 19.0996 18.0996ZM12 21C11.4 21 11 21.4 11 22V23C11 23.6 11.4 24 12 24C12.6 24 13 23.6 13 23V22C13 21.4 12.6 21 12 21Z" fill="white"/>
                    </svg>         
                </a>

                <div className="nav-links">
                    <ul>                         
                        <li>
                            <Link href="https://medium.com/@daniel.eta">
                                <a href="#">Writing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/software">
                                <a href="#">Software</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a href="#">Design & UI</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default Overlay;