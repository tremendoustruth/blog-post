

export default function dateTransformer(date) {
    //date is expect to be an iso-formatted string passed in from the date property of the post object
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        timeZone: "UTC",
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    return formattedDate
}