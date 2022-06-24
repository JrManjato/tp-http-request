import React, { useState } from "react";

export function Modale(props) {
    const [children,buttonName] = props;
    const [defclass, setDefclass] = useState('parent cacher')
    function toggles() {
      defclass === 'parent cacher' ? setDefclass('parent') : setDefclass('parent cacher')
    }
    return (
        <div className={defclass}>
        <div className="madal-conteneur" >
          <div className="modal-window">
            {children}
            <button className="btn btn-primary" onClick={toggles} id="Addbutton">{buttonName}</button>
          </div>
        </div>
      </div>
    );
}
