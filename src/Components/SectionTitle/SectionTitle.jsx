
const SectionTitle = ({subTitle, heading}) => {
    return (
        <div className="text-center w-4/12 mx-auto">
            <p className="pb-2 text-orange-500 text-1xl">----{heading}----</p>
            <h3  className="text-4xl font-semibold uppercase border-y-4 py-4">{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;