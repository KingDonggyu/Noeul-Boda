import WEATHER_API_KEY from '../../apikey.js';

// OpenWeatherMap API를 통한 날씨 정보 반환
export const requestWeather = async () => {
  const API_END_POINT =
    'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04';

  try {
    const res = await fetch(`${API_END_POINT}&appid=${WEATHER_API_KEY}`);
    if (!res.ok) {
      throw new Error('api 요청 실패');
    }
    return await res.json();
  } catch (e) {
    throw new Error(`api 요청 실패 ${e.message}`);
  }
};

// 기상청 위경도 xlsx 파일을 통한 경도/위도 정보 반환
export const requestGeocoding = async () => {
  let result = await loadXLSX();
  return result;
};

const loadXLSX = async () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'blob';
    xhr.open('GET', '/geographic_coordinates.xlsx', true);

    xhr.onload = function () {
      const file = this.response;
      const reader = new FileReader();

      if (reader.readAsBinaryString) {
        reader.onload = (e) => {
          resolve(parseXLSX(e.target.result));
        };
        reader.readAsBinaryString(file);
      } else { // for IE browser
        reader.onload = (e) => {
          const data = '';
          const bytes = new Uint8Array(e.target.result);
          
          for (let i = 0; i < bytes.byteLength; i++) {
            data += String.fromCharCode(bytes[i]);
          }
          resolve(parseXLSX(data));
        };
        reader.readAsArrayBuffer(file);
      }
    };

    xhr.send();
  });
};

const parseXLSX = (data) => {
  const workbook = XLSX.read(data, { type: 'binary' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_row_object_array(sheet);

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
