const ferment = [
  {
    id: '1990',
    fermentName: 'Smoked Wheat Shoyu',
    fermentType: 'Amino Sauce',
    date: new Date(2021, 4, 5, 8, 0, 0),
    ingredients: [{nameIngredient: 'Soja', quantity: '500g'}],
    currentStep: 1,
    steps: [
      {
        nameStep: 'Koji growing',
        durationStep: 48,
        tempStep: [28, 30],
        controlSimpleStep: ['Mix', 'Look'],
        commentStep: '',
        estimatedEndStep: new Date(2021, 4, 16, 8, 0, 0),
        realEndStep: '',
      },
      {
        nameStep: 'First fermentation',
        durationStep: 168,
        tempStep: [20, 26],
        controlSimpleStep: ['Mix'],
        commentStep: 'You gotta check this everyday mate',
        estimatedEndStep: '',
        realEndStep: '',
      },
    ],
  },
  {
    id: '1991',
    fermentName: 'Miso',
    fermentType: 'Amino Paste',
    date: new Date(2021, 3, 20, 18, 0, 0),
    ingredients: [{nameIngredient: 'Soja', quantity: '500g'}],
    currentStep: 2,
    steps: [
      {
        nameStep: 'Koji incubation',
        durationStep: 48,
        tempStep: '',
        controlSimpleStep: ['Mix'],
        commentStep: '',
        estimatedEndStep: '',
        realEndStep: '',
      },
      {
        nameStep: 'Second fermentation',
        durationStep: 336,
        tempStep: '',
        controlSimpleStep: ['Mix'],
        commentStep: 'You gotta check this everyday mate',
        estimatedEndStep: new Date(2021, 4, 7, 18, 0, 0),
        realEndStep: '',
      },
    ],
  },
];

export default ferment;
