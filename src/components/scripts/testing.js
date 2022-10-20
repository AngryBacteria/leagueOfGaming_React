import useFetch from "./useFetch";

const { data: timeLineData, isPending: isPendingStats, error: errorStats } = useFetch(`http://localhost:8080/api/game/riot/timeline/EUW1_5998862549`, "TimeLine")


var goldArray = [];
console.log(timeLineData.team1Gold.length)
for (var i=0; i< timeLineData.team1Gold.length; i++) {
    goldArray.push(timeLineData.team1Gold[i].gold);
}
console.log(goldArray)