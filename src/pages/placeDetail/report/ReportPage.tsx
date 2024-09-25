import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import Radio from "@/components/common/radio/index";
import { REPORT_REASON_LIST } from "@/constants/homePageConstants";
import { useRef, useState } from "react";
import * as S from "./styles";

const ReportPage = ({ onClose }: { onClose: () => void }) => {
  const [selectedReason, setSelectedReason] = useState<string>();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };

  const handleReport = () => {
    // 신고 처리하기
    onClose();
  };

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <GeneralHeader title="신고하려는 이유를 알려주세요" titleSize="lg" spacingSize="md" />
      {REPORT_REASON_LIST.map((reason) => (
        <>
          <S.ListComponent>
            <S.List onClick={() => setSelectedReason(reason)}>
              <S.Text>{reason}</S.Text>
              <Radio checked={selectedReason === reason} />
            </S.List>
            {selectedReason === "기타 사유" && reason === "기타 사유" && (
              <>
                <S.TextArea
                  ref={inputRef}
                  placeholder="신고 사유를 작성해주세요"
                  maxLength={500}
                  onChange={handleInputChange}
                />
                <S.Count>{`${charCount}/500`}</S.Count>
              </>
            )}
          </S.ListComponent>
        </>
      ))}
      <div style={{ width: "100%", padding: "8px 20px", position: "absolute", bottom: "0" }} onClick={handleReport}>
        <Button text={"신고 후 리뷰 숨기기"} size="lg" disabled={!selectedReason} />
      </div>
    </div>
  );
};

export default ReportPage;
