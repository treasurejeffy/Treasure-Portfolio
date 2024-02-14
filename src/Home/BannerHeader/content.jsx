import { ReactTyped } from "react-typed";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Button} from "react-bootstrap";
import css from '../BannerHeader/content.module.css';
import treasure from '../BannerHeader/webDeveloper.gif';
import { Arrow90degDown, ArrowDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


 const MyContent = () => (
    <div className={`${css.banner} `}>            
      <Container >
        <Row lg={2} sm={1} md={1} xs={1} className={`${css.header} align-items-center`}>
            <Col >
                <h2>
                   <span className="text-danger">Hello!</span> <ReactTyped strings={[` I'm <span>Treasure Chianugo Japheth</span>, a passionate and creative web developer with a keen eye for details and a love for crafting beautiful and functional websites. I specialize in [e.g. front-end development, responsive design, JavaScript frameworks].`]} typeSpeed={70} />
                    <br />
                    
                    <ReactTyped
                      typeSpeed={70}
                      backSpeed={50}
                      attr="placeholder"
                      loop
                    >
                    </ReactTyped>
                </h2>
                <Link to={'/AboutMe'}><Button className={`${css.btns} btn btn-danger px-4 py-2 fs-5 `}> More About Me<ArrowDown/> </Button></Link>
            </Col>
            <Col className="text-center">
                <img src={treasure} alt="Treasure" className="img-fluid" />
            </Col>
        </Row>
      </Container>
    </div>
  );

export default MyContent