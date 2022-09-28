import React from "react";

import { Box } from "@mui/system";
import Modal from "components/atom/Modal";

import compass from "static/compass_100.png";
import CustomButton from "components/atom/CustomButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./dot.css";
import CustomText from "components/atom/CustomText";

export default function Tutorial({ target }) {
  const orderedPlayerText = [
    "카메라 버튼을 누르면 보물을 인식할 수 있어요",
    "트로피 아이콘을 누르면 실시간 랭킹을 볼 수 있어요",
    "선물 아이콘을 누르면 보물 현황을 볼 수 있어요",
    "가이드 라인 내부에서 보물을 인식해주세요",
    "나의 순위와 획득한 점수를 확인할 수 있어요",
    "남은 시간에 유의하여 게임을 진행하세요",
  ];

  const orderedHostText = [
    "게임 생성 버튼을 누르면 프로필을 설정하는 화면이 나타나요",
    "플레이어가 찾을 보물을 선택하고, 커스텀 보물을 추가할 수 있어요",
    "게임 시간과 모드를 설정하면 방이 생성돼요",
    "PLAY 버튼을 눌러 게임을 시작하세요",
    "게임 진행 중에는 남은 시간과 실시간 랭킹을 확인할 수 있어요",
    "플레이어가 보물을 모두 찾은 경우에는 게임을 종료할 수 있어요",
    "보물 조회 버튼을 누르면 등록해놓은 커스텀 보물을 확인할 수 있어요"
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ mt: "3vh" }}>
        <img src={compass} alt="compass" width="100"></img>
      </Box>
      <Modal>
        <Box>
          <Carousel showArrows={false} showStatus={false} showThumbs={false}>
            {target === "user"
              ? orderedHostText.map((text, index) => (
                  <Box sx={{ my: "4vh", mx: "auto", width: "80vw" }}>
                    <Box sx={{ mx: "auto", width: "50vw" }}>
                      <img src="https://placeimg.com/200/300/any" alt="img" />
                    </Box>
                    <CustomText size="xxs" variant="black" key={index} sx={{ mt: "3vh" }}>
                      {text}
                    </CustomText>
                  </Box>
                ))
              : orderedPlayerText.map((text, index) => (
                  <Box sx={{ my: "5vh", mx: "auto", width: "70vw" }}>
                    <Box sx={{ mx: "auto", width: "50vw" }}>
                      <img src="https://placeimg.com/200/300/any" alt="img" />
                    </Box>
                    <CustomText size="xxs" variant="black" key={index} sx={{ mt: "3vh" }}>
                      {text}
                    </CustomText>
                  </Box>
                ))}
          </Carousel>
        </Box>
        <CustomButton size="large" color="primary" my="2vh">
          입장 코드 입력
        </CustomButton>
      </Modal>
    </Box>
  );
}
