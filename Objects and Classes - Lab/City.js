function foo(town, area, population, country, postCode) {
    let city = {
        name : town,
        area : area,
        population : population,
        country : country,
        postCode : postCode
    }
    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);   
    }
}

foo("Sofia"," 492", "1238438", "Bulgaria", "1000");