import React from 'react';
import Link from 'next/link'

const TopNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                    aria-controls="offcanvasExample"
                >
                    <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                </button>
                <Link href="/" >
                    <a className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold">
                        <i className="bi bi-stars"></i> Space Portal
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default TopNavBar;