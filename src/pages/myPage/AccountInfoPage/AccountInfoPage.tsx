/**
 * 계정 정보 페이지
 * @Author 백선우
 */

import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import SimpleModal from "@/components/common/simpleModal";
import { useNavigate } from "react-router-dom";
import Kakao from "/images/kakao.png";
import * as S from "./styles";
import { useState } from "react";

export default function AccountInfoPage() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  function logoutHandler() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "logout" }));
  }

  function removeAccountHandler() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "removeAccount" }));
  }

  return (
    <>
      <SimpleModal
        image="/images/warning.svg"
        title="정말 탈퇴하시겠습니까?"
        content="탈퇴한 계정은 다시 복구할 수 없어요"
        firstButtonText="취소"
        firstButtonOnClick={() => setModalOpen(false)}
        secondButtonText="탈퇴하기"
        secondButtonOnClick={removeAccountHandler}
        isOpen={modalOpen}
        close={() => setModalOpen(false)}
      />
      <S.Root>
        <Appbar
          title="계정 정보"
          textAlign="center"
          leftIcon={
            <div onClick={() => navigate(-1)}>
              <BackIcon />
            </div>
          }
        />
        <S.TopSection>
          <S.StyledImg src={Kakao} />
          <S.StyledText>카카오 로그인</S.StyledText>
        </S.TopSection>
        <S.BottomSection>
          <S.LeftContainer>
            <S.StyledButton onClick={logoutHandler}>로그아웃</S.StyledButton>
          </S.LeftContainer>
          <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V12" stroke="#70737C" strokeOpacity="0.6" />
          </svg>
          <S.RightContainer>
            <S.StyledButton onClick={() => setModalOpen(true)}>회원 탈퇴</S.StyledButton>
          </S.RightContainer>
        </S.BottomSection>
      </S.Root>
    </>
  );
}
