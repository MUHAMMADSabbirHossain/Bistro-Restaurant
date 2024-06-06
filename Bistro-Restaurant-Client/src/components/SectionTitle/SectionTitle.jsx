const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>

            <h3 className="border-y-4 uppercase text-3xl py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;