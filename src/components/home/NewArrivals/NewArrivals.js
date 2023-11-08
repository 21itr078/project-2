import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="The Wise Man's Fear"
            price="500"
            color="Fantasy Novel"
            badge={true}
            des="There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.”

            My name is Kvothe.
            I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Percy Jackson: Sea of Monsters"
            price="150"
            color="Adventure/Fantasy"
            badge={true}
            des="Though Percy (Logan Lerman), the half-human son of Greek god Poseidon, once saved the world, lately he's been feeling less than heroic. However, he doesn't have much time to brood -- the enchanted borders that protect Camp Half-Blood are dissolving, and a horde of mythical beasts threatens the demigods' sanctuary. In order to save Camp Half-Blood, Percy and his friends embark on a journey to the Sea of Monsters -- aka the Bermuda Triangle -- to find the magical Golden Fleece."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Three Men in a Boat"
            price="1500"
            color="Comedy novel"
            badge={true}
            des="We agree that we are overworked, and need a rest - A week on the rolling deep? - George suggests the river - And with the co-operation of several hampers of food and a covered boat, the three men (not forgetting the dog) set out on a hilarious voyage of mishaps up the Thames. When not falling in the river and getting lost in Hampton Court Maze, Jerome K. Jerome finds time to express his ideas on the world around - many of which have acquired a deeper fascination since the day at the end of the 19th century when this excursion was so lightly undertaken."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Bret Easton Ellis "
            price="2050"
            color="Transgressive fiction"
            badge={false}
            des="Bret Easton Ellis’s masterful new novel is a story about the end of innocence, and the perilous passage from adolescence into adulthood, set in a vibrantly fictionalized Los Angeles in 1981 as a serial killer begins targeting teenagers throughout the city."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrOne}
            productName="The Wise Man's Fear"
            price="1200"
            color="Mixed"
            badge={false}
            des="There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.”

            My name is Kvothe.
            I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
