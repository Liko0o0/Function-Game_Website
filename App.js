
//https://mauriciopoppe.github.io/function-plot/ pour les infos sur le module
functionPlot({
    title: 'Trouve la fonction !',
    target: '#root',
    width: 1600,
    height: 800,
    xAxis: {
      label: 'x',
      domain: [-100, 100]
    },
    yAxis: {
      label: 'y'
      [-50, 50]
    },
    data: [
      {
        fn: 'cos(x) * x'
      }
    ]
  })
