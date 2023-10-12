const SectionTitle = ({ text}) => {
  return (
    <div className='border-b border-gray-200 pb-5 '>
      <h2 className='text-3xl font-medium tracking-wider capitalize Background-Image-Title  hover:Background-Image-Paragraph'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
