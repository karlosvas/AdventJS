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

adjustLights(["🟢", "🟢", "🟢", "🟢"]);
adjustLights(["🟢", "🔴", "🟢", "🔴"]);
adjustLights([""]);
adjustLights(["", ""]);
///////////////////////////////////////////
adjustLights(["🔴", "🔴", "🔴"])
adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])
adjustLights(["🔴", "🔴"])
adjustLights(["🔴", "🟢"])
adjustLights(["🔴"])
