function max(arr) {
  maxnum = 0
  for (var i = 0; i < arr.length; i++) {
    if (maxnum < arr[i]) {
      maxnum = arr[i];
    }
  }
  return maxnum;
};
function min(arr) {
  minnum = 10000000
  for (var i = 0; i < arr.length; i++) {
    if (minnum > arr[i]) {
      minnum = arr[i];
    }
  }
  return minnum;
};
function make_percent(arr) {
  var percentarr = [0];
  maxarr = max(arr);
  minarr = min(arr);
  console.log(minarr)
  for (var i = 0; i < arr.length; i++) {
    percentarr[i] = ((arr[i] - minarr) * (100 / (maxarr - minarr)));
  }
  return percentarr;
};

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
};
function mon_to_year(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    result[i] = sum(arr[i]);
  };
  return result;
};

var jan_2020 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 2, 5];
var feb_2020 = [1, 3, 0, 1, 3, 4, 1, 0, 3, 0, 1, 0, 0, 0, 0, 1,
  1, 1, 20, 53, 100, 229, 169, 231, 144, 284, 505, 571, 813];
var mar_2020 = [1062, 600, 516, 438, 518, 483, 367, 248, 131, 242, 114, 110, 107,
  76, 74, 84, 93, 152, 87, 147, 98, 64, 76, 100, 104, 91, 146, 105, 78, 125, 101];
var apr_2020 = [89, 86, 94, 81, 47, 47, 53, 39, 27, 30, 32, 25, 27,
  27, 22, 22, 18, 8, 13, 9, 11, 8, 6, 10, 10, 10, 14, 9, 4, 9];
var may_2020 = [6, 13, 8, 3, 2, 4, 12, 18, 34, 35, 27, 26, 29, 27, 19,
  13, 15, 13, 32, 12, 20, 23, 25, 16, 19, 40, 79, 58, 39, 27, 35];
var jun_2020 = [38, 49, 39, 39, 51, 57, 38, 38, 50, 45, 56, 48, 34, 36,
  34, 43, 59, 49, 67, 48, 17, 46, 51, 28, 39, 51, 62, 42, 43, 50];
var jul_2020 = [54, 63, 63, 61, 46, 44, 63, 49, 45, 35, 44, 62, 33, 39,
  61, 60, 39, 34, 26, 45, 63, 59, 41, 113, 58, 25, 28, 48, 18, 36, 31];
var aug_2020 = [30, 23, 34, 33, 43, 20, 43, 36, 28, 34, 54, 56, 103, 166, 279, 197,
  246, 297, 288, 324, 332, 397, 266, 280, 320, 441, 371, 323, 299, 248, 235];
var sep_2020 = [267, 195, 198, 168, 167, 119, 136, 156, 155, 176, 136, 121, 109,
  106, 113, 153, 126, 110, 82, 70, 61, 110, 125, 114, 61, 95, 50, 38, 113, 77];
var oct_2020 = [63, 75, 64, 73, 75, 114, 69, 54, 72, 58, 97, 102, 84, 99, 47,
  73, 91, 76, 58, 91, 119, 155, 77, 61, 119, 88, 103, 125, 114, 126, 124];
var nov_2020 = [97, 75, 118, 125, 145, 89, 143, 126, 100, 146, 143, 191, 205, 208,
  223, 229, 313, 343, 363, 386, 330, 271, 349, 382, 583, 569, 488, 449, 377, 451];
var dec_2020 = [511, 540, 629, 583, 631, 615, 594, 677, 666, 688, 950, 1030, 718, 880, 1078,
  1011, 1062, 1055, 1090, 926, 866, 1090, 985, 1240, 1132, 970, 807, 1045, 1050, 967, 1027];
var jan_2021 = [820, 657, 1020, 714, 838, 869, 674, 641, 657, 451, 537, 561, 524, 513,
  579, 520, 389, 386, 403, 400, 344, 430, 392, 437, 354, 554, 497, 469, 455, 355, 303];
var feb_2021 = [336, 467, 451, 369, 393, 372, 289, 302, 443, 504, 403, 362, 326,
  344, 456, 621, 621, 561, 446, 418, 332, 357, 439, 396, 406, 399, 355, 353];
var mar_2021 = [343, 444, 424, 398, 417, 416, 346, 446, 470, 465, 488, 490, 459, 382,
  363, 469, 445, 463, 452, 446, 420, 346, 425, 430, 494, 505, 482, 384, 441, 506, 551];
var apr_2021 = [555, 542, 543, 473, 478, 668, 700, 671, 676, 614, 587, 542, 731, 698,
  672, 655, 671, 531, 549, 731, 735, 797, 785, 644, 500, 511, 775, 678, 656, 627];
var may_2021 = [606, 488, 541, 676, 574, 525, 701, 564, 463, 511, 635, 715, 747, 681,
  610, 619, 528, 653, 646, 561, 666, 585, 538, 516, 699, 629, 587, 533, 479, 430, 459];
var jun_2021 = [677, 681, 695, 744, 556, 485, 454, 601, 611, 556, 563, 452, 399, 374,
  544, 540, 507, 482, 429, 357, 395, 644, 610, 634, 668, 614, 501, 595, 794, 762];
var jul_2021 = [826, 793, 742, 711, 746, 1212, 1275, 1316, 1378, 1324, 1100, 1150, 1615, 1600, 1535,
  1454, 1451, 1252, 1278, 1784, 1838, 1630, 1629, 786, 2018, 1365, 1896, 1672, 1707, 1539, 1442];
var aug_2021 = [1215, 1201, 1723, 1776, 1704, 1822, 1728, 1492, 1539, 2219, 1986, 1990, 1929, 1817, 1553,
  1373, 1803, 2151, 2051, 1880, 1627, 1416, 1505, 2152, 1878, 1841, 1793, 1617, 1483, 1370, 2024];
var sep_2021 = [1956, 1709, 1803, 1490, 1375, 1596, 2049, 2047, 1892, 1865, 1755, 1433, 1495, 2079,
  1941, 2008, 2084, 1909, 1605, 1727, 1720, 1716, 2433, 3270, 2770, 2381, 2289, 2883, 2564, 2484];
var oct_2021 = [2247, 2085, 1672, 1575, 2027, 2425, 2172, 1949, 1594, 1297, 1347, 1579, 1937, 1682, 1617,
  1418, 1049, 1073, 1570, 1441, 1440, 1507, 1423, 1190, 1266, 1950, 2107, 2124, 2103, 2061, 1686];
var nov_2021 = [1588, 2666, 2480, 2344, 2248, 2223,
  1759, 1713, 2424, 2520, 2368, 2323, 2418, 2006, 2125, 3184, 3290, 3034, 3212, 3114, 2827, 2698, 4114, 3938, 3899, 4067];
var year_2020 = [jan_2020, feb_2020, mar_2020, apr_2020, may_2020, jun_2020, jul_2020, aug_2020, sep_2020, oct_2020, nov_2020, dec_2020];
var year_2021 = [jan_2021, feb_2021, mar_2021, apr_2021, may_2021, jun_2021, jul_2021, aug_2021, sep_2021, oct_2021, nov_2021];

var sum_year_2020 = mon_to_year(year_2020);
var sum_year_2021 = mon_to_year(year_2021);
var year_case = [sum_year_2020, sum_year_2021];
var all_year=[sum(sum_year_2020),sum(sum_year_2021)]
console.log(sum_year_2020);


function graph(mon) {
  var re = document.getElementById("graphsection");
  var parent = re.parentElement;
  parent.removeChild(re);
  var obj = document.createElement("ul");
  obj.setAttribute("Id", "graphsection");
  parent.appendChild(obj);

  var caseg = year_2020[mon];
  var casepercent = make_percent(caseg);
  for (var i = 0; i < caseg.length; i++) {
    var newspan = document.createElement("li");
    newspan.innerHTML = "" + (i + 1) + "";
    newspan.setAttribute("title", caseg[i] + "명");
    newspan.setAttribute("class", "gra");
    newspan.style.backgroundColor = "skyblue";
    newspan.style.left = "" + i * 30 + "px";
    newspan.style.height = "" + (casepercent[i] + 20) + "px"
    obj.appendChild(newspan);
  };
  
  var info =document.createElement("div");
  info.innerHTML = "2020년"+(mon+1)+"월<br>총발생자:"+(sum_year_2020[mon])+"명<br>"+"최대 발생"+(max(year_2020[mon]))+"명";
  info.setAttribute("Id","info");
  obj.append(info);

  var news_parent = document.getElementById("newsparent");
  var remove_news = document.getElementById("news");
  news_parent.removeChild(remove_news);
  var newsframe = document.createElement("a");
  newsframe.setAttribute("Id", "news");
  newsframe.setAttribute("class", "newspage");
  newsframe.setAttribute("href", "http://ncov.mohw.go.kr/tcmBoardList.do?pageIndex=5&brdId=&brdGubun=&board_id=&search_item=1&search_content=" + (mon + 1) + "%EC%9B%94");
  newsframe.setAttribute("target","_blank")
  newsframe.innerHTML ="2020년"+(mon+1)+"월 정보 페이지"
  news_parent.appendChild(newsframe);

};

function graph2(mon) {
  var re = document.getElementById("graphsection");
  var parent = re.parentElement;
  parent.removeChild(re);
  var obj = document.createElement("ul");
  obj.setAttribute("Id", "graphsection");
  parent.appendChild(obj);
  var caseg = year_2021[mon];
  var casepercent = make_percent(caseg);

  for (var i = 0; i < caseg.length; i++) {
    var newspan = document.createElement("li");
    newspan.innerHTML = "" + (i + 1) + "";
    newspan.setAttribute("title", caseg[i] + "명");
    newspan.setAttribute("class", "gra");
    newspan.style.backgroundColor = "orange";
    newspan.style.left = "" + i * 30 + "px";
    newspan.style.height = "" + (casepercent[i] + 20) + "px"
    obj.appendChild(newspan);
  };

  var info =document.createElement("div");
  info.innerHTML = "2021년"+(mon+1)+"월<br>총발생자:"+(sum_year_2021[mon])+"명<br>"+"최대 발생"+(max(year_2021[mon]))+"명";
  info.setAttribute("Id","info");
  obj.append(info);

  var news_parent = document.getElementById("newsparent");
  var remove_news = document.getElementById("news");
  news_parent.removeChild(remove_news);
  var newsframe = document.createElement("a");
  newsframe.setAttribute("Id", "news");
  newsframe.setAttribute("class", "newspage");
  newsframe.setAttribute("href", "http://ncov.mohw.go.kr/tcmBoardList.do?pageIndex=1&brdId=&brdGubun=&board_id=&search_item=1&search_content=" + (mon + 1) + "%EC%9B%94");
  newsframe.setAttribute("target","_blank")
  newsframe.innerHTML ="2021년"+(mon+1)+"월 정보 페이지"
  news_parent.appendChild(newsframe);
};
function graph3(year) {
  var re = document.getElementById("graphsection");
  var parent = re.parentElement;
  parent.removeChild(re);
  var obj = document.createElement("ul");
  obj.setAttribute("Id", "graphsection");
  parent.appendChild(obj);

  var caseg = year_case[year];
  var casepercent = make_percent(caseg);
  for (var i = 0; i < caseg.length; i++) {
    var newspan = document.createElement("li");
    newspan.innerHTML = "" + (i+1) + "";
    newspan.setAttribute("title", caseg[i] + "명");
    newspan.setAttribute("class", "gra");
    newspan.style.backgroundColor = "skyblue";
    newspan.style.left = "" + i * 50 + "px";
    newspan.style.height = "" + (casepercent[i] + 20) + "px"
    obj.appendChild(newspan);
  };

  var info =document.createElement("div");
  info.innerHTML = "총발생자:"+(sum(year_case[year]))+"명<br>"+"최대 발생"+(max(year_case[year]))+"명";
  info.setAttribute("Id","info");
  obj.append(info);


};

