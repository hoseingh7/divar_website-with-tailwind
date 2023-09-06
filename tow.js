const breakfast = "7:00 a.m";
const lunch = "12:00 p.m";
const dinner = "7:00 p.m";

function nextMeal(currentTime) {
  const currentTimeParts = currentTime.split(":");
  const currentHour = parseInt(currentTimeParts[0]);
  const currentMinute = parseInt(currentTimeParts[1].split(" ")[0]);
  const currentPeriod = currentTimeParts[1].split(" ")[1];

  let nextMealTime;
  let nextMealTitle;

  if (currentPeriod === "a.m") {
    if (currentHour < 7 || (currentHour === 7 && currentMinute < 0)) {
      nextMealTime = breakfast;
      nextMealTitle = "breakfast";
    } else if (
      currentHour >= 7 &&
      currentMinute >= 0 &&
      (currentHour < 12 || (currentHour === 12 && currentMinute < 0))
    ) {
      nextMealTime = lunch;
      nextMealTitle = "lunch";
    } else {
      nextMealTime = dinner;
      nextMealTitle = "dinner";
    }
  } else {
    if (
      currentHour >= 12 &&
      currentMinute >= 0 &&
      (currentHour < 7 || (currentHour === 7 && currentMinute < 0))
    ) {
      nextMealTime = breakfast;
      nextMealTitle = "breakfast";
    } else if (
      currentHour >= 7 &&
      currentMinute >= 0 &&
      (currentHour < 12 || (currentHour === 12 && currentMinute < 0))
    ) {
      nextMealTime = lunch;
      nextMealTitle = "lunch";
    } else {
      nextMealTime = dinner;
      nextMealTitle = "dinner";
    }
  }

  const nextMealTimeParts = nextMealTime.split(":");
  const nextMealHour = parseInt(nextMealTimeParts[0]);
  const nextMealMinute = parseInt(nextMealTimeParts[1].split(" ")[0]);

  const nextMealPeriod = nextMealTimeParts[1].split(" ")[1];

  let hoursUntilNextMeal;
  let minutesUntilNextMeal;

  if (
    currentHour > nextMealHour ||
    (currentHour === nextMealHour && currentMinute > nextMealMinute)
  ) {
    hoursUntilNextMeal = 24 - currentHour + nextMealHour;
    minutesUntilNextMeal = 60 - currentMinute + nextMealMinute;
  } else if (currentHour === nextMealHour && currentMinute === nextMealMinute) {
    hoursUntilNextMeal = 24;
    minutesUntilNextMeal = 0;
  } else {
    hoursUntilNextMeal = Math.abs(currentHour - nextMealHour);
    ("minutesUntilNextMeal= Math.abs(currentMinute -nextMealMinute)");
  }

  console.log(
    `{${hoursUntilNextMeal} hours and ${minutesUntilNextMeal} minutesUntilnextmeal, ${nextMealTitle}`
  );
}

nextMeal("5:50 a.m");
nextMeal("2:00 p.m");
nextMeal("08:00 p.m");
