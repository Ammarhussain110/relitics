import React from 'react';
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'
import Link from 'next/link';

const CokiePolicy = () => {
    return (
        <>
            <Navbar />
            <HeadImage header='COOKIE POLICY' />
            <div className='container mb-5'>
                <div className="line_height  py-5 px-2 mx-auto">
                    <p className='fs-16'>
                        Last updated: November 23, 2021.
                    </p>
                    <p className=' fs-16'>
                        We make use of cookies on our Website!
                    </p>
                    <p className='fs-16'>
                        A cookie is a small text file that is stored on your browser or the hard drive when you access a Website. Cookies help us improve our user experience by recognizing you when you revisit the Website  </p>
                    <p className=' fs-16'>
                        REI Litics makes use of cookies to offer the best user experience and to collect/analyze data to improve our Platform&#39;s operating performance. When you access our Platform, we may place cookies in your browser, which enables us to obtain session information and improve your user experience (Session Cookies) or we may place persistent cookie that allows us to collect and analyze traffic and use of the Platform to monitor and improve our Platform performance (Persistent Cookies).
                    </p>
                    <p className='fs-16'>
                        There are different types of cookies. Please note that we can use cookies without obtaining your consent, provided such cookies are strictly necessary. However, if we use cookies that are not strictly necessary, we can only use them with your consent. You can withdraw your consent at any time.
                    </p>
                    <ul className=''>
                        <li className=''>
                            <p className='fs-18 Bolder'>
                                Types of cookies on our Website
                            </p>
                            <p className=' fs-16'>
                                We currently use three main types of cookies on our Website: strictly necessary cookies, functionality cookies, and analytics cookies. Please note that although some of these cookies come from our Website, others may come from third-party services that we use.
                            </p>
                            <ul>
                                <li>
                                    <p className=' fs-18 Bolder'>
                                        Strictly Necessary Cookies
                                    </p>
                                    <p className=' fs-16'>
                                        Strictly necessary cookies are required to make a Website usable and enable you to navigate through the Website. These are session cookies and removed at the end of the session. Without the use of strictly necessary cookies, some areas of our Website will not be usable. We do not require your permission to use strictly necessary cookies on our Website.
                                    </p>
                                </li>
                                <li>
                                    <p className=' fs-18 Bolder'>
                                        Functionality Cookies
                                    </p>
                                    <p className=' fs-16'>
                                        Functionality cookies are used to remember your choices/preferences based on your past selection such as your username, location, etc. Your preferences are remembered through the use of persistent cookies so that you do not have to set them each time you visit the Platform. </p>
                                </li>
                                <li>
                                    <p className=' fs-18 Bolder'>
                                        Analytics Cookies
                                    </p>
                                    <p className=' fs-16'>
                                        We make use of Google Analytics which collects information when you visit our Website, such as your Internet Protocol (IP) address, browser type, and version, date/time of your visit, etc. Google Analytics is a service offered by Google LLC. Google Analytics uses cookies that are stored on your device and enables us to analyze how our visitors behave on the Website and serve more relevant content for a better user experience.
                                    </p>
                                </li>
                                <p className=' fs-16'>
                                    All information collected from you is stored on Google servers located in the United States of America. You can learn more about Google&#39;s privacy practices at this <Link href='https://policies.google.com/technologies/partner-sites'> link</Link>.
                                </p>
                                <p className=' fs-16'>
                                    You can stop these cookies from being stored on your computer by installing the browser plug-in available <Link href='https://tools.google.com/dlpage/gaoptout?hl=en'> here</Link>.
                                </p>
                            </ul>
                        </li>
                        <li className=''>
                            <p className='fs-18 Bolder'>
                                Blocking Cookies
                            </p>
                            <p className=' fs-16'>
                                You can turn off cookies or remove them from your device by changing your browser settings at any time. To learn more about how you can manage cookies on your browser, please visit the applicable browser links provided hereunder:
                            </p>
                            <ul className='fs-16'>

                                <li>
                                    <Link href='https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en'>
                                        <a target='_blank'>
                                            Google Chrome
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&amp;redirectlocale=en-US'>
                                        <a target='_blank'>
                                            Mozilla Firefox
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd'>
                                        <a target='_blank'>
                                            Microsoft Edge
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d'>
                                        <a target='_blank'>
                                            Internet Explorer
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://help.opera.com/en/latest/security-and-privacy/'>
                                        <a target='_blank'>
                                            Opera
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.apple.com/uk/legal/privacy/en-ww/cookies/'>
                                        <a target='_blank'>
                                            Safari
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <p className=' fs-16'>
                                Please note that blocking cookies may result in a poor user experience.
                            </p>
                            <p className=' fs-16'>
                                To learn more about how to delete cookies, please visit    </p>
                            <Link href='https://www.aboutcookies.org/how-to-delete-cookies/'>
                                <a className=' fs-16' target='_blank'>
                                    https://www.aboutcookies.org/how-to-delete-cookies/.
                                </a>
                            </Link>
                        </li>
                        <li className=''>
                            <p className='fs-18 Bolder'>
                                Changes to this Cookie Policy
                            </p>
                            <p className=' fs-16'>
                                We have the right to update this Cookie Policy at any time. </p>
                        </li>
                    </ul>
                </div>
            </div>
            <Foter />
        </>
    )
}
export default CokiePolicy;