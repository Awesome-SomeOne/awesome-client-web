const BottomNavCommunityIcon = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.7019 2.7019C3.3114 2.09241 4.13805 1.75 5 1.75H19C19.862 1.75 20.6886 2.09241 21.2981 2.7019C21.9076 3.3114 22.25 4.13805 22.25 5V15C22.25 15.862 21.9076 16.6886 21.2981 17.2981C20.6886 17.9076 19.862 18.25 19 18.25H7.51777L3.88388 21.8839C3.52639 22.2414 2.98874 22.3483 2.52165 22.1549C2.05455 21.9614 1.75 21.5056 1.75 21V5C1.75 4.13805 2.09241 3.3114 2.7019 2.7019Z"
        fill={isSelected ? "#1A80E5" : "#D1E5FA"}
      />
    </svg>
  );
};

export default BottomNavCommunityIcon;
