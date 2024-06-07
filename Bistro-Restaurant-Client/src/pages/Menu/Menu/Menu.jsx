import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Bistro Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title="Our Menu"></Cover>

            {/* ?main conver */}
            <SectionTitle
                subHeading="Don't miss"
                heading="Today Offers"></SectionTitle>

            {/* offered menu items */}
            <MenuCategory
                items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
                items={dessert}
                title="Dessert"
                img={dessertImg}></MenuCategory>

            {/* pizza */}
            <MenuCategory
                title="Pizza"
                items={pizza}
                img={pizzaImg}></MenuCategory>

            {/* salad */}
            <MenuCategory
                title="Salad"
                items={salad}
                img={saladImg}></MenuCategory>

            {/* soup */}
            <MenuCategory
                title="Soup"
                items={soup}
                img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;