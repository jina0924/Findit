import React, { useState } from "react";

import { Box, styled } from "@mui/system";

import CustomText from "components/atom/CustomText";
import GameSettingBox from "components/atom/GameSettingBox";

import TimerIcon from "static/timer_clock.svg";
import TreasureIcon from "static/wrapped_gift.svg";

// import { useSelector, useDispatch } from "react-redux";

const StyledTextBox = styled(Box)(
  () => `
display: flex;
flex-direction: column;
position: relative;
`,
);

const TimerSettingBox = styled(Box)(
  () => `
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0;
`,
);

const TimerNum = styled(Box)(
  () => `
background: white;
width: 60px;
height: 60px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
`,
);

const HandlerButtom = styled("button")(
  () => `
width: 30px;
height: 30px;
background: #DA989A;
border: 0;
color: white;
font-weight: bold;
border-radius: 5px;
margin: 0 20px;
font-size: 20px;
`,
);

const StyledIcon = styled("img")(
  () => `
position: absolute;
height: 9vh;
left: 200px;
top: -50px;
`,
);

const ModeButtonBox = styled(Box)(
  () => `
margin: 30px 30px 5px;
display: flex;
justify-content: space-around;
`,
);

const SelectedModeButton = styled("button")(
  () => `
border: 0;
width: 98px;
height: 42px;
background: #9FAFD8;
border-radius: 15px;
box-shadow: inset 1px 1px 2px #babecc , inset -1px -1px 2px #ffffff;
cursor: pointer;
`,
);

const ModeButton = styled("button")(
  () => `
border: 0;
width: 98px;
height: 42px;
background: white;
border-radius: 15px;
box-shadow: -2px -2px 5px #ffffff, 2px 2px 5px #babecc;
transition: all 0.2s ease-in-out;
cursor: pointer;
`,
);

const ModeInfoText = styled(Box)(
  () => `
text-align: center;
margin-top: 8px;
`,
);

export default function GameSettingSection() {
  // const dispatch = useDispatch()
  const [timer, setTimer] = useState(10);
  // const timer = useSelector((state) => state.timer);
  // const show = useSelector((state) => state.showCounter);

  function incrementHandler() {
    setTimer(timer + 5);
  }

  function decrementHandler() {
    if (timer <= 0) {
      setTimer(0);
    } else {
      setTimer(timer - 5);
    }
  }

  const [isRandomMode, setIsRandomMode] = useState(false);

  function invertModeHandler() {
    setIsRandomMode(!isRandomMode);
  }
  // const incrementHandler = () => {
  //   dispatch({ type: "increment", amount: 5 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement", amount: 5 });
  // };

  return (
    <Box>
      <GameSettingBox>
        <StyledTextBox>
          <StyledIcon src={TimerIcon} alt="timer icon" />
          <CustomText variant="secondary" size="l" weight="bold">
            시간 설정
          </CustomText>
          <CustomText variant="secondary" size="xxs" margin="3">
            5분 단위로 설정 가능합니다.
          </CustomText>
          <TimerSettingBox>
            <HandlerButtom onClick={decrementHandler}>-</HandlerButtom>
            <TimerNum>
              <CustomText variant="secondary" weight="bold" size="xl">
                {timer}
              </CustomText>
            </TimerNum>
            <CustomText variant="secondary" weight="bold" size="xl">
              min
            </CustomText>
            <HandlerButtom onClick={incrementHandler}>+</HandlerButtom>
          </TimerSettingBox>
        </StyledTextBox>
      </GameSettingBox>
      <GameSettingBox variant="primaryWeek">
        <StyledTextBox>
          <StyledIcon src={TreasureIcon} alt="timer icon" />
          <CustomText variant="primary" size="l" weight="bold">
            모드 선택
          </CustomText>
        </StyledTextBox>
        {!isRandomMode && (
          <Box>
            <ModeButtonBox>
              <SelectedModeButton>
                <CustomText size="s" weight="normal" variant="white">
                  일반 모드
                </CustomText>
              </SelectedModeButton>
              <ModeButton onClick={invertModeHandler}>
                <CustomText size="s" weight="normal" variant="primary">
                  랜덤 모드
                </CustomText>
              </ModeButton>
            </ModeButtonBox>
            <ModeInfoText>
              <CustomText variant="primary" size="xxs" margin="3">
                * 보물을 찾은 순서대로 점수가 차등부여 됩니다 *
              </CustomText>
            </ModeInfoText>
          </Box>
        )}
        {isRandomMode && (
          <Box>
            <ModeButtonBox>
              <ModeButton onClick={invertModeHandler}>
                <CustomText size="s" weight="normal" variant="primary">
                  일반 모드
                </CustomText>
              </ModeButton>
              <SelectedModeButton onClick={invertModeHandler}>
                <CustomText size="s" weight="normal" variant="white">
                  랜덤 모드
                </CustomText>
              </SelectedModeButton>
            </ModeButtonBox>
            <ModeInfoText>
              <CustomText variant="primary" size="xxs" margin="3">
                * 보물을 찾을 때 랜덤으로 효과가 발동하는 모드입니다 *
              </CustomText>
            </ModeInfoText>
          </Box>
        )}
      </GameSettingBox>
    </Box>
  );
}