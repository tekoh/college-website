function submit(e) {
    e.preventDefault()
    const email = e.target.elements.email.value
    console.log(`given email: ${email}`)

    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    const match = email.match(regex)

    if (match < 1) {
        alert("invalid email")
    } else {
        location.href = "./confirmation.html"
    }
}

// continiously updates message at bottom of screen showing how long until shop opens
$(window).on("load", () => {
    $("body").removeClass("preload")

    if (!$("#countdown-text")[0]) return

    const countdown = () => {
        $("#countdown-text")[0].innerText = `${MStoTime(new Date(Date.parse("25/05/2022")).getTime() - Date.now())} until shop opening!`
    }

    countdown()

    setInterval(countdown, 1000);
})

// converts milliseconds to human understandable format
function MStoTime(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000))
    const daysms = ms % (24 * 60 * 60 * 1000)
    const hours = Math.floor(daysms / (60 * 60 * 1000))
    const hoursms = ms % (60 * 60 * 1000)
    const minutes = Math.floor(hoursms / (60 * 1000))
    const minutesms = ms % (60 * 1000)
    const sec = Math.floor(minutesms / 1000)

    let output = ""

    if (days > 0) {
        output += `${days} day${days > 1 ? "s" : ""} `
    }

    if (hours > 0) {
        output += `${hours} hour${hours > 1 ? "s" : ""} `
    }

    if (minutes > 0) {
        output += `${minutes} minute${minutes > 1 ? "s" : ""} `
    }

    output += `${sec} second${sec > 1 ? "s" : ""}`

    return output
}