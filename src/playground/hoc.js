//High Order Component;

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info :{props.info}</p>
    </div>
)

const withAdmin = (Wrapped) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private tamere je m'en branle severe</p>}
            <Wrapped {...props} />
        </div>
    );
};

const AuthRequire = (Wrapped) => {
    return (props) => (
        <div>
            {props.registered ? <Wrapped {...props} /> : <p> Go login</p>}

        </div>
    );
};

const AdminInfo = withAdmin(Info);
const AuthInfo = AuthRequire(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="ici connard" />, document.getElementById('app'))
ReactDOM.render(< AuthInfo registered={false} info="Bienvenue" />, document.getElementById('app'));