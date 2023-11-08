import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName=" Game Of Thrones(The Complete Series)"
          price="7999"
          color="Fantasy drama"
          badge={true}
          des="Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. But in a land where seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, a forgotten evil has returned. HBO presents this epic series based on the book series A Song of Ice and Fire by George R.R. Martin."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName=" Hunger games the ballad of songbirds and snakes"
          price="900"
          color="Science Fiction "
          badge={false}
          des="The story of Coriolanus Snow, years before he would become the tyrannical President of Panem. He is handsome and charming, and though the Snow family has fallen on hard times, Coriolanus sees a chance for a change in his fortunes when he is chosen to be a mentor for the 10th Hunger Games only to have his elation dashed when he is assigned to mentor a girl tribute named Lucy Gray Baird from the impoverished District 12."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Harry potter and sorcerer's stone"
          price="6300"
          color="Fantasy film"
          badge={true}
          des="This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="The mans at the ruins film type"
          price="600"
          color="Natural horror"
          badge={false}
          des="he Ruins is directed by Carter Smith and adapted to screenplay by Scott B. Smith from his own novel of the same name. It stars Jonathan Tucker, Jena Malone, Shawn Ashmore, Laura Ramsey and Joe Anderson. Music is by Graeme Revell and cinematography by Darius Khondji.

          Two young couples on holiday in Mexico make friends with a German tourist, Mathias (Anderson), who tells them of his missing brother who had gone off to view a Mayan ruin deep in the jungle. Their interest piqued, they agree to go on the adventure the following day. Once arriving at the remote ruin, though, they all find more than they bargained for...."
        />
      </div>
    </div>
  );
};

export default BestSellers;
