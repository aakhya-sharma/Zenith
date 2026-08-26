import React from "react";

function NotFound() {
    return (
        <div className="py-5" style={{ paddingLeft: "20%" }}>
            <h2>Error 404</h2>
            <p className="fs-5">
                We couldn't find the page you were looking for.
                <br />
                Visit <a href="/" className="text-decoration-none">Zenith's home page</a>.
            </p>
        </div>
    )
}

export default NotFound;