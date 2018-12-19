const groupBy = require('./groupBy.node.bundle.min');

// first lets prepare data for our function
    // proper array that we want use
    const arr = [
      {
        marka: 'audi',
        model: 'a7',
        przebieg: '120000'
      },
      {
        marka: 'dodge',
        model: 'viper',
        przebieg: '10000'
      },
      {
        marka: 'audi',
        model: 'a6',
        przebieg: '250000'
      },
      {
        marka: 'fiat',
        model: 'punto',
        przebieg: '95500',
        kolor: 'czerwony'
      }
    ]
    // and some inappropriate type of data to show how errors are handle
    let testString = '1'


    // then let's call our function and sort array via model
    console.log(groupBy.groupBy(arr, 'model'));

    // then let's try with wrong second parameter
    console.log(groupBy.groupBy(arr, 'something'));

    // then let's call again with wrong first parameter
    // to do so you need to comment example above first
    console.log(groupBy.groupBy(testString, 'model'));