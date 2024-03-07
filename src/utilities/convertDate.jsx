const convertDate = (dateString) => {
    console.log(dateString)
    const dateOnly = dateString.split('T')[0];
    const dateParts = dateOnly.split('-');
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    // Get day, month, and year from the Date object
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so we add 1
    const year = date.getFullYear() % 100; // Get last two digits of the year

    // Pad day and month with leading zeros if necessary
    const formattedMonth = String(day).padStart(2, '0');
    const formattedDay = String(month).padStart(2, '0');

    // Return formatted date in dd/mm/yy format
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

export default convertDate;