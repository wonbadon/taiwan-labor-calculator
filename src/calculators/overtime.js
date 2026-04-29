// 勞基法第24條、第39條、第40條
// 月薪換算時薪：月薪 ÷ 30 ÷ 8
export function calcHourlyRate(monthlySalary) {
  return monthlySalary / 30 / 8
}

function toNumber(value) {
  return Number(value) || 0
}

// 平日延長工時加班費
// 前2小時：時薪 × 4/3；第3小時起：時薪 × 5/3
export function calcWeekdayOvertime(hourlyRate, hours) {
  const workedHours = toNumber(hours)
  if (workedHours <= 0) return 0
  const first2 = Math.min(workedHours, 2)
  const rest = Math.max(workedHours - 2, 0)
  return first2 * hourlyRate * (4 / 3) + rest * hourlyRate * (5 / 3)
}

// 休息日加班費（勞基法第24條第2項）
// 前2小時：時薪 × 4/3；第3至8小時：時薪 × 5/3；第9小時起：時薪 × 8/3
export function calcRestDayOvertime(hourlyRate, hours) {
  const workedHours = toNumber(hours)
  if (workedHours <= 0) return 0

  const first2 = Math.min(workedHours, 2)
  const next6 = Math.min(Math.max(workedHours - 2, 0), 6)
  const after8 = Math.max(workedHours - 8, 0)

  return (
    first2 * hourlyRate * (4 / 3) +
    next6 * hourlyRate * (5 / 3) +
    after8 * hourlyRate * (8 / 3)
  )
}

// 國定假日 / 休假日出勤
// 月薪制：8小時內加發1日工資；超過8小時部分再按第24條加成。
// 時薪制：8小時內按出勤時數加倍發給；超過8小時部分再按第24條加成。
export function calcHolidayOvertime(hourlyRate, hours, salaryType) {
  const workedHours = toNumber(hours)
  if (workedHours <= 0) return 0

  const first8 = Math.min(workedHours, 8)
  const overtimeHours = Math.max(workedHours - 8, 0)
  const first8Pay = salaryType === 'monthly'
    ? hourlyRate * 8
    : first8 * hourlyRate * 2

  return first8Pay + calcWeekdayOvertime(hourlyRate, overtimeHours)
}

export function calcOvertimeSummary({ salaryType, monthlySalary, hourlyRateInput, weekdayHours, restDayHours, holidayHours }) {
  const hourlyRate = salaryType === 'monthly'
    ? calcHourlyRate(toNumber(monthlySalary))
    : toNumber(hourlyRateInput)

  const weekdayPay = calcWeekdayOvertime(hourlyRate, weekdayHours)
  const restDayPay = calcRestDayOvertime(hourlyRate, restDayHours)
  const holidayPay = calcHolidayOvertime(hourlyRate, holidayHours, salaryType)
  const total = weekdayPay + restDayPay + holidayPay

  return { hourlyRate, weekdayPay, restDayPay, holidayPay, total }
}
