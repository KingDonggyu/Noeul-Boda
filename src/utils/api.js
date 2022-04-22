import { read, utils } from "https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs";
import WEATHER_API_KEY from '../../apikey.js';

// OpenWeatherMap API를 통한 날씨 정보 반환
export const requestWeather = async () => {
  const API_END_POINT =
    'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04';

  try {
    const res = await fetch(`${API_END_POINT}&appid=${WEATHER_API_KEY}`);
    if (!res.ok) {
      throw new Error('weather api 요청 실패');
    }
    return await res.json();
  } catch (e) {
    throw new Error(e.message);
  }
};

// '기상청_단기예보_위경도' xlsx 파일을 통한 국내 지역별 좌표 정보 반환
export const requestGeocoding = async () => {
  try {
    const res = await fetch('../../geographic_coordinates.xlsx');
    if (!res.ok) {
      throw new Error('error');
    }
    const buffer = await res.arrayBuffer()
    const workbook = read(buffer, {type: 'array'});

    return parseXLSX(workbook);
  } catch (e) {
    throw new Error(`xlsx file 요청 실패 ${e.message}`);
  }
}

const parseXLSX = (workbook) => {
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = utils.sheet_to_row_object_array(sheet);

  const geocoding = new Object();

  rows.forEach((row) => {
    const address1 = row['1단계'];
    const address2 = row['2단계'];
    const address3 = row['3단계'];
    const coordinate = {
      lat: row['경도(시)'],
      lon: row['위도(시)'],
    };

    if (!geocoding[address1]) {
      geocoding[address1] = coordinate;
    } else if (!geocoding[address1][address2]) {
      geocoding[address1][address2] = coordinate;
    } else {
      geocoding[address1][address2][address3] = coordinate;
    }
  });

  return geocoding;
};
