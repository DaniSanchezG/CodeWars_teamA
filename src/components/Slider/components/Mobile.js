import React, {Component} from "react";
import { Slide } from "react-slideshow-image";
import classes from "../css/Mobile.module.css";
import image from "../img/sm-first.jpeg";
import image2 from "../img/sm-second.jpeg";
import image3 from "../img/sm-third.jpeg";
import image4 from "../img/sm-fourth.jpeg";

const slideImages = [
    {
      url: image,
      title: "STAR WARS BEST OF 2022",
      content:
        "StarWars.com´s writers dive into the year´s biggest announcements, releases, and fan-favorite moments",
      button: "READ MORE",
    },
    {
      url: image2,
      title: "FROM SANTA YODA TO ROCKET SLEDS",
      content:
        "A look back at Lucasfilm´s Star Wars holiday cards through the years",
      button: "READ MORE",
    },
    {
      url: image3,
      title: "THE HIGH REPUBLIC SHOW",
      content:
        "Phase II exclusive reveals, a visit to Dark Horse comics, and more!",
      button: "WATCH NOW",
    },
    {
      url: image4,
      title: "FROM A CERTAIN POINT OF VIEW",
      content: "What´s your favorite episode of Andor(so far)?",
      button: "READ MORE",
    },
  ];

class Mobile extends Component {
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
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 200,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className={classes.indicator}>-</div>
    };
    
    return (
        <div className={classes.container}>
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((slideImages, index) => (
              <div className={classes.cont} key={index}>
              <img src={slideImages.url} className={classes.slideImg}/>
              <div className={classes.divText}>
                <span className={classes.title}>{slideImages.title}</span>
                <span className={classes.content}>{slideImages.content}</span>
                <button className={classes.css_button}>
                  {slideImages.button}
                </button>
              </div>
            </div>
            ))}
          </Slide>
      </div>
    );
  }
}
export default Mobile;
