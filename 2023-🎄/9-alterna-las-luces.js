function adjustLights(lights) {
    let a = 0, b = 0;
    for (let i = 0; i < lights.length; i++) {
        if (i % 2 == 0) {
            if (lights[i] == "🟢") a++;
            else b++;
        } else {
            if (lights[i] == "🟢") b++;
            else a++;
        }
    }
    return Math.min(a, b)
}

// colores alternos.
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
