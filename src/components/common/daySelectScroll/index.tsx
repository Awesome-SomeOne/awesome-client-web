import { useState } from "react";

import * as S from "./styles";

const DaySelectScroll = () => {
  const [selectedTab, setSelectedTab] = useState("dd");
  console.log("selectedTab", selectedTab);
  return (
    <S.NavContainer>
      <S.FlexContainer>
        {["dd", "dfs"].map((item) => (
          <S.Tab key={item} className={item === selectedTab ? "selected" : ""} onClick={() => setSelectedTab(item)}>
            <div>{`${item}`}</div>
            {item === selectedTab ? <S.UnderLine layoutId="underline" /> : null}
          </S.Tab>
        ))}
      </S.FlexContainer>
    </S.NavContainer>
  );
};

export default DaySelectScroll;
