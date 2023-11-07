
const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div className="text-center md:w-4/12 my-8 mx-auto">
            <p className="text-yellow-400 mb-2">--- {subHeading} ---</p>
            <h1 className="text-2xl uppercase border-y-4 py-4">{Heading}</h1>
        </div>
    );
};

export default SectionTitle;