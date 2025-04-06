const params = new URLSearchParams(window.location.search);
const ip = params.get("ip");
const port = params.get("port");

if (!ip || !port) {
    document.getElementById("status").textContent ="❌ Missing parameters.";
    document.getElementById("message").textContent
} else {
    window.location.href = `steam://connect/${ip}:${port}`;

    document.getElementById("status").textContent = "✅ Redirected!";
    document.getElementById("message").textContent = `Connecting to ${ip}:${port}...`;
}
