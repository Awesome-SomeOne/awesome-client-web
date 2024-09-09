import ClearIcon from "@/assets/icons/ClearIcon";
import Chip from "@/components/common/chip/index";
import GeneralHeader from "@/components/common/generalHeader/index";

const RecentSearch = ({
  keywordList,
  onChipClick,
  onChipDelete
}: {
  keywordList: string[];
  onChipClick: (index: number) => void;
  onChipDelete: (index: number) => void;
}) => {
  return (
    <>
      <GeneralHeader title="최근 검색어" />
      <div style={{ height: "100%", padding: "8px 20px", overflow: "scroll" }}>
        {keywordList?.length > 0 &&
          keywordList.map((text, index) => (
            <Chip
              key={index}
              text={text}
              trailingIcon={<ClearIcon />}
              style={{ margin: "0 8px 8px 0" }}
              onChipClick={() => onChipClick(index)}
              trailingIconOnClick={() => onChipDelete(index)}
            />
          ))}
      </div>
    </>
  );
};

export default RecentSearch;
