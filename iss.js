const latPointer = document.getElementById("latitude-point");
const lonPointer = document.getElementById("longitude-point");
const altPointer = document.getElementById("kmh-pointer");

async function updateISS() {
    try {
        const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
        const data = await res.json();

        const latitude = data.latitude;
        const longitude = data.longitude;
        const altitude = data.altitude;

        const latPercent = (-latitude + 90) / 180 * 100;
        const lonPercent = (longitude + 180) / 360 * 100;
        const altPercent = (-altitude + 435) / (435 - 320) * 100;

        latPointer.style.top = latPercent + "%";
        lonPointer.style.left = lonPercent + "%";
        altPointer.style.top = altPercent + "%";

    } catch (err) {
        console.error("위치 정보를 불러오지 못했습니다.", err);
    }
}

setInterval(updateISS, 1000);
updateISS();
