const planet =  {
    earth : 1.0,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132,
}

function dogYears(name, age){
    const earthsecond = 31557600 
    const ageInYear = (age / earthsecond) * 7

    return Math.round((ageInYear / planet[name])*100)/100
    
}