import { RiEqualizer3Line } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const lists=['Banana', 'Mango','orang','Pinaple','lichi', 'Mango','orang','Pinaple','lichi',, 'Mango','orang','Pinaple','lichi',]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "currentColor", background:'currentColor',borderRadius:'4px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "currentColor", background:'currentColor',borderRadius:'4px' }}
      onClick={onClick}
    />
  );
}
const  CategorySlide=()=> {
  const settings = {
    dots:true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:false,
          nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots:false,
          nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  };
  
  return (
    <div className='lg:w-full h-20 md:2/3 w-full mb-16   lg:ml-0  bg-white '>
      <div className="grid grid-cols-2 lg:flex lg:flex-1 lg:ml-10" >
      <div className="items-center justify-between lg:w-full  snap-mandatory snap-start snap-x -mr-24 lg:-mr-32   ">
          
        <Slider {...settings}>
        {lists.map(list =>
        <h1 key={list} >
          {list}
          </h1>
      )}
      </Slider>
     
        </div>
        <RiEqualizer3Line className="text-2xl lg:ml-28 ml-36"></RiEqualizer3Line>
        </div>
    </div>
  );
}
export default CategorySlide;