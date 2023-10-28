import { Link } from 'react-router-dom'
import hero_picture from '../Images/headervent1.png'
import services from '../data/services.json'

const Hero = () => {
    return ( 
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">HK-tekniikka</h1>
                        <div className="hero_list">
                            <h3>Työhön kuuluu:</h3>
                            <ul>
                                {services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to="/contact">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                                Ota yhteyttä
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={hero_picture} alt="" height="600vh"/>
                </div>
            </div>
        </div>
     );
}

export default Hero;