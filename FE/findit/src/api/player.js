import PlayerApi from "./PlayerApi";
import axios from "axios";

function requestEnter(entercode, success, fail) {
  PlayerApi.get(`room/${entercode}`).then(success).catch(fail);
}

function requestUpload(data, success, fail) {
  axios
    .post(
      "https://findit.life/fast/check",
      {
        game_id: data.game_id,
        file: data.file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "/",
        },
      },
    )
    .then(success)
    .catch(fail);
}

function requestRankingList(gameid, success, fail) {
  axios
    .post("https://findit.life/api/v1/room/result", {
      entercode: gameid,
    })
    .then(success)
    .catch(fail);
}

function getGameTreasureList(entercode, success, fail) {
  PlayerApi.get(`https://findit.life/api/v1/room/${entercode}/treasures`).then(success).catch(fail);
}

export { requestEnter, requestUpload, requestRankingList, getGameTreasureList };
