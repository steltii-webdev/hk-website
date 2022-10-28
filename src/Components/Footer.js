import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="/About" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
                <p className="text-center text-muted">© 2022 HK-Tekniikka</p>
            </footer>
        </div>
    )
}
