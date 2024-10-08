/**
 * 마이 페이지
 * @Author 백선우
 */

import { useNavigate } from "react-router-dom";

import BottomNavBar from "@/components/common/bottomNavBar";
import { PATH } from "@/constants/path";
import * as S from "./styles";
import { useGetUserInfo } from "@/apis/myPage/myPage.queries";

export default function MyPage() {
  const navigate = useNavigate();

  const { data: userInfo } = useGetUserInfo();

  const Buttons = [
    { text: "계정 정보", url: PATH.ACCOUNT_INFORMATION },
    // { text: "알림 설정", url: PATH.NOTIFICATION_SETTING },
    // { text: "내가 쓴 후기", url: PATH.MY_REVIEW },
    { text: "이용 약관", url: PATH.TERMS },
    { text: "문의하기", url: PATH.CONTACT }
  ];

  const svg = (
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <path
        d="M1.20236 17.6475C1.67238 18.1175 2.43018 18.1175 2.9002 17.6475L10.8714 9.67626C11.2455 9.30216 11.2455 8.69784 10.8714 8.32374L2.9002 0.352518C2.43018 -0.117506 1.67238 -0.117506 1.20236 0.352518C0.732335 0.822542 0.732335 1.58034 1.20236 2.05036L8.1472 9.0048L1.19277 15.9592C0.732335 16.4197 0.732335 17.1871 1.20236 17.6475Z"
        fill="#1A1A1A"
      />
    </svg>
  );

  return (
    <S.Root>
      <S.InnerContainer>
        <S.ProfileSection>
          <S.ProfileImageContainer>
            <S.StyledImage></S.StyledImage>
          </S.ProfileImageContainer>
          <S.StyledNickNameContainer>
            <S.StyledNickName>{userInfo}</S.StyledNickName>
          </S.StyledNickNameContainer>
          {/* <S.ButtonContainer>
            <S.StyledButton onClick={() => navigate(PATH.SETTING_PROFILE)}>수정하기</S.StyledButton>
          </S.ButtonContainer> */}
        </S.ProfileSection>
        <S.ButtonSection>
          {Buttons.map((button) => (
            <S.CommonBtnContainer key={button.text}>
              <S.CommonBtn
                onClick={() => {
                  switch (button.text) {
                    case "문의하기":
                      window.location.href = "https://forms.gle/6WSdBvPYiMocZtUM7";
                      break;
                    case "이용 약관":
                      window.location.href = "https://yumin0630.notion.site/10d6da37b1e98007b976de2b324cf2bf?pvs=4";
                      break;
                    default:
                      navigate(button.url);
                      break;
                  }
                }}
              >
                {button.text}
                <S.CommonImgContainer>{svg}</S.CommonImgContainer>
              </S.CommonBtn>
            </S.CommonBtnContainer>
          ))}
        </S.ButtonSection>
      </S.InnerContainer>
      <BottomNavBar />
    </S.Root>
  );
}
