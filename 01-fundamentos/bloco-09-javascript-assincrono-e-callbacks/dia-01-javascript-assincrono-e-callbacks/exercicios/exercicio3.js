const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    const interval = 4000;
    setTimeout(() => console.log(mars), interval);
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos