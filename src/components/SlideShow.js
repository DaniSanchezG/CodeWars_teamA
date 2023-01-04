import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import ImagePreview from "./ImagePreview";
import { ProgressBar } from "./ProgressBar";
import "react-slideshow-image/dist/styles.css";
import classes from "../css/SlideShow.module.css";
import image1 from "../img/first.jpeg";
import image2 from "../img/second.jpeg";
import image3 from "../img/third.jpeg";
import image4 from "../img/fourth.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const slideImages = [
  {
    index: 1,
    url: image1,
    title: "STAR WARS BEST OF 2022",
    content:
      "StarWars.com´s writers dive into the year´s biggest announcements, releases, and fan-favorite moments",
    button: "READ MORE",
    css: {
      width: "480px",
      position: "absolute",
      color: "white",
      textAlign: "left",
      zIndex: "5",
      top: "24%",
      paddingLeft: "80px",
    },
    css_button: {
      backgroundColor: "#ffdb27",
      color: "black",
      fontWeight: "700",
      fontSize: "15px",
      border: "#ffdb27 1px solid",
      borderRadius: "5rem",
      padding: "15px 60px",
      display: "block",
      marginTop: "30px",
    },
  },
  {
    index: 2,
    url: image2,
    title: "FROM SANTA YODA TO ROCKET SLEDS",
    content:
      "A look back at Lucasfilm´s Star Wars holiday cards through the years",
    button: "READ MORE",
    css: {
      width: "480px",
      position: "absolute",
      color: "white",
      textAlign: "left",
      zIndex: "5",
      top: "24%",
      paddingLeft: "80px",
    },
    css_button: {
      backgroundColor: "#ffdb27",
      color: "black",
      fontWeight: "700",
      fontSize: "15px",
      border: "#ffdb27 1px solid",
      borderRadius: "5rem",
      padding: "15px 60px",
      display: "block",
      marginTop: "30px",
    },
  },
  {
    index: 3,
    url: image3,
    title: "THE HIGH REPUBLIC SHOW",
    content:
      "Phase II exclusive reveals, a visit to Dark Horse comics, and more!",
    button: "WATCH NOW",
    css: {
      width: "480px",
      position: "absolute",
      color: "white",
      textAlign: "left",
      zIndex: "5",
      top: "24%",
      paddingLeft: "80px",
    },
    css_button: {
      backgroundColor: "#ffdb27",
      color: "black",
      fontWeight: "700",
      fontSize: "15px",
      border: "#ffdb27 1px solid",
      borderRadius: "5rem",
      padding: "15px 60px",
      display: "block",
      marginTop: "30px",
    },
  },
  {
    index: 4,
    url: image4,
    title: "FROM A CERTAIN POINT OF VIEW",
    content: "What´s your favorite episode of Andor(so far)?",
    button: "READ MORE",
    css: {
      width: "600px",
      position: "absolute",
      color: "white",
      textAlign: "center",
      zIndex: "5",
      top: "28%",
      alignItems: "center",
      marginLeft: "72%",
    },
    css_button: {
      backgroundColor: "#ffdb27",
      color: "black",
      fontWeight: "700",
      fontSize: "15px",
      border: "#ffdb27 1px solid",
      borderRadius: "5rem",
      padding: "15px 60px",
      marginTop: "30px",
    },
  },
];

class SlideShow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }
  
  render() {

    const buttonStyle = {
      margin:'0em 1em 0 1em',
      width: "35px",
      borderRadius:'5rem',
      height:"35px",
      color:'none',
      backgroundColor: 'white',
      opacity:'.5',
      border: '0px',
      fontSize:'30px'
  };
  const indicatorsCss={
    width:'140px',
    height:'80px',
    marginRight:'0.5em',
    left:'25%',
    zIndex:'1000', 
    backgroundColor: 'white',
    opacity:0.1,
    top:'0',
    
  };
  const indicators=()=>(<div style={{...indicatorsCss}}></div>)
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 200,
      arrows: true,
      infinite: true,
      easing: "ease",
      prevArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronLeft}/></button>,
      nextArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronRight}/></button>,  
    };

    return (
      <div className={classes.container}>
        <div>
          <Slide indicators={indicators} ref={this.slideRef} {...properties}>
            {slideImages.map((slideImages, index) => (
              <>
                <div className={classes.conta} key={index}>
                  <img src={slideImages.url} className={classes.slideImg} />
                </div>
                <div style={slideImages.css}>
                  <span className={classes.title}>{slideImages.title}</span>
                  <span className={classes.content}>{slideImages.content}</span>
                  <button style={slideImages.css_button}>
                    {slideImages.button}
                  </button>
                </div>
              </>
            ))}
          </Slide>
        </div>
        <div className={classes.img_preview}>
          <ImagePreview />
        </div>
      </div>
    );
  }
}
export default SlideShow;
