const useDate = (allData) => {
  let localDate = new Date(allData);
  let localDay = localDate.getDate();
  let localYear = localDate.getFullYear();
  let localHour = localDate.getHours();
  const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  let localMonth = toMonthName(localDate.getMonth());
  let dayName = localDate.toLocaleString("en-us", { weekday: "long" });
  return { localMonth, localDay, dayName, localYear, localHour };
};

export default useDate;
