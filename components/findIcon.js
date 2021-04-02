const findIcon = (i) => {
  const loading = [
    {
      label: "Ensoleillé",
      icon: "wi-day-sunny",
      code: 0,
    },
    {
      icon: "wi-day-sunny-overcast",
      label: "Peu nuageux",
      code: 1,
    },

    {
      icon: "wi-day-fog",
      label: "Ciel voilé",
      code: 2,
    },
    {
      icon: "wi-cloud",
      label: "Nuageux",
      code: 3,
    },
    {
      icon: "wi-cloudy",
      label: "Très nuageux",
      code: 4,
    },
    {
      icon: "wi-smog",
      label: "Couvert",
      code: 5,
    },
    {
      icon: "wi-volcano",
      label: "Brouillard givrant",
      code: 6,
    },
    {
      icon: "wi-showers",
      label: "Pluie faible",
      code: 10,
    },
    {
      icon: "wi-hail",
      label: "Pluie modérée",
      code: 11,
    },
    {
      icon: "wi-rain",
      label: "Pluie forte",
      code: 12,
    },
    {
      icon: "wi-tsunami",
      label: "Pluie faible verglaçante",
      code: 13,
    },
    {
      icon: "wi-tsunami",
      label: "Pluie faible verglaçante",
      code: 14,
    },
    {
      icon: "wi-tsunami",
      label: "Pluie faible verglaçante",
      code: 15,
    },
  ];
  const myIcon = loading.filter((e) => {
    return e.code === i;
  });
  return myIcon[0].icon;
};
export default findIcon;
