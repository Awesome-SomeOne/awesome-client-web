import styled from "@emotion/styled";

import StarIcon from "@/assets/icons/StarIcon";

const StarRate = () => {
  return (
    <StarIconWrapper>
      <StarIcon fill />
      <StarIcon fill />
      <StarIcon fill />
      <StarIcon fill />
      <StarIcon fill />
    </StarIconWrapper>
  );
};

export default StarRate;

const StarIconWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
