// JSON 형식의 자동차 데이터를 가져온 후, 마력과 연비 정보만 추출하고 null 데이터를 제거
async function getData() {
  const carDataResponse = await fetch(
    "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
  );
}
