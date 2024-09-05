import * as S from "./styles";

const PopularMemory = () => {
  return (
    <S.PopularMemoryWrapper>
      <S.MemoryCardWrapper>
        <S.MemoryCard>
          <S.MemoryCardImage src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" alt="aa" />
          <S.PopularMemoryTitle className="picture-title">긴제목은이렇게보여집니다</S.PopularMemoryTitle>
        </S.MemoryCard>
        <S.MemoryCard>
          <S.MemoryCardImage src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" alt="aa" />
          <S.PopularMemoryTitle className="picture-title">긴제목은이렇게보여집니다</S.PopularMemoryTitle>
        </S.MemoryCard>
        <S.MemoryCard>
          <S.MemoryCardImage src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" alt="aa" />
          <S.PopularMemoryTitle className="picture-title">짧은 제목</S.PopularMemoryTitle>
        </S.MemoryCard>
      </S.MemoryCardWrapper>
    </S.PopularMemoryWrapper>
  );
};

export default PopularMemory;
