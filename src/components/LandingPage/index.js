import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    render()
    {
        return(
            <div>
                <h1 className="titles">Landing Page</h1>
                <nav id="menu">
                    <div className="row">
                        <div className="col Menu">
                        <Link to ="/login">
                            Login
                        </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col Menu">
                            <Link to ="/profile">
                                Profile Page
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col Menu">
                            <Link to ="/pinterest">
                                Pinterest
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default LandingPage;