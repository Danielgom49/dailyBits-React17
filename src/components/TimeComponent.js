const TimeComponent = () => {
    const timeLogin = new Date()
    const timeHour = timeLogin.getHours()
    console.log(timeHour);
    return timeHour
}

export default TimeComponent