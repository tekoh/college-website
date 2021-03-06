function submit(e) {
    e.preventDefault()
    const email = e.target.elements.email.value
    console.log(`given email: ${email}`)

    // email regex
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
    update()

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

// list of product items as objects.
const products = [
    {
        name: "Roomba",
        description: ["automatic cleaning", "elimates dust from your floor", "<i>remember the time before you had pets?</i>"],
        img: "assets/roomba.jpg",
        cost: 300,
        added: 1643627657
    },
    {
        name: "Vector",
        description: ["playful little robot", "ai powered", "<i>your dog might eat him ):</i>"],
        img: "assets/anki.jpg",
        cost: 750,
        added: 1643627743
    },
    {
        name: "Thermomix",
        description: ["create your perfect meals", "built-in instruction system", "<i>literally foolproof</i>"],
        img: "assets/thermomix.jpg",
        cost: 1500,
        added: 1643707175
    },
    {
        name: "Nanoleaf lightstrip",
        description: ["start your smart home", "the best mood lighting", "<i>automatic lighting with apple homekit</i>"],
        img: "assets/nanoleaf-1.jpg",
        cost: 50,
        added: 1643708416
    },
    {
        name: "Apple Homepod mini",
        description: ["connect with your smart home", "fill the house with music", "<i>control the lighting with your voice ????</i>"],
        img: "assets/homepod.jpg",
        cost: 80,
        added: 1643708562
    }
]

// converts the cards from json objects to html elements
function createCard(cardData) {
    let card = '<div class="card">'

    if (cardData.name) {
        card += `<h1>${cardData.name}</h1>`
    }

    if (cardData.description) {
        card += "<ul>"
        for (let item of cardData.description) {
            card += `<li>${item}</li>`
        }
        card += "</ul>"
    }

    if (cardData.img) {
        card += `<img src="${cardData.img}">`
    }

    if (cardData.cost) {
        card += `<p>??${cardData.cost - 0.01}</p>`
    }

    card += "</div>"

    return card
}

// this is called everytime the products need to be updated. it sorts the products and adds them to the document with jquery
function update() {
    $(".products").empty()
    const selected = $("#sort-by").val()

    console.log(selected)

    if (selected == 2) {
        products.sort((a, b) => a.cost - b.cost)
    } else if (selected == 3) {
        products.sort((a, b) => b.cost - a.cost)
    } else if (selected == 4) {
        products.sort((a, b) => b.added - a.added)
    } else if (selected == 5) {
        products.sort((a, b) => a.added - b.added)
    }

    console.log(products)

    for (let product of products) {
        const card = createCard(product)

        $(".products").append(card)
    }
}