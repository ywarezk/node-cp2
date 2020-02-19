

fetch("http://localhost:3000/api/send-me-money", {
    method: "POST",
    body: JSON.stringify({
        sendTo: "evil",
        from: "eilon",
        allMoney: true
    })
})