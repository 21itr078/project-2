import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="The Girl Who Fell from the Sky"
          price="1100"
          color="a memoir"
          badge={true}
          des="From a terrible accident that left her paraplegic, Emma Carey has become an inspiration for hundreds of thousands online to live life to the fullest and remind us that if we can, we must.

          There on that helicopter, somewhere over Switzerland on a Sunday in June, came the first tiny whisper. A voice that would carry me for years to come. 'I'm going to be ok. There's still joy here.'
          
          
          When Emma Carey was twenty, she fell from 14,000 feet and survived. In The Girl Who Fell From the Sky Emma tells us the inspirational story of how, through one of her greatest tragedies, she found her truest self.
          
          From waking in the hospital a paraplegic to learning how to use her legs again, through the six-year long court case and now being finally free to make the most of her life, Emma teaches us the importance of courage and resilience."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Serafina and the Black Cloak"
          price="1700"
          color="Fantasy, Historical Fiction"
          badge={true}
          des="Serafina has never had a reason to disobey her pa and venture beyond the grounds of the Biltmore estate. There’s plenty to explore in her grand home, although she must take care to never be seen. None of the rich folk upstairs know that Serafina exists; she and her pa, the estate’s maintenance man, have secretly lived in the basement for as long as Serafina can remember."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Christopher Robin"
          price="2050"
          color="Drama/Family"
          badge={true}
          des="Christopher Robin -- now a family man living in London -- receives a surprise visit from his old childhood pal, Winnie-the-Pooh. With Christopher's help, Pooh embarks on a journey to find his friends -- Tigger, Eeyore, Owl, Piglet, Rabbit, Kanga and Roo. Once reunited, the lovable bear and the gang travel to the big city to help Christopher rediscover the joy of life."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="The Intended(A Culling of Blood and Magic)"
          price="2200"
          color="
          Fantasy Romance,Paranormal Romance"
          badge={true}
          des="Emery may have survived the Culling, but now she’s on the run.

          Forced to find her way in a world of magic behind the wards of New Orleans, Emery struggles to accept her newfound identity as a witch and a mother. Her coven is demanding that she choose between the magic she’s always wanted and the child she already loves. "
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
