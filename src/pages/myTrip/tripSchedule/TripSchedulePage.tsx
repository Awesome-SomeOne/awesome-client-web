import { useEffect, useState } from "react";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, subYears, addYears } from "date-fns";
import { ko } from "date-fns/locale";
import { Theme } from "@/styles/theme";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import useOverlay from "@/hooks/useOverlay";
import BottomSheet from "@/components/common/bottomSheet/index";
import Wheel from "@/components/myTrip/wheel/index";
import { YEARS, MONTHS } from "@/constants/dateConstants";
import "./style.css";
import * as S from "./styles";

type ScheduleType = {
  startDate: string;
  endDate: string;
};
const TripSchedulePage = ({ onNext }: { onNext: () => void }) => {
  const today = {
    year: parseInt(format(new Date(), "yyyy")),
    month: parseInt(format(new Date(), "M"))
  };
  // 표시 날짜
  const [selectorDate, setSelectorDate] = useState(today);
  // 달력 날짜
  const [date, setDate] = useState(today);
  // selector 내 선택중인 날짜
  const [selectedDate, setSelectedDate] = useState(today);

  const [range, setRange] = useState<Range[]>([
    {
      startDate: undefined,
      endDate: new Date(""),
      key: "selection"
    }
  ]);
  const [schedule, setSchedule] = useState<ScheduleType | null>(null);

  const { isOpen, open, close } = useOverlay();

  // year, month 임의 변경
  useEffect(() => {
    if (selectorDate.month !== date.month) {
      const monthPicker = document.querySelector(".rdrMonthPicker select") as HTMLSelectElement;
      if (monthPicker) {
        monthPicker.value = `${date.month - 1}`;
        monthPicker.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    if (selectorDate.year !== date.year) {
      const yearPicker = document.querySelector(".rdrYearPicker select") as HTMLSelectElement;
      if (yearPicker) {
        yearPicker.value = `${date.year}`;
        yearPicker.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }, [date]);

  // 달력에서 year, month 변경
  const handleShownDateChange = (date: Date) => {
    setSelectorDate({
      year: parseInt(format(date, "yyyy")),
      month: parseInt(format(date, "M"))
    });
  };

  // selector 내에서 year 변경
  const handleYearChange = (index: number) => {
    setSelectedDate((prev) => ({
      ...prev,
      year: parseInt(YEARS[index].slice(0, -1))
    }));
  };

  // selector 내에서 month 변경
  const handleMonthChange = (index: number) => {
    setSelectedDate((prev) => ({
      ...prev,
      month: parseInt(MONTHS[index].slice(0, -1))
    }));
  };

  // selector 내에서 선택 완료
  const handleSelectDone = () => {
    setDate(selectedDate);
    close();
  };

  // range 변경
  const handleChange = ({ selection }: RangeKeyDict) => {
    if (selection.startDate && selection.endDate) {
      setRange([selection]);
      setSchedule({
        startDate: new Date(selection.startDate)
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
          .slice(6),
        endDate: new Date(selection.endDate)
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
          .slice(6)
      });
    }
  };

  const handleNext = () => {
    // 설정한 여행 기간 처리하기
    onNext();
  };

  return (
    <div style={{ height: "100%", paddingTop: "56px" }}>
      <S.TripScheduleLayout>
        <GeneralHeader title="여행 기간을 설정해주세요" titleSize="md" />
        <S.Selector onClick={open}>
          {`${selectorDate.year}년 ${selectorDate.month}월`}
          <DropdownIcon size="16" color={Theme.colors.Label_Alternative} />
        </S.Selector>
        <S.DateRangeWrapper>
          <DateRange
            onChange={handleChange}
            onShownDateChange={handleShownDateChange}
            ranges={range}
            rangeColors={[Theme.colors.Fill_Primary_Default]}
            locale={ko}
            showDateDisplay={false}
            scroll={{ enabled: true }}
            minDate={subYears(new Date(), 50)}
            maxDate={addYears(new Date(), 50)}
          />
        </S.DateRangeWrapper>
        <div style={{ width: "100%", position: "absolute", bottom: "0" }}>
          <Button
            text={
              schedule
                ? schedule.startDate !== schedule.endDate
                  ? `${schedule.startDate}~${schedule.endDate} 여행 떠나기`
                  : `${schedule.startDate} 여행 떠나기`
                : "날짜를 선택해주세요"
            }
            size="lg"
            disabled={!schedule}
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
            onClick={handleNext}
          />
        </div>
      </S.TripScheduleLayout>
      <BottomSheet isOpen={isOpen} close={close}>
        <S.BottomSheetContainer onClick={(event: any) => event.stopPropagation()}>
          <S.HandleBar />
          <div style={{ width: "100%", padding: "8px 20px", display: "flex", gap: "6px" }}>
            <Wheel
              items={YEARS}
              selectedItemIndex={YEARS.indexOf(`${selectorDate.year}년`)}
              onChange={handleYearChange}
            />
            <Wheel
              items={MONTHS}
              selectedItemIndex={MONTHS.indexOf(`${selectorDate.month}월`)}
              onChange={handleMonthChange}
            />
          </div>
          <Button
            text="선택완료"
            size="lg"
            onClick={handleSelectDone}
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
          />
        </S.BottomSheetContainer>
      </BottomSheet>
    </div>
  );
};

export default TripSchedulePage;
