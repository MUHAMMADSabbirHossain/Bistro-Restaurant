import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item text-white">
            <SectionTitle
                heading={`Featured Item`}
                subHeading={`Check it out`}></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
                <div><img src={featured} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="">Where can i get some?</p>
                    <p>Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism cells to provide energy, maintain life, or stimulate growth.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;