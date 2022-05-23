import imgCloudyDay from "../assets/condition/cloudy-day.png";
import imgCloudy from "../assets/condition/cloudy.png";
import imgFog from "../assets/condition/fog.png";
import imgRainyLittle from "../assets/condition/rainy-little.png";
import imgRainyMuch from "../assets/condition/rainy-much.png";
import imgRainyDay from "../assets/condition/rainy-day.png";
import imgRainyVeryMuch from "../assets/condition/rainy.png";
import imgSnowLittle from "../assets/condition/snowy-little.png";
import imgSnowMuch from "../assets/condition/snowy-much.png";
import imgSunny from "../assets/condition/sunny.png";
import imgLowTemperature from "../assets/condition/temperature.png";
import imgThunderStorm from "../assets/condition/thunderstorm.png";
import imgDrizzle from "../assets/condition/hailstorm.png";
const useImg = (code) => {
  switch (code) {
    case 1000:
      return imgSunny;
    case 1003:
      return imgCloudyDay;
    case 1006:
      return imgCloudy;
    case 1009:
      return imgCloudy;
    case 1030:
      return imgFog;
    case 1063:
      return imgRainyLittle;
    case 1066:
      return imgSnowLittle;
    case 1069:
      return imgLowTemperature;
    case 1072:
      return imgSnowMuch;
    case 1087:
      return imgThunderStorm;
    case 1114:
      return imgSnowMuch;
    case 1117:
      return imgSnowMuch;
    case 1135:
      return imgFog;
    case 1147:
      return imgFog;
    case 1150:
      return imgDrizzle;
    case 1153:
      return imgDrizzle;
    case 1168:
      return imgDrizzle;
    case 1171:
      return imgDrizzle;
    case 1180:
      return imgRainyLittle;
    case 1183:
      return imgRainyLittle;
    case 1186:
      return imgRainyMuch;
    case 1189:
      return imgRainyMuch;
    case 1192:
      return imgRainyVeryMuch;
    case 1195:
      return imgRainyVeryMuch;
    case 1198:
      return imgRainyVeryMuch;
    case 1201:
      return imgRainyVeryMuch;
    case 1204:
      return imgSnowLittle;
    case 1207:
      return imgSnowLittle;
    case 1210:
      return imgSnowLittle;
    case 1213:
      return imgSnowLittle;
    case 1216:
      return imgSnowLittle;
    case 1219:
      return imgSnowMuch;
    case 1222:
      return imgSnowMuch;
    case 1225:
      return imgSnowMuch;
    case 1237:
      return imgSnowMuch;
    case 1240:
      return imgRainyDay;
    case 1243:
      return imgRainyMuch;
    case 1246:
      return imgRainyVeryMuch;
    case 1249:
      return imgLowTemperature;
    case 1252:
      return imgLowTemperature;
    case 1255:
      return imgSnowLittle;
    case 1258:
      return imgSnowMuch;
    case 1261:
      return imgSnowLittle;
    case 1264:
      return imgThunderStorm;
    case 1273:
      return imgThunderStorm;
    case 1276:
      return imgThunderStorm;
    case 1279:
      return imgLowTemperature;
    case 1282:
      return imgLowTemperature;
    default:
      return imgSunny;
  }
};
export default useImg;
