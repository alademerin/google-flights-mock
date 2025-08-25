
const ChevronUp = ({ fill = 'rgb(112, 117, 122)' }: { fill?: string }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" focusable="false" fill={fill}>
      <path d="M7 10l5 5 5-5H7z"></path>
    </svg>
  );
};

export default ChevronUp;
