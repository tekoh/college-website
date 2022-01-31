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

    console.log(new Date(Date.parse("05/25/2022")))

    const countdown = () => {
        $("#countdown-text")[0].innerText = `${MStoTime(new Date(Date.parse("05/25/2022")).getTime() - Date.now())} until shop opening!`
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

const cards = [
    `<div class="card">
                    <h1>Roomba</h1>
                    <ul>
                        <li>automatic cleaning</li>
                        <li>elimates dust from your floor</li>
                        <li><i>remember the time before you had pets?</i></li>
                    </ul>
                    <img src="assets/roomba.jpg">
                </div>`,
    `<div class="card">
                    <h1>countdowns 📅</h1>
                    <ul>
                        <li>countdown to events</li>
                        <li>customisable messages</li>
                        <li><i>time machine not included</i> 😔</li>
                    </ul>
                    <img src="content/countdown-1.png">
                </div>`,
    `<div class="card">
                    <h1>minecraft ⛏</h1>
                    <ul>
                        <li>view name history for minecraft accounts</li>
                        <li>view skins for minecraft accounts</li>
                        <li><i>best game to ever be made</i> 🙏</li>
                    </ul>
                    <img src="content/minecraft-1.png">
                </div>`,
    `<div class="card">
                    <h1>chat reactions 🗣</h1>
                    <ul>
                        <li>use a custom word list</li>
                        <li>tracks statistics</li>
                        <li>can be started randomly</li>
                        <li><i>fastest typer wins</i> 😏</li>
                    </ul>
                    <img src="content/chatreaction-1.png">
                </div>`,
    `<div class="card">
                    <h1>christmas countdown 🎅</h1>
                    <ul>
                        <li>can run all year round</li>
                        <li>customisable message</li>
                        <li><i>santa exists</i> 🥺</li>
                    </ul>
                    <img src="content/christmas-1.png">
                </div>`,
    `<div class="card">
                    <h1>mention history 💬</h1>
                    <ul>
                        <li>view ghost pings</li>
                        <li>stores up to 15 mentions</li>
                        <li><i>for the famous people</i></li>
                    </ul>
                    <img src="content/mentions-1.png">
                </div>`,
    `<div class="card">
                    <h1>inventory system 🎒</h1>
                    <ul>
                        <li>collect cars for street races</li>
                        <li>use items to bully others</li>
                        <li><i>check out the handcuffs</i> 😏</li>
                    </ul>
                    <img src="content/inventory-1.png">
                </div>`,
    `<div class="card">
                    <h1>cryptocurrency 🪙</h1>
                    <ul>
                        <li>updates to real life value</li>
                        <li>virtual investments</li>
                        <li>currently uses bitcoin and ethereum</li>
                        <li><i>doge to the moon</i> 🌙</li>
                    </ul>
                    <img src="content/bitcoin-1.png">
                </div>`,
    `<div class="card">
                    <h1>prestige system 🤑</h1>
                    <ul>
                        <li>powerful rewards for prestiging</li>
                        <li>increases rewards for voting</li>
                        <li><i>seasonal economy</i> 😳</li>
                    </ul>
                    <img src="content/prestige-1.png">
                </div>`
]

$(window).on("load", function () {
    const d = cards.length

    for (let i = 0; i < d; i++) {
        const chosen = cards[Math.floor(Math.random() * cards.length)]

        cards.splice(cards.indexOf(chosen), 1)

        $(".products").append(chosen)
    }
})