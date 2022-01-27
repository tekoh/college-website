function hey(e) {
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
