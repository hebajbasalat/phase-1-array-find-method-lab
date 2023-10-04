// code your solution here
function superbowlWin(array) {
  const found = array.find(function (ele) {
    return ele.result === "W";
  });
  return found ? found.year : undefined;
  // for (let item of array) {
  //   if (item.result === "W") {
  //     return item.year;
  //   }
  // }
}
