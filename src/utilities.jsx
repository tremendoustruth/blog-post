

export function dateTransformer(date) {
    //date is expect to be an iso-formatted string passed in from the date property of the post object
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    return formattedDate
}

export function dateAndTimeGenerator(date) {
    console.log(date)
    if (typeof date == "string") {
        date = new Date(date)
    }
    const formattedDateTime = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    return formattedDateTime
}