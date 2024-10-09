export const formatDate = (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const fromMonth = monthNames[from.getMonth()];
    const fromDay = String(from.getDate()).padStart(2, '0');
    const toMonth = monthNames[to.getMonth()];
    const toDay = String(to.getDate()).padStart(2, '0');

    return `${fromMonth} ${fromDay}-${toMonth} ${toDay}`;
}