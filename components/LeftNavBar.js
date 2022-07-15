import React from 'react';
import Link from 'next/link'
import styles from '../styles/LeftNavBar.module.scss';

const LeftNavBar = () => {
    return (
        <div
            className={'offcanvas offcanvas-start bg-dark ' + styles.sidebar__nav }
            tabIndex="-1"
            id="sidebar"
        >
            <div className="offcanvas-body p-0">
                <nav className="navbar-dark">
                    <ul className="navbar-nav">
                        <li>
                            <Link href="/people">
                                <a className="nav-link px-3 py-3">
                                    <span className="me-2"><i className="bi bi-person-badge"></i></span>
                                    <span>People</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/vehicles">
                                <a className="nav-link px-3 py-3">
                                    <span className="me-2"><i className="bi bi-airplane-fill"></i></span>
                                    <span>Vehicles</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/species">
                                <a className="nav-link px-3 py-3">
                                    <span className="me-2"><i className="bi bi-bug-fill"></i></span>
                                    <span>Species</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planets">
                                <a className="nav-link px-3 py-3">
                                    <span className="me-2"><i className="bi bi-globe2"></i></span>
                                    <span>Planets</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default LeftNavBar;