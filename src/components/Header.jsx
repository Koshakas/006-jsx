import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-2 p-lg-5 bg-light rounded-3 text-center">
                        <div className="m-2 m-lg-5">
                            <h1 className="display-5 fw-bold">Demo Projektas</h1>
                            <p className="fs-4">
                                Bootstrap utility classNamees are used to create this jumbotron since the old component has been removed from the
                                framework. Why create custom CSS when you can use utilities?
                            </p>
                            <a className="btn btn-primary btn-lg" href="#!">
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
