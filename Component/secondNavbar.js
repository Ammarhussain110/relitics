import React from 'react';
import Link from "next/link"
import { useRouter } from "next/router"


export default function SecondNav() {
    const router = useRouter();
    const eventId = router.query.id
    const eventCategory = router.query.slug ? router.query.slug[0] : '';
    return (
        <div className=' bg-lightBlue sec_nav'>
            <ul className="nav container ps-4">
                <Link href={`/MarketStats/${eventId}`} className="dropdown-item">
                    <button className={`btn fs-15 nav-link py-3 px-5 border-L_white ${router.pathname.includes('MarketStats') ? "active" : 'text-white '}`} href="#">Market</button>
                </Link>
                <Link href={`/EconomicStats/${eventId}`} className="dropdown-item">
                    <button className={`btn fs-15 nav-link py-3 px-5 border-L_white ${router.pathname.includes('EconomicStats') ? "active" : 'text-white '}`} href="#">Economic</button>
                </Link>
                <Link href={`/DemographicStats/${eventId}`} className="dropdown-item">
                    <button className={`btn fs-15 nav-link py-3 px-5 border-L_white ${router.pathname.includes('DemographicStats') ? "active" : 'text-white '}`} href="#">Demographic</button>
                </Link>
                <Link href={`/Notes/${eventId}`} className="dropdown-item">
                    <button className={`btn fs-15 nav-link py-3 px-5 border-L_white ${router.pathname.includes('Notes') ? "active" : 'text-white '}`} href="#">Notes</button>
                </Link>
            </ul>
        </div>)
}
